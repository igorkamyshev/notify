package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"strconv"

	tgbotapi "github.com/go-telegram-bot-api/telegram-bot-api"
)

type Notification struct {
	User    string `json:"user"`
	Message struct {
		Medium string `json:"medium"`
		From   string `json:"from"`
		Name   string `json:"name"`
		Text   string `json:"text"`
	} `json:"message"`
}

func main() {
	// -- Telegram

	token := os.Getenv("TELEGRAM_KEY")
	url := os.Getenv("PUBLIC_URL")

	postfix := "/tg/"

	bot, err := tgbotapi.NewBotAPI(token)
	if err != nil {
		log.Panic(err)
	}

	bot.SetWebhook(tgbotapi.NewWebhook(url + postfix + bot.Token))

	startHandler := func(u tgbotapi.Update) {
		if u.Message.Text != "/start" {
			return
		}

		msg := tgbotapi.NewMessage(
			u.Message.Chat.ID,
			"Hello! For API requests use following information. User ID is `"+strconv.FormatInt(u.Message.Chat.ID, 10)+"`",
		)
		msg.ReplyToMessageID = u.Message.MessageID
		msg.ParseMode = tgbotapi.ModeMarkdown

		bot.Send(msg)
	}

	go (func() {
		updates := bot.ListenForWebhook(postfix + bot.Token)

		for update := range updates {
			startHandler(update)
		}
	})()

	// -- HTTP

	sendHandler := func(w http.ResponseWriter, r *http.Request) {
		if r.Method != "POST" {
			http.Error(w, "Method is not supported.", http.StatusNotFound)
			return
		}

		var n Notification
		err := json.NewDecoder(r.Body).Decode(&n)

		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		user, err := strconv.ParseInt(n.User, 10, 32)

		if err != nil {
			http.Error(w, "Incorrect user ID", http.StatusBadRequest)
			return
		}

		buf := bytes.NewBufferString("")
		fmt.Fprintf(buf, "*From*: %v <%v>\n\n%v\n\nmedium: %v", n.Message.Name, n.Message.From, n.Message.Text, n.Message.Medium)

		msg := tgbotapi.NewMessage(
			user,
			buf.String(),
		)
		msg.ParseMode = tgbotapi.ModeMarkdown

		bot.Send(msg)
	}

	http.HandleFunc("/v0/telegram", sendHandler) // backward compatibility
	http.HandleFunc("/v1/send", sendHandler)

	fmt.Printf("Starting server at port 8080\n")

	http.ListenAndServe(":8080", nil)
}

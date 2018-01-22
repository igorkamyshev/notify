const TelegramBot = require('node-telegram-bot-api')

const token = process.env.TELEGRAM_KEY

const bot = new TelegramBot(token, { polling: true })

bot.onText(/\/start/, (msg, match) => {
    const chatId = msg.chat.id
  
    bot.sendMessage(chatId, `Your chat id is ${chatId}`)
})

module.exports.send = (user, message) => bot.sendMessage(user, message, { parse_mode: 'Markdown' })

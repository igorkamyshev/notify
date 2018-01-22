const TelegramBot = require('node-telegram-bot-api')

const token = process.env.TELEGRAM_KEY

const bot = new TelegramBot(token, { polling: true })

const send = (user, message) => bot.sendMessage(user, message, { parse_mode: 'Markdown' })


bot.onText(/\/start/, async (msg, match) => {
    const chatId = msg.chat.id
  
    await send(chatId, 'Hello! For API requests use following information.')
    await send(chatId, `\`user: "${chatId}"\``)
})


const createMessage = data => [ '----', `*Medium:* ${data.medium}`, `*From*: ${data.name} <${data.from}>`, data.text].join("\n\n")
const sendMessage = (user, data) => send(user, createMessage(data))

module.exports = {
    sendMessage
}

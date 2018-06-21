const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')

const { telegram } = require('./destinations/index')

const app = express()
const port = 8080

app.use(bodyParser.json())
app.use(cors())

app.post('/api/v0/telegram', (request, response) => {
    const data = request.body

    telegram.sendMessage(data.user, data.message)
        .then(() => {
            response.status(200)
            response.send()
        })
        .catch(() => {
            response.status(500)
            response.send('Something went wrong')
        })
})

app.listen(port)

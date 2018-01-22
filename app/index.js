const express = require('express')
const bodyParser = require('body-parser')

const { telegram } = require('./distanations/index')

const app = express()
const port = 8080

app.use(bodyParser.json())

app.post('/api/v0/telegram', (request, response) => {
    const data = request.body

    telegram.sendMessage(data.user, data.message)
        .then(message => {
            response.status(200)
            response.send()
        })
        .catch(err => {
            response.status(500)
            response.send()
        })
})

app.listen(port)
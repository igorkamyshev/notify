const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')

const { telegram } = require('./distanations/index')

const LANDING_PATH = '../landing/out'

const app = express()
const port = 8080

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, LANDING_PATH)));

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, `${LANDING_PATH}/index.html`))
})

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
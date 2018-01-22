const express = require('express')
const bodyParser = require('body-parser')

const dists = require('./distanations/index')
const { createMessage } = require('./utils')

const app = express()
const port = 3000

app.use(bodyParser.json())

app.post('/api/v0/telegram', (request, response) => {
    const data = request.body

    dists.telegram.send(data.user, createMessage(data.message))

    response.json('ok')
})

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})
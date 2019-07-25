const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')

const { telegram } = require('./destinations')

const app = express()
const port = 8080

app.use(bodyParser.json())
app.use(cors())

app.post('/v0/telegram', async (request, response) => {
  const { user, message } = request.body

  const [code, result] = await telegram
    .sendMessage(user, message)
    .then(() => [200, 'Success'])
    .catch(() => [500, 'Something went wrong'])

  response.status(code)
  response.send(result)
})

app.listen(port)

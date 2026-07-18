const express = require('express')

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Hello World', status: 'ok' })
})

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' })
})

const server = app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

module.exports = { app, server }

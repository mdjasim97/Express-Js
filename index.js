const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).end('Hello Express JS')
})

app.get('/status', (req, res) => {
    res.status(401).end('Hello Express JS')
})


app.listen(5000, () => {
    console.log('Server running port is 5000')
})
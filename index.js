const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello Express Js.')
})


app.listen(5000, () => {
    console.log('Server running port is 5000')
})
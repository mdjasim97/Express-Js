const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello Express Js.')
})

app.post('/about', (req, res) => {
    res.send('About page')
})

app.put('/contact', (req, res) => {
    res.send('Contact page')
})

app.delete('/services', (req, res) => {
    res.send('Services page')
})


app.listen(5000, () => {
    console.log('Server running port is 5000')
})
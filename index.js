const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).end('Hello Express JS')
})

// json response Practice
app.get('/json', (req, res) => {
    const myJsonData = [
        {
            "name": "Alice Johnson",
            "city": "New York",
            "occupation": "Software Engineer"
        },
        {
            "name": "Bob Smith",
            "city": "San Francisco",
            "occupation": "Product Manager"
        },
        {
            "name": "Charlie Davis",
            "city": "Chicago",
            "occupation": "Graphic Designer"
        },
        {
            "name": "Diana Evans",
            "city": "Austin",
            "occupation": "Data Scientist"
        },
        {
            "name": "Ethan Brown",
            "city": "Seattle",
            "occupation": "Marketing Specialist"
        }
    ]

    res.json(myJsonData)
})

// download response 
app.get('/download', (req, res) => {
    res.download('./files/downloadFile.png')
})

// redirect response 
app.get('/redirect', (req, res) => {
    res.redirect('/json')
})

// Header Data 
app.get('/header', (req, res) => {
    res.append('Name', 'Md Jasim Uddin')
    res.append('Age', '22')
    res.append('city', 'Rajshahi')
    res.send("Hello Headers")
})


app.listen(5000, () => {
    console.log('Server running port is 5000')
})
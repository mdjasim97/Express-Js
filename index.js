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


// set Cookies Response 
app.get('/cookie', (req, res) => {
    res.cookie('Name', "Md Jasim Uddin")
    res.cookie('Age', "22 Years Old")
    res.cookie('City', "Rajshahi")
    res.send("Hello Cookies")
})

// clear Cookies Response 
app.get('/clearCookie', (req, res) => {
    res.clearCookie('Name')
    res.clearCookie('Age')
    res.clearCookie('City')
    res.send("Hello Clear Cookies")
})

// Query Search Response 
app.get('/search', (req, res) => {
    let useName = req.query.name;
    const useAge = req.query.age;
    res.end("Hello " + useName + ", age: " + useAge);
})


app.listen(5000, () => {
    console.log('Server running port is 5000')
})
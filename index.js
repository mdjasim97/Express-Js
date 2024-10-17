const express = require('express')
const multer = require('multer');
const app = express()




app.use(express.json())
// app.use(multer.array())
// app.use(express.static('public'));

// application laval middleware 
// app.use('/', (req, res, next) => {
//     console.log("This is application laval middleware")
//     next()
// })

// single route middleware 
app.use('/json', (req, res, next) => {
    console.log("This is single route middleware")
    next()
})

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


// get header data from header property 
app.get('/getHeader', (req, res) => {
    let userName = req.header('Name');
    const userAge = req.header('Age');
    res.send("Get Header Data. Congratulation " + userName + ", age: " + userAge);
})

// get json data from Post Request 
app.post('/postBlog', (req, res) => {
    let blog = req.body;
    // console.log(blog)
    let title = blog['Title']
    let descriptions = blog['Descrip']
    res.send("Blog Name : " + title + " \n Descriptions : " + descriptions)
})


// Access multipart form data
// app.post('/formData', (req, res) => {
//     let blog = req.body;
//     res.send(JSON.stringify(blog))
// })


// file or Data upload storage
var storage = multer.diskStorage({
    destination: function (req, file, callBack) {
        callBack(null, './files');
    },
    filename: function (req, file, callBack) {
        callBack(null, file.originalname)
    }
});

var upload = multer({ storage: storage }).single('myfile')


app.post('/uploadFile', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.send("File upload failed")
        } else {
            res.send("File uploaded successful.")
        }
    });
});






app.listen(5000, () => {
    console.log('Server running port is 5000')
})
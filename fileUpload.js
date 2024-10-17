const express = require("express");
const multer = require('multer')
const app = express()


app.use(express.json())
app.use(express.static('Public'))

// file or Data upload storage
let storage = multer.diskStorage({
    diskStorage: (req, file, callback) => {
        callback(null, './files')
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
})

let upload = multer({ storage: storage }).single('myFiles')


app.post('/uploadFile', (req, res) => {
    upload(req, res, () => {
        if (error) {
            return res.send("File upload failed")
        } else {
            res.send("File uploaded successful.")
        }
    })

    res.send("file upload done")
})

app.listen(5000, () => {
    console.log('Server running port is 5000')
})
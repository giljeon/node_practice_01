const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jgnodeweb:jgnodeweb@cluster0.brsdn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authenticationDatabase: null,
    ssl: false
}).then(()=>{
    console.log('DB connect')
}).catch(err => console.error('DB Error',err))


app.get('/', (req, res) => {
    res.send('Hello World!!, 안녕하세요.')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
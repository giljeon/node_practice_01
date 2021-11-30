const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const { User } = require('./models/User');

const config = require('./config/key');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.once('open', () => {
    console.log('connected to DB')
});

db.on('error', (err) => {
    console.log('DB Error : ', err)
});

app.get('/', (req, res) => {
    res.send('Hello World!!, 안녕하세요.')
});


app.post('/register', (req, res) => {
    //회원 가입 할 때 필요한 정보들을 client 에서 가져오면
    // 그것들을 데이터 베이스에 넣어준다.

    const user = new User(req.body)
    user.save((err, doc) => {
       if (err) return res.json({successs:false, err})
       return res.status(200).json({successs:true});
    });
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
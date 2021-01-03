require('dotenv').config()
const express = require('express');
const db = require('./utils/config');
const userRouter = require('./models/user/user-router')
const listRouter = require('./models/list/list-router')
const washesRouter = require('./models/washes/washes-router')
const Port = process.env.PORT
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const auth = require('./utils/auth')
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'))

app.post('/signin', auth.signin);
app.post('/signup', auth.signup);

app.use('/api', auth.protect);
app.use('/api/user', userRouter);
app.use('/api/list', listRouter);
app.use('/api/washes', washesRouter);

const start = async () => {
    try{
        await db.connect()
        app.listen(Port, () => {
            console.log(`REST API on http://localhost:${Port}/api`)
        })
    } catch (e) {
        console.error(e)
    }
}

start();

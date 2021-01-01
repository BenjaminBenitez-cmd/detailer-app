const express = require('express');
const db = require('./utils/config');
const userRouter = require('./models/item/user-router')
const listRouter = require('./models/list/list-router')
const Port = 3000;
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'))

app.use('/api/user', userRouter);
app.use('/api/list', listRouter);

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

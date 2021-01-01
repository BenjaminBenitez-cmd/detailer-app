const express = require('express');
const controller = require('./user-controller')

const router = express.Router();

router 
    .route('/')
    .post(controller.createUser)
    .get((req, res) => {
        res.send('Route connected')
    })

module.exports = router;
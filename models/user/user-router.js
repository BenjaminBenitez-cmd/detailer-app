const express = require('express');
const controller = require('./user-controller')

const router = express.Router();

router 
    .route('/')
    .post(controller.createUser)

router	
    .route('/me')
    .get(controller.me)

module.exports = router;

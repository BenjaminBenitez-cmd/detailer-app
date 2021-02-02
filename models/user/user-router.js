const express = require('express');
const controller = require('./user-controller')

const router = express.Router();

router 
    .route('/')
    .post(controller.createUser)
    .put(controller.updateMe)

router	
    .route('/me')
    .get(controller.me)

module.exports = router;

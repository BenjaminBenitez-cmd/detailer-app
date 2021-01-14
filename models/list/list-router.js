const express = require('express');
const controllers = require('./list-controller')
const router = express.Router();

router
    .route('/')
    .get(controllers.getMany)
    .post(controllers.createOne)

router
    .route('/:id')
    .get(controllers.getOne)
    .put(controllers.updateOne)
    .delete(controllers.removeOne)

module.exports = router
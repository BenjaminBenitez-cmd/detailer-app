require('dotenv').config();
const mongoose = require('mongoose');
const url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.bagio.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

module.exports = {
    connect: () => {
        return mongoose.connect(
        url, 
        { useUnifiedTopology:true, useNewUrlParser: true }
    )
    }
}
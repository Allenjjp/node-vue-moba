module.exports = app => {
    const mongoose = require('mongoose')

    mongoose.connect('mongodb://localhost:27017/node-vue-moba', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connection Successful"))
    .catch(err => console.log(err));

    require('require-all')(__dirname + '/../models')
}
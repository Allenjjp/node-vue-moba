const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    // 用户名
    username: {
        type: String
    },
    // 密码
    password: {
        type: String,
        select: false,
        set(val) {
            return require('bcrypt').hashSync(val, 10)
        }
    }
})

module.exports = mongoose.model('AdminUser', schema)
/**
 * Created by Emonice on 2017/10/17.
 */
var User = require('../lib/mongo').User;
module.exports = {
    //注册一个用户
    create: function create(user){
        return User.create(user).exec();
    },
    getUserByName: function getUserByName(name){
        return User
            .findOne({name : name})
            .addCreatedAt() //使用了 addCreatedAt 自定义插件（通过 _id 生成时间戳）
            .exec();
    }
}
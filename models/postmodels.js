const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    category:{type: String, required:true},

    img:{type: String, required:true},

    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Users'},

    comment: [ {user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
          content: {type:String}}],
    
    likes: [ {user_id: {type: String, ref: 'User'}}]
    
});

module.exports = mongoose.model('post',postSchema)

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const commentSchema = new Schema({
  text : String,
  _creator: {
    type: Schema.Types.ObjectId, 
    ref: 'User'
  },
  _post: {
    type: Schema.Types.ObjectId, 
    ref: 'Post'
  }
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;

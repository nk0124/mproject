
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/myblog');
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: {type: String,required:true},
  author: String,
  body: String,
  date: { type: Date, default: Date.now },
  hidden: Boolean,
});
const Blog = mongoose.model('Blog',blogSchema );
const article = new Blog({ title: 'my third article',author:'raj',body:'sample1 text',hidden:true });
article.save().then(() => console.log('record save'));

Blog.find().then((res)=>{console.log(res)})
let id="653bb8f68c071548609d72b7";
Blog.deleteOne({_id:id}).then((res)=>{console.log(res)})


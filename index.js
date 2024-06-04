// first step imprt the mongoose 
// second step connection , schema,model,insert the dataor find or delete...
const mongoose = require('mongoose');
// mongoose ko connect kiya mongodb ke sath 
// // 127.0.0.. the address of the mongodb 
// myblog  the name of the database
// mongoose mongodb ke database ko handle kerta hai
// express hai jo router ko handle kerta hai or sath hi request listen kerta hai then response deta hai front endko
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


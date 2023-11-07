const mongoose = require('mongoose');
const stu = mongoose.Schema({
   id: Number,
   name: String,
   sem: Number,
   email: String,
   branch: String
});
module.exports = mongoose.model("Student",stu);
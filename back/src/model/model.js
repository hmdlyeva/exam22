const mongoose = require('mongoose');

const schema = mongoose.Schema({
    prodname:String,
    price:Number,
    ingredients:String,
    image:String
},  {
    collection: "Users",
    timestamps: true,
  })


  const Users = mongoose.model("Users", schema);
  module.exports = Users;
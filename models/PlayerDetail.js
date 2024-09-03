const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required:true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile:{
    type:String,
    required:true,
  },
  role:{
    type:String,
    enum:["batsman","bowler","wicketkeeper","allrounder"],
    required:true,
  }
});

const Player = mongoose.model("Player", playerSchema);
module.exports = Player;
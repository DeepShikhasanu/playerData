const mongoose = require("mongoose");
require("dotenv").config();

//const mongoURL= "mongodb://localhost:27017/players"
const mongoURL = process.env.MONGOODB_URL;

const db = async () => {
  try {
    await mongoose.connect(mongoURL)
    console.log("DB Connected..");
  } catch (e) {
    console.log(e);
  }
};
db(mongoose.connection);
module.exports = db;
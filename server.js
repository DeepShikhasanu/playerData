const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

//db.js
const db = require("./db");

// Use CORS to handle cross-origin requests
const cors = require("cors");
app.use(cors());

//Blogs Route
const playerRoutes = require("./routes/playerRoutes");
app.use("/player", playerRoutes);

//.env
require("dotenv").config();
const PORT = process.env.PORT || 4002;

app.listen(PORT, () => {
  console.log("listening on port 4002");
});
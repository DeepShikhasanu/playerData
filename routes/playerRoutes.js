const express = require("express");
const router = express.Router();

const Player = require("../models/PlayerDetail");

//Create
router.post("/", async (req, res) => {
  try {
    const data = req.body; // Assuming the request body contains the Products data
    const newPlayer = new Player(data); // Create a new Data
    const response = await newPlayer.save(); // Save the new Data to the database
    console.log('data saved');
    res.status(200).json(response);
  } catch (e) {
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
});

//Read
router.get("/", async (req, res) => {
  try {
    const data = req.body;
    const getData = await Player.find(data);
    console.log('data fetched');
    res.status(200).json(getData);
  } catch (e) {
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
});

//Update
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params; // Extract the id from the URL parameter
    const data = req.body;

    const response = await Player.findByIdAndUpdate(id, data, {
      new: true, // Return the updated document
      runValidators: true, // Run Mongoose validation
    });
    if(!response){
        return res.status(404).json({error:"Player not found"});
    }
    console.log("data updated");
    res.status(200).json(response)
    
  } catch (e) {
    console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
  }
});

//Delete
router.delete("/:id", async (req, resp) => {
  try {
    const { id } = req.params; // Extract the id from the URL parameter

    const response = await Player.findByIdAndDelete(id);
    if(!response){
        return res.status(404).json({error:"Player not found"});
    }
    console.log('data delete');
    res.status(200).json({message: 'player Deleted Successfully'});
  } catch (e) {
    console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
  }
});

module.exports = router;
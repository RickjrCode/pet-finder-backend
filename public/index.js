// import the pets array from data.js
const pets = require("./data");

// Initialize express app
const express = require("express");
const app = express();

const PORT = 8080;

// GET - / - returns homepage
app.get("/", (req, res) => {
  // serve up the public folder as static index.html file
});

// hello world route
app.get("/api", (req, res) => {
  //Send a simple "Hello World!" message as a response
  res.send("Hello World!");
});

// get all pets from the database
app.get("/api/v1/pets", (req, res) => {
  // send the pets array as a response
  res.json(pets);
});

// get pet by owner with query string
app.get("/api/v1/pets/owner", (req, res) => {
  // get the owner from the request
  const { owner } = req.query;

  // find the pet in the pets array
  const pet = pets.find((pet) => pet.owner === owner);

  // send the pet as a response
  if (pet) {
    res.json(pet);
  } else {
    //if pet not found, return a 404 status
    res.status(404).json({ message: "pet not found" });
  }
});

// get pet by name
app.get("/api/v1/pets/:name", (req, res) => {
  // get the name from the request
  const { name } = req.params;

  // find the pet in the pets array
  const pet = pets.find((pet) => pet.name === name);

  // send the pet as a response
  if (pet) {
    res.json(pet);
  } else {
    //if pet not found, return a 404 status
    res.status(404).json({ message: "pet not found" });
  }
});

//start the server and listen on the specified port
app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});

//export the app (good for testing)
module.exports = app;

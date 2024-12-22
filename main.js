const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`The Server is Running On The Port ${port}`);
});

// Getting The Request
app.get("/movies", () => {});

//Getting The Request and Giving The Body or Response
app.post("/movies", () => {});

// Getting The Request for Updating
app.put("/movies/:id", () => {});

//Getting The Request for Deleting
app.delete("/movies/:id", () => {});

//  Use DRY principle => D-> Don't , R -> Repeat , Y -> Yourself (Don't Repeat Yourself)
//  use KISS principle => K -> Keep , I -> it , S -> Simple , S -> Stupid (Keep it Simple , Stupid)

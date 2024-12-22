const express = require("express");
const app = express();
const port = 8080;
app.get("/", (req, res) => {
  res.send("Hello world");
});
app.listen(port, () => {
  console.log(`The Server is Running On The Port ${port}`);
});
//  Use DRY principle => D-> Don't , R -> Repeat , Y -> Yourself (Don't Repeat Yourself)
//  use KISS principle => K -> Keep , I -> it , S -> Simple , S -> Stupid (Keep it Simple , Stupid)
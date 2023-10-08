const express = require("express");
const list = require("./list.json");

const app = express();
const port = 8081;

app.get("/list", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send(list);
});
app.post("/list", (req, res) => {
  //todo
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


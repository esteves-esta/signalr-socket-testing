require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use("/", express.static("/home/fernanda_esteves/Downloads/teste"));

app.listen(port, () => {
  console.log(`Servidor rodando http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.sendFile("/home/fernanda_esteves/Downloads/teste/index.html");
});

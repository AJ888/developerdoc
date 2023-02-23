// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

//using api end-point to exchange data between back-end and front-end
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
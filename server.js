import express from "express";
import connect from "./config/db.js";


const app = express();
const PORT = process.env.PORT || 3000;

connect();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
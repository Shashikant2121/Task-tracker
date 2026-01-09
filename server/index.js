const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("mongoDB connected"))
  .catch((err) => console.log(err));


app.use("/api/tasks", require("./routes/tastRoutes"));


app.get("/", (req, res) => {
  res.send("Server is running!");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));

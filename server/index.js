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

app.use("/api", require("./routes/tastRoutes"));

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));

const express = require("express");
const app = express();

//Get the environment variables
require("dotenv").config();

//Set the port
const PORT = process.env.PORT || 3000;

//Rest Endpoint
app.get("/api", (req, res) => {
  res.send("Welcome to Open AI");
});

//Request body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Route middleware
app.use("/openai", require("./Routes/route"));

//Express app listening to the port
app.listen(PORT, console.log(`Listening to port ${PORT}`));

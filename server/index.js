const express = require("express");
const connectDatabase = require("./utils/connectDatabase");
const dotenv = require("dotenv");
const productURL = require("./routes/product");

//Use dotenv package wit the path
dotenv.config({ path: "./.env" });

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

//Connect to database
connectDatabase();
app.use("/product", productURL);

app.listen(PORT, () => {
  console.log(`Server is running: ${PORT}`);
});

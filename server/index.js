const express = require("express");
const cookieParser = require("cookie-parser");
const connectDatabase = require("./utils/connectDatabase");
const dotenv = require("dotenv");
const productURL = require("./routes/productRoute");
const userURL = require("./routes/userRoute");

//Use dotenv package wit the path
dotenv.config({ path: "./.env" });

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());

//Connect to database
connectDatabase();
app.use("/product", productURL);
app.use("/account", userURL);

app.listen(PORT, () => {
  console.log(`Server is running: ${PORT}`);
});

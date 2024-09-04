require("dotenv").config({});
const express = require("express");
const app = express();

const os = require("os")
const chalk = require("chalk")
const port = process.env.PORT || 4000;

const userRoutes = require("./routes/userRoutes");


app.use('/api/v1/users', userRoutes);



app.listen(port, () => {
    console.log(chalk.bgWhite(`Server is working ${port}`));
});
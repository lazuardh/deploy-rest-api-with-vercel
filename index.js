 require("./bin/www");
 require('dotenv').config();
 const { config } = require("dotenv");
 const express = require('express');
 const app = express();

 var userRoutes = require('./routes/users');

 app.get("/", (req, res)=> {
    return res.json({
        message: 'response sucesssfully ',
        author: "habbyan lazuard"
    });
 });

 app.use("/users", userRoutes);

 app.listen(process.env.PORT, ()=> {
    console.log('proccess running at port successfull')
 });
 require("./bin/www");
 const { config } = require("dotenv");
 const express = require('express');
 const app = express();

 var userRoutes = require('./routes/users');

 app.get("/", (req, res)=> {
    return res.json({
        message: 'ok',
        author: "habbyan lazuard"
    });
 });

 app.use("/users", userRoutes);

 app.listen(8000, ()=> {
    console.log('proccess running at port successfull')
 });
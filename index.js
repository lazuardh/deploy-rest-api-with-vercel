 const express = require('express');
 const app = express();

 app.get("/", (req, res)=> {
    return res.json({
        message: 'response sucesssfully ',
        author: "habbyan lazuard"
    });
 });

 app.get("/users", (res, req)=> {
   return  res.json({
      message: 'response successfully'
   });
 });

 app.listen(8000, ()=> {
    console.log('proccess running at port 8000 ');
 });
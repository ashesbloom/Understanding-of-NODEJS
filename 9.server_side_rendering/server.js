//Implementing server side rendering using EJS
//EJS is a templating engine that generates HTML markup with plain JavaScript
//to install EJS use the command npm i ejs
const express = require('express');
const app = express();
const path = require('path'); //path module is used to resolve the path of the file it is an inbuilt module of nodejs

app.set("view engine","ejs"); //setting the view engine to ejs
app.set('views',path.resolve("./server_side_rendering/views")); //setting the views directory to the views folder(MVC pattern)

// http://localhost:5000/'username'
app.get('/:username',async(req,res)=>{ //rendering the home.ejs file from the views folder
    return res.render('home',{
        user: req.params.username //we can also pass variables to the ejs file
    }); 
})

app.listen(5000,()=>{console.log('Server is live on the port 5000')});
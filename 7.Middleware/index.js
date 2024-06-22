const http = require('http');
const express = require('express');
const app = express();
//visit https://expressjs.com/en/guide/using-middleware.html for documentation
//Middleware
app.use((req,res,next)=>{    //middleware works in a hierarchical order from top to bottom
    console.log('This is middleware 1');
    // return res.json({message:'hello from middleware 1'})  //if we use return then it will not go to next middleware and the request will be stuck here
    req.myname = 'Admin'; //we can add our own properties to request object
    next(); //next function is used to go to the next middleware of next hierarchy
});
app.use((req,res,next)=>{
    console.log('This is middleware 2');  //if you see in console, this will be printed after middleware 1
    console.log(req.myname); //this will print the value of myname which we added in middleware 1
    // anychange in middleware prisists troughout the code
    next(); // this next function will go to our routes
});

//Routes
app.get('/',(req,res)=>{
    res.send('Welcome to Home Page');
    console.log('this is get request\n'+req.myname); //this will print the value of myname which we added in middleware 1
});
app.get('/about',(req,res)=>{
    res.send('About Us');
});


//server listening on port 8000
app.listen(8000,()=>{console.log('Server is running on port 8000')});
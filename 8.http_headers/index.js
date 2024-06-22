const http = require('http');
const express = require('express');
const app = express();

// for more information on request headers visit https://flaviocopes.com/http-request-headers/
// for more information on response headers visit https://flaviocopes.com/http-response-headers/

//Routes
app.get('/',(req,res)=>{
    console.log(req.headers); //printing headers
    res.setHeader("X-username","Ashesbloom"); //setting custom header (adding X- in front of header name is a convention to set custom header)
    // it should always be set before sending response
    res.send('Welcome to Home Page');
});
app.get('/about',(req,res)=>{
    console.log(req.headers); //printing headers
    res.send('About Us');
});


//server listening on port 8000
app.listen(8000,()=>{console.log('Server is running on port 8000')});
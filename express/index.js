//this program is the application of the express in nodejs
//express is a web application framework for nodejs
//for using express we have to install the famework by using the command npm i express and check in the package.json file for the dependency

const http = require("http");
const express = require('express');

//now we have to create an object of the express framework
//which will act like a handler funtion
const app = express();

app.get("/",(req,res) => { //(app.get) is a method of the express framework which will handle the get request
    return res.send('you have reached the server');//(res.send) is a method of the express framwork which will send the response to the client
});
//here we also don't need url module to handle query string
app.get("/about",(req,res) => {
    return res.send(`you have reached the about page ${req.query.myname}`);
});

function myhandler(req, res) {
    if (req.url === '/favicon.ico') return res.end();

    switch (req.url) {
        case "/":
            res.end(`<html><body><h2>You are on the <h1>home page</h1> of the server</h2></body></html>`);
            break;
        case "/about":
            res.end('<html><body><h2>You are on the <h1>about page</h1> of the server</h2></body></html>');
            break;
        case "/contact":
            res.end('<html><body><h2>You are on the <h1>contact page</h1> of the server</h2></body></html>');
            break;
        default:
            res.end('<html><body><center><h1>404 page not found</h1></center></body></html>');
            break;
    }
};//instead of using the switch case we can use the express to handle the request for the ease of the developer

//const myserver = http.createServer(app);
//here instead if using the myhandler function we are using the app object of the express framework to handle the request

//myserver.listen(8000, () => { console.log('server is listening on port 8000') });

//we can also use the app object to create the server and listen to the port at the same time 

app.listen(8000, () => { console.log('server is listening on port 8000') });

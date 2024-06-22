//this code is to store log of the server in a file named 'log.txt'
//please check out the index.js file to grasp the logic of the server building

const http = require("http");
const fs = require("fs");

const myserver = http.createServer((req,res) => {
    const currentTime = new Date().toLocaleTimeString();
    const currentdate = new Date().toLocaleDateString();
    const log = `request made at ${currentdate}|${currentTime} on ${req.url}\n`;//req.url will give us the url of the request made by the client
    if(req.url === '/favicon.ico') return res.end(); //in chrome browser it will make a request for favicon.ico we are filtering it out
    fs.appendFile('./http_server/log.txt',log,(err,data)=>{
        if(err){
            console.log('error '+err);//this is if we encounter any error while appending the file
        }else{
            console.log('request made');
            switch(req.url){//this switch case will give us the response according to the url requested by the client
                //currntly we have no pages on our server so you can write any url and it will give you the response accordingly
                //for example if you write localhost:8000/about it will give you the response of about page
                case "/":
                    res.end('<html><body><h2>You are on the <h1>home page</h1> of the server</h2></body></html>');
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
        }
    })
});

//handling all that request and switch case it get very messy so we use the express framework to handle the request
//which is explained in the express folder

myserver.listen(8000,()=>{console.log('server is listening on port 8000')})
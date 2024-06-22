//its a good practice to use the 'index' name for the main file of the sevrer
//The comments in this code are crucial for understanding it. Please bear with them to grasp the code's logic.


// for creating or using the server we need to use the http module

const http = require("http");

//now we will create a server using the createServer method of http module in a const variable `myserver`
    // [syntax]
const myserver = http.createServer((request, response) => { //this method takes two parameters request and response
    console.log('request made'); //this will let us know that the request has been made
    response.end('you have reached the server'); //response variable will send the response to the client
    console.log(request); // request variable will give us the information about the request made by the client
    
})

//to listen the server on a specific port we use the listen method
//as we are using local machine to run the server all the ports will be open to use
    // [syntax]
myserver.listen(8000,()=>{console.log('server is listening on port 8000')});// will console log the message to us when the server starts
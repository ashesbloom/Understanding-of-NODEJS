//this program is the application of the express module in nodejs
//express is a web application framework for nodejs

const http = require('http');

const myServer = http.createServer((req, res) => {
    const method = req.method;//this will give the method of the request [GET, POST, PUT, DELETE]
    console.log(method);
    res.end('You have reached the server');
})

myServer.listen(8000, () => {
    console.log('Server is running on port 8000');
});



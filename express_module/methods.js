// Code to understand the methods of the request in the server

const http = require('http');

const myServer = http.createServer((req, res) => {
    const method = req.method;//this will give the method of the request [GET, POST, PUT, DELETE]
    console.log(method);
    res.end('You have reached the server');
})

myServer.listen(8000, () => {
    console.log('Server is running on port 8000');
});



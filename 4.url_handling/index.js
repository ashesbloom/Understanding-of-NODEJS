//in this code will will see how to handle and extract the query,pathname and the search parameters from the url
//please pass the url with query parameters like localhost:8000/?myname=yourname 
//or localhost:8000/search?myname=yourname&search=yoursearch

//we need the url module/package to handle the url so, we have to download it from npm `npm i url`

const http = require("http");
const url = require("url");

const myserver = http.createServer((req,res) => {
    const info = url.parse(req.url,true);//this will parse the url and give us the information about the url
    //the true parameter will give us the query parameters in the form of an object
    const pathname = info.pathname;//this will give us the pathname of the url
    console.log(info);
    switch(pathname){
        case "/":
            res.end('Welcome '+info.query.myname+' to the server');//this will give us the query parameter named myname
            break;
        case "/about":
            res.end(info.query.myname+' You are on the about page');
            break;
        case "/search":
            res.end(info.query.myname+' search query is: '+info.query.search);//this will give us the query parameter named search
            break;
        default:
            res.end('404 page not found');
            break;
    }
})
//handling all that request and switch case it get very messy so we use the express framework to handle the request
//which is explained in the express folder

myserver.listen(8000, ()=>{console.log('server is listening on port 8000')});

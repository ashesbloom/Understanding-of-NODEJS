console.log('\n**file handling**\n');

//for file handling we require module named filesystem 'fs'
const fs = require("fs");

//to create a file we use writeFile funtion 

    //sync(blocking) (sync funtion returns value)
    //[syntax]

fs.writeFileSync('sync.txt','\nhello :) this is sync file\n');

    //Async(non-blocking) (do not return any value and expect a call back like error)
    //[syntax]

fs.writeFile('async.txt','\nhello :) this is a async file\n', (err) => {});

// to append anything in file
    //sync...
    //[syntax]

fs.appendFileSync("./sync.txt",`appended_text in sync file`);

//file reading 
    //sync...
    //[syntax]

const result = fs.readFileSync('sync.txt','utf-8');
console.log(result);
    
    //async
    //[syntax]

fs.readFile("async.txt","utf-8",(err,r)=>{
    if(err){
        console.log('error '+err);//if error occurs
    }else{
        console.log(r);
    }
});

// to check status of file
    // [syntax]

console.log(fs.statSync('./sync.txt'));
//after running the code you will observe that the blocking(sync) code is running first --why?
// because of the nature of sync code which is blocking the request until it is completed
// hence 'async' code is running after the 'sync' code

//to delete or remove a file 
    //[sytnax]

fs.unlinkSync('async.txt');
fs.unlinkSync('sync.txt');


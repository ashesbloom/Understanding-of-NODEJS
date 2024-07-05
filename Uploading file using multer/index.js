//to use uploaded file use use module named multer (https://www.npmjs.com/package/multer)
const multer = require('multer');

const express = require('express');
const app = express();
const PORT = 8000;

const Path = require('path');

app.use(express.urlencoded({extended:true})) //to pass form data from html

app.set('view engine','ejs');
app.set('path',Path.resolve('./Uploading file using multer/views'));

const config = multer.diskStorage({ //to change file configurations
    destination: function(req,file,cb){
        return cb(null,'./uploads');
    },
    filename: function(req,file,cb){
        return cb(null,`${Date.now()}-${file.originalname}`);
    },
})

//upload is a middleware to upload file in the destination folder with the filename using cutom configuration
const upload = multer({storage: config}); 

app.get('/',(req,res)=>{
    res.render('homepage');
})

app.post('/upload',upload.single('profileImage'), async(req,res)=>{ 
    //we can use upload.array('profileImage','banner') to upload multiple files
    console.log(req.body); // body object will be null as there is no text field
    console.log(req.file);
    return res.redirect('/');
})

app.listen(PORT,()=>{console.log(`Server is running on ${PORT}`)});



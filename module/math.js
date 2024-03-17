function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}


// to use the above functions in another file, we need to export them
// we can export them using module.exports
// module.exports is an object that will hold all the functions and variables that we want to export

module.exports = {
    add,
    sub
}

// we can also export the funtion in inline way
// but as we are using multiple functions, we are using the above method
exports.mult = (a,b) => a*b;
//this is the line of code will not execute hence will not throw any error
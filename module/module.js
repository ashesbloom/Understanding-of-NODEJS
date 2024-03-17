console.log('\n**module info**\n');

// to run any external module, we need to first import the module
// and in node js we use require() function to import the module

const math =  require('./math.js');
//math is a module which is imported from math.js file

console.log('addition:',math.add(2,4));
console.log('subtraction:',math.sub(2,4));

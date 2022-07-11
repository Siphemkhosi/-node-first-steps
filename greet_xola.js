CommonJS : 
var figlet = require('figlet');
var chalk = require('chalk');    
var greet = require('./greet');


// console.log(styledMessage)
figlet(greet("xola"), function(err, data){
    "use strict";
if(err){
// console.log("something went wrong...");
console.dir(err)

}


const styledMessage = chalk.bgGreen.black(data);
console.log(styledMessage)
})
// split out switch/case function into another file
import {numToString} from "./helper.js";

// no need for first two elements in argument handling
var args = process.argv.slice(2, process.argv.length);

var finalString = "";

// handle each argument
args.forEach(function(numAsString){
    
    // build each number as a letter
    numAsString.split('').forEach(function(singleNum){
        var numAsWord = numToString(parseInt(singleNum));
        
        // error handling, terminate program if uneccessary characters are called
        if(!numAsWord){
            console.log("Invalid arguments passed");
            process.exit();
        }
        
        finalString += numAsWord;
    });

    finalString += ",";
});

// take out the last appended comma to print to stdout
console.log(finalString.slice(0, finalString.length - 1));
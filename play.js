//const {connect} = require("./client2");
//const {setupInput} = require("./input")

// //console.log("Connecting ...");


// const connect = require ("./client")
// const setupInput = require("./input")




// console.log("Connecting ...");
// const connection = connect();                                                                                       
// setupInput(connection);

const connect = require("./client")
const setupInput = require("./input")

console.log("Connecting ...");
const connection = connect();
setupInput(connection); 



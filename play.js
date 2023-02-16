const {connect} = require("./client2");
const {setupInput} = require("./input")

console.log("Connecting ...");

connect();

setupInput()

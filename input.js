


const {connect} = require("./client")



const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput)
  return stdin;
 
};


const handleUserInput =(key) => {

  if (key === '\u0003') {
    process.exit();
  }
 
};



setupInput()
handleUserInput()
connect()




module.exports = {setupInput}
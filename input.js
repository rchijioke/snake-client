

const net = require("net");
const connect = require("./cleint")



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




module.exports = setupInput
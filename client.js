
//const {setupInput} = require("./input")

//console.log("Connecting ...");

const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "172.17.191.169",// IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    
   
    console.log("successfully connected to game server")
    });
  
  return conn;
};

console.log("Connecting ...");
connect();

module.exports = {connect}
//setupInput()

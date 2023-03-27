
const net = require("net");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP = '172.17.191.169', // IP address here,
    port: PORT = 50541, // PORT number here,
  });

  // interpret incoming data as text incase it is in another form
  conn.setEncoding("utf8");
  //connect event
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("connected to server...");
    conn.write("Name: ROY");
    
  });

  return conn;
};

module.exports = connect;

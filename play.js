//const {conn} = require("../networking/client");

const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({

    host: "165.227.47.243", // change to IP address of computer, more on that below
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
conn.on("connect", () => {
  console.log("connection successfull")
});
  return conn;
};

console.log("Connecting ...");
connect();


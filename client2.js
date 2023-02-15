

const net = require("net");
const connect = function () {
  const conn = net.createConnection({

    host: "165.227.47.243", // change to IP address of computer, more on that below
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
conn.on("connect", () => {
  console.log("Successfully connected to game server", "Name: wat" )
});
  return conn;
};
console.log("Connecting ...");
const connection = connect();

module.exports = {
  net,
  connection
}
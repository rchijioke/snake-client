

// const net = require("net");
// const connect = function () {
//   const conn = net.createConnection({
    
  //   host: "165.227.47.243", // change to IP address of computer, more on that below
  //   port: 50541,
  // });

  // // interpret incoming data as text
  // conn.setEncoding("utf8");
  // conn.on("connect", () => {
  //   //conn.write("Move: down")
  //   // setInterval(() => {
  //   //   conn.write("Move: left")
  //   //   conn.write("Move: down")
  //   //   conn.write("Move: right")
  //   //   conn.write("Move: up")
  //   // }, 1000)
  //   setInterval(() => {
  //     conn.write("Move: left")
  //      setInterval(function() {
  //       conn.write("Move: down")
  //       setInterval(function() {
  //         conn.write("Move: right")
  //         // setInterval(function() {
  //         //   conn.write("Move: up")    
  //          }, 1000);    
  //        }, 2000);
  //      }, 2000);
  //   // }, 1000) 
  // console.log("successfully connected to game server")
  // });
  //multiple callbacks
  // const conn2 = net.createConnection({

  //   host: "165.227.47.243", // change to IP address of computer, more on that below
  //   port: 50541,
  // });
  // conn2.on("connect", () => {
  //   //conn.write("Move: down")
  // setInterval(() => {
  //     conn.write("Move: down")
  //   }, 4000)
  //   console.log("connection successful")
  // });
 
//   return conn;
// };
// console.log("Connecting ...");
// connect();

// module.exports = {connect}

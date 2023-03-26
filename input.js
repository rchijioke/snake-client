
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput)
  return stdin;
 
};


const handleUserInput = function (data) {
  if (data === '\u0003') {
    process.exit();
  }
};

const symbols = [w,a,s,d]
for (i of symbols){
  if( )
}KeyboardEvent

setInterval(() => {
  .write(w)
   setInterval(function() {
    conn.write("Move: down")
    setInterval(function() {
      conn.write("Move: right")
      // setInterval(function() {
      //   conn.write("Move: up")    
       }, 1000);    
     }, 2000);
   }, 2000);

module.exports = {setupInput}
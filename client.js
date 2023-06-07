const net = require("net");
let moveInterval;
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: "50541",
    
  });

  conn.on("event name", () => {

  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: JL");
    //  moveInterval = setInterval(() => {
    //   conn.write("Move: up"); // Replace "up" with the desired direction
    // }, 500);
  })
    conn.on('end', () => {
      clearInterval(moveInterval)
    })


    // conn.write("Move: right");
        // conn.write("Move: up");
    // conn.write("Move: left");
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });



  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;
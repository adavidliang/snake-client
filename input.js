const { MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY} = require('./constants')
let connection;

const handleUserInput = function (key) {

  if (key === "w") {
    connection.write(MOVE_UP_KEY);
  }
  if (key === "s") {
    connection.write(MOVE_DOWN_KEY);
  }
  if (key === "a") {
    connection.write(MOVE_LEFT_KEY);
  }
  if (key === "d") {
    connection.write(MOVE_RIGHT_KEY);
  }
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'h') {
    connection.write("Say: HaHa")
  }
};

const setupInput = function (conn) {
  connection = conn;
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding("utf8");
stdin.resume();
stdin.on("data", handleUserInput);// your code here
return stdin;
};

module.exports = {setupInput};
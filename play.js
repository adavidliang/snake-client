const connect = require("./client");

// setup interface to handle user input from stdin
const handleUserInput = function (key) {
 // stdin.on('data', (key) => {
    // Add this code block within the data callback
    // \u0003 maps to ctrl+c input
    if (key === '\u0003') {
      process.exit();
    }
    // Your other codes and logic here, like printing the dot when a key is pressed
 //});
};


const setupInput = function () {
 
  const stdin = process.stdin;

  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);// your code here
  return stdin;
};


connect();
setupInput();
handleUserInput();


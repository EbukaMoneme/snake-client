// Stores the active TCP connection object.
let connection;

const handleUserInput = (key) => {
  let delay = 20;
  // const stdin = process.stdin;
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    setTimeout(() => connection.write('Move: up'), delay);
  }
  if (key === 'a') {
    setTimeout(() => connection.write('Move: left'), delay);
  }
  if (key === 's') {
    setTimeout(() => connection.write('Move: down'), delay);
  }
  if (key === 'd') {
    setTimeout(() => connection.write('Move: right'), delay);
  }
  if (key === 'j') {
    setTimeout(() => connection.write('Say: BYE'), delay);
  }
  if (key === 'k') {
    setTimeout(() => connection.write('Say: SUP'), delay);
  }
  if (key === 'l') {
    setTimeout(() => connection.write('Say: RUN'), delay);
  }
  if (key === 'i') {
    setTimeout(() => connection.write('Say: RUN AJ'), delay);
  }
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;

const http = require("http");

//create server object
http
  .createServer((req, res) => {
    //write response
    res.write("Hello World");
    res.end();
  })
  .listen(8080, () => console.log("Server running..."));

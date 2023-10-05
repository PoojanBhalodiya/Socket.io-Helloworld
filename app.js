var app = require("express")();
var http = require("http").Server(app);
const { Socket } = require("dgram");
var path = require("path");
var io = require("socket.io")(http);

app.get("/", function (req, res) {
  var option = {
    root: path.join(__dirname),
  };
  var fileName = "index.html";

  res.sendFile(fileName, option);
});

io.on("connection", function (socket) {
  console.log("A user connected");

  socket.on("disconnect", function () {
    console.log("A user dissconnected.");
  });
});

http.listen(3000, function () {
  console.log("server ready on 3000");
});

let app = require("express")();
let { router } = require("./Router");
let http = require("http");

let server = http.createServer(app);
let io = require("socket.io")(server);
let { adduser, getuser, removeuser, roommembers } =require("./Handle.js")
io.on("connection", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
      let user = adduser({ id: socket.id, name, room });
      console.log(user);
    // removeuser(socket.id)
    socket.emit("message", { user: "admin", text: `welcome to room ${room}` });
    socket.broadcast.to(user.room).emit("message", { user: "admin", text: "New UserJoined" });
    socket.join(user.room);
    callback();
  });
  socket.on("sendMessage", (message, callback) => {
    let user = getuser(socket.id);
    console.log(message);
    io.to(user.room).emit("message", { user: user.name, text: message });
    callback();

  });

  console.log(socket.id + "cconnected");

  io.on("disconnect", () => {
    console.log("connection disconnected");
  });
});

let port = process.env.PORT || 5000;

console.log("app crashed..");

app.use(router);


server.listen(port, () => {
  console.log(port);
});

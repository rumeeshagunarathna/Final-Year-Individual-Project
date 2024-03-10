// socket.ts

// import { Server } from "socket.io";
// import { createServer } from "http";

// export default function startSocketServer() {
//   const server = createServer(); // Create an HTTP server
//   const io = new Server(server);

//   io.on("connection", (socket) => {
//     console.log("New client connected");

//     socket.on("disconnect", () => {
//       console.log("Client disconnected");
//     });

//     socket.on("chat message", (msg) => {
//       io.emit("chat message", msg);
//     });
//   });

//   server.listen(3001, () => {
//     console.log("Socket.io server running on port 3001");
//   });
// }

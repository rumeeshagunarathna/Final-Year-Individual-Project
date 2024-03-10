// import React, { useState, useEffect } from "react";
// import { Box, Input, Button, VStack } from "@chakra-ui/react";
// import io from "socket.io-client";

// const socket = io(); // Connect to socket server

// const chatroom: React.FC = () => {
//   const [messages, setMessages] = useState<string[]>([]);
//   const [inputMsg, setInputMsg] = useState("");

//   useEffect(() => {
//     socket.on("chat message", (msg: string) => {
//       setMessages([...messages, msg]);
//     });
//   }, [messages]);

//   const sendMessage = () => {
//     if (inputMsg.trim() !== "") {
//       socket.emit("chat message", inputMsg);
//       setInputMsg("");
//     }
//   };

//   return (
//     <Box>
//       <VStack>
//         {messages.map((msg, index) => (
//           <Box key={index}>{msg}</Box>
//         ))}
//       </VStack>
//       <Input
//         value={inputMsg}
//         onChange={(e) => setInputMsg(e.target.value)}
//         placeholder="Type your message..."
//       />
//       <Button onClick={sendMessage}>Send</Button>
//     </Box>
//   );
// };

// export default chatroom;


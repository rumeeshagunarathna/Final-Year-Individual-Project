

// import React, { useState, useEffect, useContext } from "react";


// import { Context } from "../pages/context";

// import dynamic from "next/dynamic";
// import { useRouter } from "next/router";

// const ChatEngine = dynamic(() =>
//   import("react-chat-engine").then((module) => module.ChatEngine)
// );
// const MessageFormSocial = dynamic(() =>
//   import("react-chat-engine").then((module) => module.MessageFormSocial)
// );

// export default function Home() {
//   const { username, secret } = useContext(Context);
//   const [showChat, setShowChat] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     if (typeof document !== undefined) {
//       setShowChat(true);
//     }
//   }, []);

//   useEffect(() => {
//     if (username === "" || secret === "") {
//       router.push("/indexchat");
//     }
//   }, [username, secret]);

//   if (!showChat) return <div />;

//   return (
//     <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
//       <div className="shadow" style={{ maxWidth: "6000px", width: "100%" }}>
//         <ChatEngine
//           height="calc(110vh - 212px)"
//           projectID="80a86836-91f0-4977-ae6b-dbd3aa905495"
//           userName={username}
//           userSecret={secret}
//           renderNewMessageForm={() => <MessageFormSocial />}
//         />
//       </div>
//     </div>
//   );
// }




import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

// Importing the Context directly instead of from "../pages/context"
import { Context } from "../pages/context";

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);

export default function Home() {
  const { username, secret } = useContext(Context);
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== undefined) {
      setShowChat(true);
    }
  }, []);

  useEffect(() => {
    if (username === "" || secret === "") {
      router.push("/indexchat");
    }
  }, [username, secret, router]);

  if (!showChat) return null;

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <div className="shadow" style={{ maxWidth: "600px", width: "100%" }}>
        <ChatEngine
          height="calc(110vh - 212px)"
          projectID="80a86836-91f0-4977-ae6b-dbd3aa905495"
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => <MessageFormSocial />}
        />
      </div>
    </div>
  );
}

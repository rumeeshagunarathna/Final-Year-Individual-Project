// import React, { useState, useEffect } from "react";
// import { auth, firestore } from "../firebase/clientApp";
// import { doc, getDoc } from "firebase/firestore";
// import { useAuthState } from "react-firebase-hooks/auth";

// import { communityState } from "@/atoms/communitiesAtom";
// import { auth, firestore } from "../firebase/clientApp";
// import { doc, getDoc, collection, getDocs } from "firebase/firestore";
// import { useState, useEffect } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useRecoilState } from "recoil";

// const Profile: React.FC = () => {
//   const [userData, setUserData] = useState<any>(null);
//   const [user] = useAuthState(auth);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
        

//         if (user) {
//           const userRef = doc(firestore, "users", user.displayName);
//           const userDoc = await getDoc(userRef);

//           if (userDoc.exists()) {
//             setUserData(userDoc.data());
//           } else {
//             console.log("User document not found");
//           }
//         } else {
//           console.log("User not authenticated");
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUserData();
//   }, []);

//   return (
//     <div>
//       {userData ? (
//         <div>
//           <h2>User Name: {userData.displayName}</h2>
//           <p>Email: {userData.email}</p>
//         </div>
//       ) : (
//         <p></p>
//       )}
//     </div>
//   );
// };

// export default Profile;

//////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import { auth, firestore } from "../firebase/clientApp";
// import { doc, getDoc } from "firebase/firestore";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useRecoilState } from "recoil";
// import { communityState } from "../atoms/communitiesAtom";
// import Communities from "@/components/Navbar/Directory/Communities";
// import { User } from "firebase/auth";

// const Profile: React.FC = () => {
//   const [userData, setUserData] = useState<any>(null);
//   const [user] = useAuthState(auth);
//   const [communityData, setCommunityData] = useRecoilState(communityState);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         if (user) {
//           const userRef = doc(firestore, "users", user.uid); // Fetch user document by UID
//           const userDoc = await getDoc(userRef);

//           if (userDoc.exists()) {
//             setUserData(userDoc.data());
//           } else {
//             console.log("User document not found");
//           }
//         } else {
//           console.log("User not authenticated");
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUserData();
//   }, [user]); // Include user in dependency array

  
//   return (
//     <div>
//       {userData ? (
//         <div>
//           <h2>User Name: {userData.displayName}</h2>
//           <p>Email: {userData.email}</p>
//         </div>
//       ) : (
//         <p>User data not found.</p>
//       )}

      
//     </div>
//   );
// };

// export default Profile;
//////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////
// const Profile: React.FC = () => {
//   const [userData, setUserData] = useState<any>(null);
//   const [user] = useAuthState(auth);
//   const [communityData, setCommunityData] = useRecoilState(communityState);
//   const [communitySnippetsData, setCommunitySnippetsData] = useState<any[]>([]); // Declare and initialize communitySnippetsData

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         if (user) {
//           const userRef = doc(firestore, "users", user.uid);
//           const userDoc = await getDoc(userRef);

//           if (userDoc.exists()) {
//             setUserData(userDoc.data());

//             const communitySnippetsRef = collection(
//               userDoc.ref,
//               "communitySnippets"
//             );
//             const communitySnippetsSnapshot = await getDocs(
//               communitySnippetsRef
//             );
//             const communitySnippetsData = communitySnippetsSnapshot.docs.map(
//               (doc) => doc.data()
//             );
//             setCommunitySnippetsData(communitySnippetsData); // Set communitySnippetsData after fetching
//           } else {
//             console.log("User document not found");
//           }
//         } else {
//           console.log("User not authenticated");
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUserData();
//   }, [user]); // Include user in dependency array

//   return (
//     <div>
//       {userData ? (
//         <div>
//           <h2>User Name: {userData.displayName}</h2>
//           <p>Email: {userData.email}</p>
//         </div>
//       ) : (
//         <p>User data not found.</p>
//       )}

//       {/* Render fetched community snippets data */}
//       {communitySnippetsData.length > 0 ? (
//         <div>
//           <h3>User Communities:</h3>
//           <ul>
//             {communitySnippetsData.map((snippet, index) => (
//               <li key={index}>
//                 <p>Community ID: {snippet.communityId}</p>
                
//                 {/* Render other community snippet details as needed */}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <p>No community snippets found.</p>
//       )}
//     </div>
//   );
// };

// export default Profile;
////////////////////////////////////////////////////////////////////////////////////

///////////////////////newest //////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import { auth, firestore } from "../firebase/clientApp";
// import { doc, getDoc, collection, getDocs } from "firebase/firestore";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useRecoilState } from "recoil";
// import { communityState } from "../atoms/communitiesAtom";
// import Communities from "@/components/Navbar/Directory/Communities";
// import { User } from "firebase/auth";

// const Profile: React.FC = () => {
//   const [userData, setUserData] = useState<any>(null);
//   const [user] = useAuthState(auth);
//   const [communityData, setCommunityData] = useRecoilState(communityState);
//   const [communitySnippetsData, setCommunitySnippetsData] = useState<any[]>([]); // Declare and initialize communitySnippetsData
//   const [communityMembersData, setCommunityMembersData] = useState<any[]>([]); // Declare and initialize communityMembersData

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         if (user) {
//           const userRef = doc(firestore, "users", user.uid);
//           const userDoc = await getDoc(userRef);

//           if (userDoc.exists()) {
//             setUserData(userDoc.data());

//             const communitySnippetsRef = collection(
//               userDoc.ref,
//               "communitySnippets"
//             );
//             const communitySnippetsSnapshot = await getDocs(
//               communitySnippetsRef
//             );
//             const communitySnippetsData = communitySnippetsSnapshot.docs.map(
//               (doc) => doc.data()
//             );
//             setCommunitySnippetsData(communitySnippetsData); // Set communitySnippetsData after fetching

//             const communityIds = communitySnippetsData.map(
//               (snippet) => snippet.communityId
//             );
//             const communityMembersPromises = communityIds.map(
//               async (communityId) => {
//                 const communityDocRef = doc(
//                   firestore,
//                   "communities",
//                   communityId
//                 );
//                 const communityDoc = await getDoc(communityDocRef);
//                 return {
//                   id: communityId,
//                   numberOfMembers: communityDoc.exists()
//                     ? communityDoc.data().numberOfMembers
//                     : 0,
//                 };
//               }
//             );
//             const communityMembersData = await Promise.all(
//               communityMembersPromises
//             );
//             setCommunityMembersData(communityMembersData);
//           } else {
//             console.log("User document not found");
//           }
//         } else {
//           console.log("User not authenticated");
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUserData();
//   }, [user]); // Include user in dependency array

//   return (
//     <div>
//       {userData ? (
//         <div>
//           <h2>User Name: {userData.displayName}</h2>
//           <p>Email: {userData.email}</p>
//         </div>
//       ) : (
//         <p>User data not found.</p>
//       )}
// <br></br>
//       {/* Render fetched community snippets data */}
//       {communitySnippetsData.length > 0 ? (
//         <div>
//           <h3>Community Snippets:</h3>
//           <br></br>
//           <ul>
//             {communitySnippetsData.map((snippet, index) => (
//               <li key={index}>
//                 <p>Community Name: {snippet.communityId}</p>
//                 {/* Render other community snippet details as needed */}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <p>No community snippets found.</p>
//       )}

//       {/* Render fetched community members data */}
//       <br></br>
//       {communityMembersData.length > 0 ? (
//         <div>
//           <h3>Community Members:</h3>
//           <br></br>
//           <ul>
//             {communityMembersData.map((community, index) => (
//               <li key={index}>
//                 <p>Community Name: {community.id}</p>
//                 <p>Number of Members: {community.numberOfMembers}</p>
                
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <p>No community members found.</p>
//       )}
//     </div>
//   );
// };

// export default Profile;
///////////////////////////////////////new//////////////////////////////////////////////////////////////////


// import React, { useState, useEffect } from "react";
// import { auth, firestore } from "../firebase/clientApp";
// import {
//   doc,
//   getDoc,
//   collection,
//   getDocs,
//   query,
//   orderBy,
//   where,
// } from "firebase/firestore";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useRecoilState } from "recoil";
// import { communityState } from "../atoms/communitiesAtom";
// import Communities from "@/components/Navbar/Directory/Communities";
// import { User } from "firebase/auth";


//   const [userData, setUserData] = useState<any>(null);
//   const [user] = useAuthState(auth);
//   const [communityData, setCommunityData] = useRecoilState(communityState);
//   const [communitySnippetsData, setCommunitySnippetsData] = useState<any[]>([]);
//   const [communityMembersData, setCommunityMembersData] = useState<any[]>([]);
//   const [userPosts, setUserPosts] = useState<any[]>([]); // Add state for user posts

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         if (user) {
//           const userRef = doc(firestore, "users", user.uid);
//           const userDoc = await getDoc(userRef);

//           if (userDoc.exists()) {
//             setUserData(userDoc.data());

//             // Fetch user posts data
//             const userPostsQuery = query(
//               collection(firestore, "posts"),
//               orderBy("createdAt", "desc"),
//               where("creatorId", "==", user.uid)
//             );
//             const userPostsSnapshot = await getDocs(userPostsQuery);
//             const userPostsData = userPostsSnapshot.docs.map((doc) =>
//               doc.data()
//             );
//             setUserPosts(userPostsData);

//             // Fetch other community-related data (snippets and members)
//             const communitySnippetsRef = collection(
//               userDoc.ref,
//               "communitySnippets"
//             );
//             const communitySnippetsSnapshot = await getDocs(
//               communitySnippetsRef
//             );
//             const communitySnippetsData = communitySnippetsSnapshot.docs.map(
//               (doc) => doc.data()
//             );
//             setCommunitySnippetsData(communitySnippetsData);

//             const communityIds = communitySnippetsData.map(
//               (snippet) => snippet.communityId
//             );
//             const communityMembersPromises = communityIds.map(
//               async (communityId) => {
//                 const communityDocRef = doc(
//                   firestore,
//                   "communities",
//                   communityId
//                 );
//                 const communityDoc = await getDoc(communityDocRef);
//                 return {
//                   id: communityId,
//                   numberOfMembers: communityDoc.exists()
//                     ? communityDoc.data().numberOfMembers
//                     : 0,
//                 };
//               }
//             );
//             const communityMembersData = await Promise.all(
//               communityMembersPromises
//             );
//             setCommunityMembersData(communityMembersData);
//           } else {
//             console.log("User document not found");
//           }
//         } else {
//           console.log("User not authenticated");
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUserData();
//   }, [user]);

//   return (
//     //     <div>
//     //       {/* Existing UI for user data */}
//     // <div>
//     //       {userData ? (
//     //         <div>
//     //           <h2>User Name: {userData.displayName}</h2>
//     //           <p>Email: {userData.email}</p>
//     //         </div>
//     //       ) : (
//     //         <p>User data not found.</p>
//     //       )}
//     // <br></br>
//     //       {/* Render fetched community snippets data */}
//     //       {communitySnippetsData.length > 0 ? (
//     //         <div>
//     //           <h3>Community Snippets:</h3>
//     //           <br></br>
//     //           <ul>
//     //             {communitySnippetsData.map((snippet, index) => (
//     //               <li key={index}>
//     //                 <p>Community Name: {snippet.communityId}</p>
//     //                 {/* Render other community snippet details as needed */}
//     //               </li>
//     //             ))}
//     //           </ul>
//     //         </div>
//     //       ) : (
//     //         <p>No community snippets found.</p>
//     //       )}

//     //       {/* Render fetched community members data */}
//     //       <br></br>
//     //       {communityMembersData.length > 0 ? (
//     //         <div>
//     //           <h3>Community Members:</h3>
//     //           <br></br>
//     //           <ul>
//     //             {communityMembersData.map((community, index) => (
//     //               <li key={index}>
//     //                 <p>Community Name: {community.id}</p>
//     //                 <p>Number of Members: {community.numberOfMembers}</p>

//     //               </li>
//     //             ))}
//     //           </ul>
//     //         </div>
//     //       ) : (
//     //         <p>No community members found.</p>
//     //       )}
//     //     </div>
//     //       {/* Render fetched user posts data */}
//     //       <br />
//     //       {userPosts.length > 0 ? (
//     //         <div>
//     //           <h3>User Posts:</h3>
//     //           <br />
//     //           <ul>
//     //             {userPosts.map((post, index) => (
//     //               <li key={index}>
//     //                 <p>Title: {post.title}</p>
//     //                 <p>Body: {post.body}</p>
//     //                 <p>Community ID: {post.communityId}</p>
//     //                 <p>Community Name: {post.creatorDisplayName}</p>
//     //                 <p>Number of Comments: {post.numberOfComments}</p>
//     //                 <p>Votes: {post.voteStatus}</p>
//     //                 {/* Render other post details as needed */}
//     //               </li>
//     //             ))}
//     //           </ul>
//     //         </div>
//     //       ) : (
//     //         <p>No user posts found.</p>
//     //       )}

//     //       {/* Existing UI for community snippets and members */}
//     //     </div>

//     <div color="white">
//       {/* Table for user data */}

//       <h3 color="white">User Data</h3><br></br>
//       <table style={{ borderCollapse: "collapse", width: "100%" ,}}>
//         <tbody >
//           <tr>
//             <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//               User Name:
//             </td>
//             <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//               {userData?.displayName}
//             </td>
//           </tr>
//           <tr>
//             <td style={{ border: "1px solid #ddd", padding: "8px" }}>Email:</td>
//             <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//               {userData?.email || "N/A"}
//             </td>
//           </tr>
//         </tbody>
//       </table>

//       {/* Table for community snippets data */}
//       {communitySnippetsData.length > 0 && (
//         <table
//           style={{
//             borderCollapse: "collapse",
//             width: "100%",
//             marginTop: "20px",
//           }}
//         >
          
//               <h3>
//                 Modarating:
//               </h3><br></br>
            
//           <tbody>
//             {communitySnippetsData.map((snippet, index) => (
//               <tr key={index}>
//                 {/* <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   Community Name:
//                 </td> */}
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {snippet.communityId}
//                 </td>
//                 {/* Render other community snippet details as needed */}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       {/* Table for community members data */}
//       {communityMembersData.length > 0 && (
//         <table
//           style={{
//             borderCollapse: "collapse",
//             width: "100%",
//             marginTop: "20px",
//           }}
//         >
          
            
//               <h3 >
//                 Community Members
//               </h3><br></br>
           
          
//           <tbody>
//             {communityMembersData.map((community, index) => (
//               <td key={index}>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   Community Name:
//                 </td>
//                 <tr style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {community.id}
//                 </tr>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   Number of Members:
//                 </td>
//                 <tr style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {community.numberOfMembers}
//                 </tr>
//               </td>
//             ))}
//           </tbody>
//         </table>
//       )}

//       {/* Table for user posts data */}
//       {userPosts.length > 0 && (
//         <table
//           style={{
//             borderCollapse: "collapse",
//             width: "100%",
//             marginTop: "20px",
//           }}
//         >
//           <thead>
//             <tr>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 User Posts
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {userPosts.map((post, index) => (
//               <tr key={index}>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   Title:
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {post.title}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   Body:
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {post.body}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   Community ID:
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {post.communityId}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   Community Name:
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {post.creatorDisplayName}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   Number of Comments:
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {post.numberOfComments}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   Votes:
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {post.voteStatus}
//                 </td>
//                 {/* Render other post details as needed */}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default Profile;



"use client";

import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Box,
} from "@chakra-ui/react";

import React, { useState, useEffect } from "react";
import { auth, firestore } from "../firebase/clientApp";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  orderBy,
  where,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";
import { communityState } from "../atoms/communitiesAtom";

export default function Profile() {
  const [userData, setUserData] = useState<any>(null);
  const [user] = useAuthState(auth);
  const [communityData, setCommunityData] = useRecoilState(communityState);
  const [communitySnippetsData, setCommunitySnippetsData] = useState<any[]>([]);
  const [communityMembersData, setCommunityMembersData] = useState<any[]>([]);
  const [userPosts, setUserPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (user) {
          const userRef = doc(firestore, "users", user.uid);
          const userDoc = await getDoc(userRef);

          if (userDoc.exists()) {
            setUserData(userDoc.data());

            // Fetch user posts data
            const userPostsQuery = query(
              collection(firestore, "posts"),
              orderBy("createdAt", "desc"),
              where("creatorId", "==", user.uid)
            );
            const userPostsSnapshot = await getDocs(userPostsQuery);
            const userPostsData = userPostsSnapshot.docs.map((doc) =>
              doc.data()
            );
            setUserPosts(userPostsData);

            // Fetch other community-related data (snippets and members)
            if (userData) {
              const communitySnippetsRef = collection(
                userDoc.ref,
                "communitySnippets"
              );
              const communitySnippetsSnapshot = await getDocs(
                communitySnippetsRef
              );
              const communitySnippetsData = communitySnippetsSnapshot.docs.map(
                (doc) => doc.data()
              );
              setCommunitySnippetsData(communitySnippetsData);

              const communityIds = communitySnippetsData.map(
                (snippet) => snippet.communityId
              );
              const communityMembersPromises = communityIds.map(
                async (communityId) => {
                  const communityDocRef = doc(
                    firestore,
                    "communities",
                    communityId
                  );
                  const communityDoc = await getDoc(communityDocRef);
                  return {
                    id: communityId,
                    numberOfMembers: communityDoc.exists()
                      ? communityDoc.data().numberOfMembers
                      : 0,
                  };
                }
              );
              const communityMembersData = await Promise.all(
                communityMembersPromises
              );
              setCommunityMembersData(communityMembersData);
            }
          } else {
            console.log("User document not found");
          }
        } else {
          console.log("User not authenticated");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [user, userData]); // Include userData in the dependency array

  return (
    <>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"3xl"}>Profile</Heading>
            <FormControl id="email">
              <FormLabel style={{ color: "#3182CE", fontWeight: "bold" }}>
                Email address
              </FormLabel>
              <Input type="email" defaultValue={userData?.email || "N/A"} />
            </FormControl>
            <FormControl id="username">
              <FormLabel style={{ color: "#3182CE", fontWeight: "bold" }}>
                User Name
              </FormLabel>
              <Input type="username" defaultValue={userData?.displayName} />
            </FormControl>
            {/* Table for community snippets data */}
            {communitySnippetsData.length > 0 && (
              <FormControl id="communities">
                <FormLabel style={{ color: "#3182CE", fontWeight: "bold" }}>
                  Joined Communities
                </FormLabel>

                <Input
                  type="text"
                  defaultValue={communitySnippetsData
                    .map((snippet) => snippet.communityId)
                    .join(", ")}
                />
              </FormControl>
            )}

            {/* Table for community members data */}
            {communityMembersData.length > 0 && (
              <FormControl id="community">
                <FormLabel style={{ color: "#3182CE", fontWeight: "bold" }}>
                  Community Details
                </FormLabel>

                {communityMembersData.map((community, index) => (
                  <td key={index}>
                    <tr style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Community Name:
                      <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                        {community.id}
                      </td>
                    </tr>
                    <tr style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Number of Members:
                      <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                        {community.numberOfMembers}
                      </td>
                    </tr>
                  </td>
                ))}
              </FormControl>
            )}

            <Stack spacing={12}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Button
                  color="white"
                  borderColor="blue.500"
                  fontWeight="bold"
                  borderWidth="1px"
                  _hover={{ backgroundColor: "blue.400", color: "white" }}
                >
                  Edit Profile
                </Button>
                <Text color={"#E53E3E"}>Forgot password?</Text>
              </Stack>
              <Button colorScheme={"blue"} variant={"solid"}>
                Delete Account
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            }
          />
        </Flex>
      </Stack>
    </>
  );
}

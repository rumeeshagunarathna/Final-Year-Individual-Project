"use client";
import { db } from "../app/firebaseConfig";
import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import Layout from "../components/Layout";

async function fetchDataFromFirestore(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));

  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

const Comments = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFromFirestore("comments");
      setUserData(data);
    }
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "comments", id));
      setUserData(userData.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };
  return (
    // <Layout>
    //   <main>
    //     <div>Fetch Data</div>
    //     <div>
    //       {userData.map((posts) => (
    //         <div key={posts.id} className="mb-4">
    //           <p className="text-xl front-bold">{posts.body}</p>
    //           <p className="text-xl front-bold">{posts.communityId}</p>
    //           <p className="text-xl front-bold">{posts.title}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </main>
    // </Layout>

    <Layout>
      <main>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-800">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="px-4 py-2">User/CreatorID</th>
                <th className="px-4 py-2">CommunityID</th>
                <th className="px-4 py-2">PostID</th>
                <th className="px-4 py-2">Post Title</th>
                <th className="px-4 py-2">Post Content</th>
                <th className="px-4 py-2">Created At</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((comments) => (
                <tr key={comments.id} className="text-center">
                  <td className="border px-4 py-2">{comments.id}</td>
                  <td className="border px-4 py-2">{comments.communityId}</td>
                  <td className="border px-4 py-2">{comments.postId}</td>
                  <td className="border px-4 py-2">{comments.postTitle}</td>
                  <td className="border px-4 py-2">{comments.text}</td>
                  <td className="border px-4 py-2">
                    {comments.createdAt.toDate().toLocaleString()}
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleDelete(comments.id)}
                      style={{
                        backgroundColor: "#EF4444", // Red background color
                        borderColor: "#EF4444", // Red border color
                        color: "#FFFFFF", // White text color
                      }}
                      className="py-2 px-4 rounded hover:bg-red-700 text-white font-bold"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </Layout>
  );
};

export default Comments;

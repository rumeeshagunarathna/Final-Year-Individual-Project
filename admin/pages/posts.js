
'use client'
import { db } from '../app/firebaseConfig';
import React, { useEffect, useState } from 'react';
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import Layout from "../components/Layout";

async function fetchDataFromFirestore() {
  const querySnapshot = await getDocs(collection(db, "posts"))
  
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

const posts = () => {

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFromFirestore();
      setUserData(data);
    }
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "posts", id));
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
          <div className="min-w-full overflow-x-scroll">
            <table className="table-auto border-collapse border border-gray-800 w-full">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-2 py-1 text-xs">Community ID</th>
                  <th className="px-2 py-1 text-xs">Display Name</th>
                  <th className="px-2 py-1 text-xs">Title</th>
                  <th className="px-2 py-1 text-xs">Body</th>
                  <th className="px-2 py-1 text-xs">Creator ID</th>
                  <th className="px-2 py-1 text-xs">Image/VideoURL</th>
                  <th className="px-2 py-1 text-xs">Created Time</th>
                  <th className="px-2 py-1 text-xs">No. of Comments</th>
                  <th className="px-2 py-1 text-xs">Vote State</th>
                  <th className="px-2 py-1 text-xs">Action</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((post) => (
                  <tr key={post.id} className="text-center">
                    <td className="border px-4 py-2 text-xs">
                      {post.communityId}
                    </td>
                    <td className="border px-4 py-2 text-xs">
                      {post.creatorDisplayName}
                    </td>
                    <td className="border px-2 py-1 text-xs">{post.title}</td>
                    <td className="border px-2 py-1 text-xs">{post.body}</td>
                    <td className="border px-2 py-1 text-xs">
                      {post.creatorId}
                    </td>
                    <td className="border px-2 py-1 text-xs">
                      {post.imageURL}
                    </td>
                    <td className="border px-2 py-1 text-xs">
                      {post.createdAt.toDate().toLocaleString()}
                    </td>
                    <td className="border px-2 py-1 text-xs">
                      {post.numberOfComments}
                    </td>
                    <td className="border px-2 py-1 text-xs">
                      {post.voteState}
                    </td>
                    <td className="border px-2 py-1 text-xs">
                      <button
                        onClick={() => handleDelete(post.id)}
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
        </div>
      </main>
    </Layout>
  );
};

export default posts;



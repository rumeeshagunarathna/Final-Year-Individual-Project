
'use client'
import { db } from '../app/firebaseConfig';
import React, { useEffect, useState } from 'react';
import {getDocs,collection} from 'firebase/firestore'
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
                <th className="px-4 py-2">Community ID</th>
                <th className="px-4 py-2">Display Name</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Body</th>
                <th className="px-4 py-2">Creator ID</th>
                <th className="px-4 py-2">ImageURL</th>
                <th className="px-4 py-2">Created Time</th>
                <th className="px-4 py-2">No. of Comments</th>
                <th className="px-4 py-2">Vote State</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((post) => (
                <tr key={post.id} className="text-center">
                  <td className="border px-4 py-2">{post.communityId}</td>
                  <td className="border px-4 py-2">
                    {post.creatorDisplayName}
                  </td>
                  <td className="border px-4 py-2">{post.title}</td>
                  <td className="border px-4 py-2">{post.body}</td>
                  <td className="border px-4 py-2">{post.creatorId}</td>
                  <td className="border px-4 py-2">{post.imageURL}</td>
                  <td className="border px-4 py-2">
                    {post.createdAt.toDate().toLocaleString()}
                  </td>
                  <td className="border px-4 py-2">{post.numberOfComments}</td>
                  <td className="border px-4 py-2">{post.voteState}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </Layout>
  );
};

export default posts;



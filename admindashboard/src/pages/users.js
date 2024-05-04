"use client";
import { db } from "../app/firebaseConfig";
import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import Layout from "../components/Layout";

async function fetchDataFromFirestore() {
  const querySnapshot = await getDocs(collection(db, "users"));

  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

const users = () => {
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
      await deleteDoc(doc(db, "users", id));
      setUserData(userData.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };
  return (
    <Layout>
      {/* <main>
        <div className="overflow-x-auto">User Data</div>
        <div>
          {userData.map((user) => (
            <div key={user.id} className="mb-4">
              <p className="text-xl front-bold">{user.uid}</p>
              <p className="text-xl front-bold">{user.email}</p>
              <p className="text-xl front-bold">{user.displayName}</p>
            </div>
          ))}
        </div>
      </main> */}

      <main>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-800">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="px-4 py-2">UserID</th>
                <th className="px-4 py-2">User Email</th>
                <th className="px-4 py-2">UserName</th>
                <th className="px-4 py-2">Action</th>
                {/* <th className="px-4 py-2">Created At</th> */}
                {/* <th className="px-4 py-2">Related To</th>
                <th className="px-4 py-2">Report</th>
                <th className="px-4 py-2">Action</th> */}
              </tr>
            </thead>
            <tbody>
              {userData.map((user) => (
                <tr key={user.id} className="text-center">
                  <td className="border px-4 py-2">{user.uid}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">{user.displayName}</td>
                  {/* <td className="border px-4 py-2">{user.createdAt}</td> */}
                  {/* <td className="border px-4 py-2">{report.relatedto}</td>
                  <td className="border px-4 py-2">{report.report}</td> */}
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleDelete(user.id)}
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

export default users;

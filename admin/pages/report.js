"use client";
import { db } from "../app/firebaseConfig";
import React, { useEffect, useState } from "react";
import { getDocs, collection,deleteDoc, doc } from "firebase/firestore";
import Layout from "../components/Layout";

async function fetchDataFromFirestore() {
  const querySnapshot = await getDocs(collection(db, "report"));

  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

const Report = () => {
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
          await deleteDoc(doc(db, "report", id));
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
            <table className="table-auto border-collapse border border-gray-800">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-2 py-1 text-sm">ID</th>
                  <th className="px-2 py-1 text-sm">Report</th>
                  <th className="px-2 py-1 text-sm">Related To</th>
                  <th className="px-2 py-1 text-sm">Name</th>
                  <th className="px-2 py-1 text-sm">Reason</th>
                  <th className="px-2 py-1 text-sm">Post Link</th>
                  <th className="px-2 py-1 text-sm">Contact Email</th>
                  <th className="px-2 py-1 text-sm">Action</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((report) => (
                  <tr key={report.id} className="text-center">
                    <td className="border px-2 py-1 text-sm">{report.id}</td>
                    <td className="border px-2 py-1 text-sm">
                      {report.report}
                    </td>
                    <td className="border px-2 py-1 text-sm">
                      {report.relatedto}
                    </td>
                    <td className="border px-2 py-1 text-sm">{report.name}</td>
                    <td className="border px-2 py-1 text-sm">
                      {report.reason}
                    </td>
                    <td className="border px-2 py-1 text-sm">{report.link}</td>
                    <td className="border px-2 py-1 text-sm">{report.email}</td>
                    <td className="border px-2 py-1 text-sm">
                      <button
                        onClick={() => handleDelete(report.id)}
                        style={{
                          backgroundColor: "#EF4444", // Red background color
                          borderColor: "#EF4444", // Red border color
                          color: "#FFFFFF", // White text color
                        }}
                        className="py-2 px-4 rounded hover:bg-red-700 text-white font-bold "
                        
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

export default Report;

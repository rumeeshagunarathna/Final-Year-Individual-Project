import { db, storage } from "../app/firebaseConfig";
import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import Layout from "../components/Layout";

async function fetchDataFromFirestore() {
  const querySnapshot = await getDocs(collection(db, "communities"));

  const data = [];
  for (const doc of querySnapshot.docs) {
    const postData = doc.data();
    // Ensure imageURL is not null or undefined
    if (postData.imageURL) {
      try {
        // Get a reference to the image in Storage using child()
        const imageRef = ref(storage, postData.imageURL);
        // Get the download URL of the image
        const imageURL = await getDownloadURL(imageRef);
        // Append the download URL to postData
        postData.image = imageURL;
      } catch (error) {
        console.error("Error fetching image download URL: ", error);
      }
    }
    // Push postData to data array
    data.push({ id: doc.id, ...postData });
  }
  return data;
}

const Communities = () => {
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
      await deleteDoc(doc(db, "communities", id));
      setUserData(userData.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };

  return (
    <Layout>
      <main>
        <div className="overflow-x-auto">
          <div className="min-w-full overflow-x-scroll">
            <table className="table-auto border-collapse border border-gray-800 w-full">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-2 py-1 text-xs">Community Name</th>

                  <th className="px-2 py-1 text-xs">Creator ID</th>
                  <th className="px-2 py-1 text-xs">Privacy Type</th>
                  <th className="px-2 py-1 text-xs">Community Image</th>
                  <th className="px-2 py-1 text-xs">No. of Current Members</th>
                  <th className="px-2 py-1 text-xs">No. off Left Members</th>
                  <th className="px-2 py-1 text-xs">Created At.</th>
                  <th className="px-2 py-1 text-xs">Action</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((post) => (
                  <tr key={post.id} className="text-center">
                    <td className="border px-4 py-2 text-xs">
                      {post.communityId}
                    </td>
                    <td className="border px-2 py-1 text-xs">
                      {post.creatorId}
                    </td>
                    <td className="border px-4 py-2 text-xs">
                      {post.privacyType}
                    </td>
                    <td className="border px-2 py-1 text-xs">
                      {post.image && (
                        <img
                          src={post.image}
                          alt="Post Image"
                          height={"100px"}
                          width={"100px"}
                        />
                      )}
                    </td>
                    <td className="border px-4 py-2 text-xs">
                      {post.numberOfMembers}
                    </td>
                    <td className="border px-4 py-2 text-xs">
                      {post.numberOffMembers}
                    </td>
                    <td className="border px-2 py-1 text-xs">
                      {post.createdAt &&
                        post.createdAt.toDate().toLocaleString()}
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

export default Communities;

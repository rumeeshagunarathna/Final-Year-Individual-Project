"use client";
import { db } from "../app/firebaseConfig";
import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
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
  return (
    <Layout>
      <main>
        <div>Fetch Data</div>
        <div>
          {userData.map((user) => (
            <div key={user.id} className="mb-4">
              <p className="text-xl front-bold">{user.uid}</p>
              <p className="text-xl front-bold">{user.email}</p>
              <p className="text-xl front-bold">{user.displayName}</p>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default users;

import React, { useState, useEffect } from "react";
import { auth, firestore } from "../firebase/clientApp";
import { doc, getDoc } from "firebase/firestore";

const Profile: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = auth.currentUser;

        if (currentUser) {
          const userRef = doc(firestore, "users", currentUser.uid);
          const userDoc = await getDoc(userRef);

          if (userDoc.exists()) {
            setUserData(userDoc.data());
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
  }, []);

  return (
    <div>
      {userData ? (
        <div>
          <h2>userid: {userData.uid}</h2>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Profile;

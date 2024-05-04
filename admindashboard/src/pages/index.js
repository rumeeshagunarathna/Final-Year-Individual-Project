import Layout from "../components/Layout";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

import Header from "./Header";
import Table from "./Table";
import Add from "./Add";
import Edit from "./Edit";

import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../app/firebaseConfig";

const Home = ({ setIsAuthenticated }) => {
  const [advertises, setAdvertises] = useState();
  const [selectedAdvertise, setSelectedAdvertise] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const getAdvertises = async () => {
    const querySnapshot = await getDocs(collection(db, "advertises"));
    const advertises = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setAdvertises(advertises);
  };

  useEffect(() => {
    getAdvertises();
  }, []);

  const handleEdit = (id) => {
    const [advertise] = advertises.filter((advertise) => advertise.id === id);

    setSelectedAdvertise(advertise);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.value) {
        const [advertise] = advertises.filter(
          (advertise) => advertise.id === id
        );

        deleteDoc(doc(db, "advertises", id));

        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `${advertise.publish} ${advertise.discription}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        const advertisesCopy = advertises.filter(
          (advertise) => advertise.id !== id
        );
        setAdvertises(advertisesCopy);
      }
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4">
        {!isAdding && !isEditing && (
          <div>
            <Header
              setIsAdding={setIsAdding}
              setIsAuthenticated={setIsAuthenticated}
            />
            <Table
              advertises={advertises}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </div>
        )}
        {isAdding && (
          <Add
            advertises={advertises}
            setAdvertises={setAdvertises}
            setIsAdding={setIsAdding}
            getAdvertises={getAdvertises}
          />
        )}
        {isEditing && (
          <Edit
            advertises={advertises}
            selectedAdvertise={selectedAdvertise}
            setAdvertises={setAdvertises}
            setIsEditing={setIsEditing}
            getAdvertises={getAdvertises}
          />
        )}
      </div>
    </Layout>
  );
};
export default Home;

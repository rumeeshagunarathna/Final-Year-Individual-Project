import React, { useState } from "react";
import Swal from "sweetalert2";
import "./add.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../app/firebaseConfig";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../app/firebaseConfig";

const Add = ({ advertises, setAdvertises, setIsAdding, getAdvertises }) => {
  const [publish, setPublish] = useState("");
  const [discription, setDiscription] = useState("");
  const [email, setEmail] = useState("");
  const [cost, setCost] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();

    if (!publish || !discription || !email || !cost || !phone || !image) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields including image are required.",
        showConfirmButton: true,
      });
    }

    try {
      // Upload image to Firestore Storage
      const storageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(storageRef, image);

      // Get download URL of uploaded image
      const imageUrl = await getDownloadURL(storageRef);
      setImageUrl(imageUrl);

      // Create employee object with image URL
      const newAdvertise = {
        publish,
        discription,
        email,
        cost,
        phone,
        imageUrl,
      };

      // Add employee data to Firestore
      await addDoc(collection(db, "advertises"), newAdvertise);

      setAdvertises([...advertises, newAdvertise]);
      setIsAdding(false);
      getAdvertises();

      Swal.fire({
        icon: "success",
        title: "Added!",
        text: `${publish} ${discription}'s data has been Added.`,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add New Advertiesment</h1>
        <label htmlFor="publish">Ad.</label>
        <input
          id="publish"
          type="text"
          name="publish"
          value={publish}
          onChange={(e) => setPublish(e.target.value)}
        />
        <label htmlFor="discription">Discription</label>
        <input
          id="discription"
          type="text"
          name="discription"
          value={discription}
          onChange={(e) => setDiscription(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="cost">Cost ($)</label>
        <input
          id="cost"
          type="number"
          name="cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
        <label htmlFor="phone">Contact Number</label>
        <input
          id="phone"
          type="number"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>

      {/* Display the uploaded image */}
      {imageUrl && (
        <div>
          <h2>Uploaded Image:</h2>
          <img src={imageUrl} alt="Uploaded" style={{ maxWidth: "100%" }} />
        </div>
      )}
    </div>
  );
};

export default Add;

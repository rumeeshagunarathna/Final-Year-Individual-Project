// import React, { useState } from "react";
// import Swal from "sweetalert2";
// import { doc, setDoc } from "firebase/firestore";
// import { db } from "../app/firebaseConfig";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { storage } from "../app/firebaseConfig";

// const Edit = ({
//   advertises,
//   selectedAdvertise,
//   setAdvertises,
//   setIsEditing,
//   getAdvertises,
// }) => {
//   const id = selectedAdvertise.id;

//   const [publish, setPublish] = useState(selectedAdvertise.publish);
//   const [discription, setDiscription] = useState(selectedAdvertise.discription);
//   const [email, setEmail] = useState(selectedAdvertise.email);
//   const [cost, setCost] = useState(selectedAdvertise.cost);
//   const [phone, setPhone] = useState(selectedAdvertise.phone);
//   const [image, setImage] = useState(null);

//   const handleUpdate = async (e) => {
//     e.preventDefault();

//     if (!publish || !discription || !email || !cost || !phone || !image) {
//       return Swal.fire({
//         icon: "error",
//         title: "Error!",
//         text: "All fields are required.",
//         showConfirmButton: true,
//       });
//     }

//     try {
//       let imageUrl = selectedAdvertise.imageUrl;

//       if (image) {
//         // Upload new image to Firestore Storage
//         const storageRef = ref(storage, `images/${image.name}`);
//         await uploadBytes(storageRef, image);

//         // Get download URL of uploaded image
//         imageUrl = await getDownloadURL(storageRef);
//       }

//       const updatedAdvertise = {
//         id,
//         publish,
//         discription,
//         email,
//         cost,
//         phone,
//         imageUrl,
//       };

//       await setDoc(doc(db, "advertises", id), updatedAdvertise);

//       // Update the advertise in the local state
//       const updatedAdvertises = advertises.map((advertise) =>
//         advertise.id === id ? updatedAdvertise : advertise
//       );

//       setAdvertises(updatedAdvertises);
//       setIsEditing(false);
//       getAdvertises();

//       Swal.fire({
//         icon: "success",
//         title: "Updated!",
//         text: `${publish} ${discription}'s data has been updated.`,
//         showConfirmButton: false,
//         timer: 1500,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <div className="small-container">
//         <form onSubmit={handleUpdate}>
//           <h1>Edit Advertise</h1>
//           <label htmlFor="publish">Ad.</label>
//           <input
//             id="publish"
//             type="text"
//             name="publish"
//             value={publish}
//             onChange={(e) => setPublish(e.target.value)}
//           />
//           <label htmlFor="discription">Discription</label>
//           <input
//             id="discription"
//             type="text"
//             name="discription"
//             value={discription}
//             onChange={(e) => setDiscription(e.target.value)}
//           />
//           <label htmlFor="email">Email</label>
//           <input
//             id="email"
//             type="email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <label htmlFor="cost">Cost ($)</label>
//           <input
//             id="cost"
//             type="number"
//             name="cost"
//             value={cost}
//             onChange={(e) => setCost(e.target.value)}
//           />
//           <label htmlFor="phone">Phone</label>
//           <input
//             id="phone"
//             type="number"
//             name="phone"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//           <label htmlFor="image">Image</label>
//           <input
//             id="image"
//             type="file"
//             accept="image/*"
//             onChange={(e) => setImage(e.target.files[0])}
//           />
//           <div style={{ marginTop: "30px" }}>
//             <input type="submit" value="Update" />
//             <input
//               style={{ marginLeft: "12px" }}
//               className="muted-button"
//               type="button"
//               value="Cancel"
//               onClick={() => setIsEditing(false)}
//             />
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Edit;



import React, { useState } from "react";
import Swal from "sweetalert2";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../app/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../app/firebaseConfig";

const Edit = ({
  advertises,
  selectedAdvertise,
  setAdvertises,
  setIsEditing,
  getAdvertises,
}) => {
  // Ensure selectedAdvertise is defined before accessing its properties
  if (!selectedAdvertise) {
    return <div>Loading...</div>;
  }

  // Destructure properties from selectedAdvertise
  const { id, publish, discription, email, cost, phone, imageUrl } =
    selectedAdvertise;

  // Define state variables
  const [newPublish, setNewPublish] = useState(publish);
  const [newDiscription, setNewDiscription] = useState(discription);
  const [newEmail, setNewEmail] = useState(email);
  const [newCost, setNewCost] = useState(cost);
  const [newPhone, setNewPhone] = useState(phone);
  const [image, setImage] = useState(null);

  // Handle update function
  const handleUpdate = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !newPublish ||
      !newDiscription ||
      !newEmail ||
      !newCost ||
      !newPhone ||
      !image
    ) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    try {
      let updatedImageUrl = imageUrl;

      // Upload new image to Firestore Storage if image is provided
      if (image) {
        const storageRef = ref(storage, `images/${image.name}`);
        await uploadBytes(storageRef, image);
        updatedImageUrl = await getDownloadURL(storageRef);
      }

      // Prepare updated advertise object
      const updatedAdvertise = {
        id,
        publish: newPublish,
        discription: newDiscription,
        email: newEmail,
        cost: newCost,
        phone: newPhone,
        imageUrl: updatedImageUrl,
      };

      // Update document in Firestore
      await setDoc(doc(db, "advertises", id), updatedAdvertise);

      // Update local state
      const updatedAdvertises = advertises.map((advertise) =>
        advertise.id === id ? updatedAdvertise : advertise
      );
      setAdvertises(updatedAdvertises);

      // Reset form fields and close edit mode
      setIsEditing(false);
      setImage(null);
      getAdvertises();

      // Display success message
      Swal.fire({
        icon: "success",
        title: "Updated!",
        text: `${newPublish} ${newDiscription}'s data has been updated.`,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Error updating advertise:", error);
    }
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Advertise</h1>
        <label htmlFor="publish">Ad.</label>
        <input
          id="publish"
          type="text"
          name="publish"
          value={newPublish}
          onChange={(e) => setNewPublish(e.target.value)}
        />
        {/* Other input fields */}
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;

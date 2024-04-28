// import React, { useState } from "react";
// import Swal from "sweetalert2";

// import { doc, setDoc } from "firebase/firestore";
// import { db } from "../app/firebaseConfig";

// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { storage } from "../app/firebaseConfig";

// const Edit = ({
//   employees,
//   selectedEmployee,
//   setEmployees,
//   setIsEditing,
//   getEmployees,
// }) => {
//   const id = selectedEmployee.id;

//   const [firstName, setFirstName] = useState(selectedEmployee.firstName);
//   const [lastName, setLastName] = useState(selectedEmployee.lastName);
//   const [email, setEmail] = useState(selectedEmployee.email);
//   const [salary, setSalary] = useState(selectedEmployee.salary);
//   const [date, setDate] = useState(selectedEmployee.date);

//   const handleUpdate = async (e) => {
//     e.preventDefault();

//     if (!firstName || !lastName || !email || !salary || !date) {
//       return Swal.fire({
//         icon: "error",
//         title: "Error!",
//         text: "All fields are required.",
//         showConfirmButton: true,
//       });
//     }

//     const employee = {
//       id,
//       firstName,
//       lastName,
//       email,
//       salary,
//       date,
//     };

//     await setDoc(doc(db, "employees", id), {
//       ...employee,
//     });

//     setEmployees(employees);
//     setIsEditing(false);
//     getEmployees();

//     Swal.fire({
//       icon: "success",
//       title: "Updated!",
//       text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
//       showConfirmButton: false,
//       timer: 1500,
//     });
//   };

//   return (
//     <div className="small-container">
//       <form onSubmit={handleUpdate}>
//         <h1>Edit Employee</h1>
//         <label htmlFor="firstName">First Name</label>
//         <input
//           id="firstName"
//           type="text"
//           name="firstName"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//         />
//         <label htmlFor="lastName">Last Name</label>
//         <input
//           id="lastName"
//           type="text"
//           name="lastName"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//         />
//         <label htmlFor="email">Email</label>
//         <input
//           id="email"
//           type="email"
//           name="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <label htmlFor="salary">Salary ($)</label>
//         <input
//           id="salary"
//           type="number"
//           name="salary"
//           value={salary}
//           onChange={(e) => setSalary(e.target.value)}
//         />
//         <label htmlFor="date">Date</label>
//         <input
//           id="date"
//           type="date"
//           name="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//         />
//         <div style={{ marginTop: "30px" }}>
//           <input type="submit" value="Update" />
//           <input
//             style={{ marginLeft: "12px" }}
//             className="muted-button"
//             type="button"
//             value="Cancel"
//             onClick={() => setIsEditing(false)}
//           />
//         </div>
//       </form>
//     </div>
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
  const id = selectedAdvertise.id;

  const [publish, setPublish] = useState(selectedAdvertise.publish);
  const [discription, setDiscription] = useState(selectedAdvertise.discription);
  const [email, setEmail] = useState(selectedAdvertise.email);
  const [cost, setCost] = useState(selectedAdvertise.cost);
  const [phone, setPhone] = useState(selectedAdvertise.phone);
  const [image, setImage] = useState(null);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!publish || !discription || !email || !cost || !phone || !image) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    try {
      let imageUrl = selectedAdvertise.imageUrl;

      if (image) {
        // Upload new image to Firestore Storage
        const storageRef = ref(storage, `images/${image.name}`);
        await uploadBytes(storageRef, image);

        // Get download URL of uploaded image
        imageUrl = await getDownloadURL(storageRef);
      }

      const updatedAdvertise = {
        id,
        publish,
        discription,
        email,
        cost,
        phone,
        imageUrl,
      };

      await setDoc(doc(db, "advertises", id), updatedAdvertise);

      // Update the advertise in the local state
      const updatedAdvertises = advertises.map((advertise) =>
        advertise.id === id ? updatedAdvertise : advertise
      );

      setAdvertises(updatedAdvertises);
      setIsEditing(false);
      getAdvertises();

      Swal.fire({
        icon: "success",
        title: "Updated!",
        text: `${publish} ${discription}'s data has been updated.`,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Advertise</h1>
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
        <label htmlFor="phone">Phone</label>
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


   </> 
  );
};

export default Edit;

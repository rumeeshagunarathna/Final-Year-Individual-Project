// import React from "react";
// //import Layout from "../components/Layout";

// const Table = ({ employees, handleEdit, handleDelete }) => {
//   const formatter = new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//     minimumFractionDigits: null,
//   });

//   return (
//     <main>
//       <div className="overflow-x-auto">
//         <div className="min-w-full overflow-x-scroll">
//           <table className="table-auto border-collapse border border-gray-800">
//             <thead>
//               <tr className="bg-gray-800 text-white">
//                 <th className="px-4 py-2">Id</th>
//                 <th className="px-4 py-2">First Name</th>
//                 <th className="px-4 py-2">Last Name</th>
//                 <th className="px-4 py-2">Email</th>
//                 <th className="px-4 py-2">Salary</th>
//                 <th className="px-4 py-2">Date</th>
//                 <th className="px-4 py-2">Image</th>
//                 <th colSpan={5} className="text-center">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {employees ? (
//                 employees.map((employee, i) => (
//                   <tr key={employee.id} className="text-center">
//                     <td className="border px-4 py-2 text-sm">{employee.id}</td>
//                     <td className="border px-4 py-2 text-sm">
//                       {employee.firstName}
//                     </td>
//                     <td className="border px-4 py-2 text-sm">
//                       {employee.lastName}
//                     </td>
//                     <td className="border px-4 py-2 text-sm">
//                       {employee.email}
//                     </td>
//                     <td className="border px-4 py-2 text-sm">
//                       {formatter.format(employee.salary)}
//                     </td>
//                     <td className="border px-4 py-2 text-sm">
//                       {employee.date}{" "}
//                     </td>
//                     <td className="border px-4 py-2 text-sm">
//                       {employee.imageURL}
//                     </td>
//                     <td className="text-right">
//                       <button
//                         onClick={() => handleEdit(employee.id)}
//                         className="button muted-button py-2 px-5 rounded hover:bg-red-700 text-white font-bold"
//                         style={{
//                           backgroundColor: "#38A169", // Red background color
//                           borderColor: "#EF4444", // Red border color
//                           color: "#FFFFFF", // White text color
//                         }}
//                       >
//                         Edit
//                       </button>
//                     </td>
//                     <td className="text-left">
//                       <button
//                         onClick={() => handleDelete(employee.id)}
//                         className="button muted-button py-2 px-3 rounded hover:bg-red-700 text-white font-bold"
//                         style={{
//                           backgroundColor: "#EF4444", // Red background color
//                           borderColor: "#EF4444", // Red border color
//                           color: "#FFFFFF", // White text color
//                         }}
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>{/* <td colSpan={20}></td> */}</tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Table;

import React from "react";

const Table = ({ advertises, handleEdit, handleDelete }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: null,
  });

  return (
    <main>
      <div className="overflow-x-auto">
        <div className="min-w-full overflow-x-scroll">
          <table className="table-auto border-collapse border border-gray-800">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="px-4 py-2">Id</th>
                <th className="px-4 py-2">Ad.</th>
                <th className="px-4 py-2">Discription</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Cost</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Image</th>
                <th colSpan={2} className="text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {advertises ? (
                advertises.map((advertise, i) => (
                  <tr key={advertise.id} className="text-center">
                    <td className="border px-4 py-2 text-xs">{advertise.id}</td>
                    <td className="border px-4 py-2 text-xs">
                      {advertise.publish}
                    </td>
                    <td className="border px-4 py-2 text-xs">
                      {advertise.discription}
                    </td>
                    <td className="border px-4 py-2 text-xs">
                      {advertise.email}
                    </td>
                    <td className="border px-4 py-2 text-xs">
                      {formatter.format(advertise.cost)}
                    </td>
                    <td className="border px-4 py-2 text-xs">
                      {advertise.phone}
                    </td>
                    <td className="border px-4 py-2 text-xs">
                      {advertise.imageUrl && (
                        <img
                          src={advertise.imageUrl}
                          alt="Advertise"
                          className="w-20 h-20 object-cover"
                        />
                      )}
                    </td>
                    <td className="text-right">
                      <button
                        onClick={() => handleEdit(advertise.id)}
                        className="button muted-button py-2 px-5 rounded hover:bg-red-700 text-white font-bold"
                        style={{
                          backgroundColor: "#38A169",
                          borderColor: "#EF4444",
                          color: "#FFFFFF",
                        }}
                      >
                        Edit
                      </button>
                    </td>
                    <td className="text-left">
                      <button
                        onClick={() => handleDelete(advertise.id)}
                        className="button muted-button py-2 px-3 rounded hover:bg-red-700 text-white font-bold"
                        style={{
                          backgroundColor: "#EF4444",
                          borderColor: "#EF4444",
                          color: "#FFFFFF",
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={20}></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Table;


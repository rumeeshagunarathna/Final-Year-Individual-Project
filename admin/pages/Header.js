import React from "react";

const Header = ({ setIsAdding, setIsAuthenticated }) => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold">Advertise on SocialSphere</h1>
      <div className="mt-4">
        <button
          className="button muted-button py-2 px-5 rounded hover:bg-red-700 text-white font-bold"
          style={{
            backgroundColor: "#3182CE", // Red background color
            borderColor: "#EF4444", // Red border color
            color: "#FFFFFF", // White text color
          }}
          onClick={() => setIsAdding(true)}
        >
          Add Advertise +
        </button>
        {/* <Logout setIsAuthenticated={setIsAuthenticated} /> */}
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";

const Account = () => {
  const [displayName, setDisplayName] = useState("");
  const { user, updateDisplayName } = UserAuth();

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateDisplayName(displayName);
      console.log(`User displayname updated to ${user.displayName}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleUpdate}>
        <input placeholder="Username" onChange={(e) => setDisplayName(e.target.value)} type="text" />
        <button>set</button>
      </form>
    </div>
  );
};

export default Account;

import React, { useState } from "react";
import Form from "../components/Form";
import FormElement from "../components/FormElement";
import Button from "../components/Button";
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
    <Form onsubmite={handleUpdate} title="Account">
      <FormElement
        onchange={(e) => setDisplayName(e.target.value)}
        placeholder="Username"
        type="text"
      >
        <Button buttonText='Update'></Button>
      </FormElement>
    </Form>
  );
};

export default Account;

import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Form from "../components/Form";
import FormElement from "../components/FormElement";
import Button from "../components/Button";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { user, signUp, updateDisplayName } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      console.log(`User created`);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  return (
    <Form onsubmite={handleSubmit} title="SignUp" error={error}>
      <div>
        <FormElement
          onchange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        ></FormElement>
        <FormElement
          onchange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        ></FormElement>
      </div>
      <Button>SignUp</Button>
      <p>
        Alrady have an account?{" "}
        <Link to="/signin" className="text-red-500 hover:underline">
          Sign In
        </Link>
      </p>
    </Form>
  );
};

export default SignUp;

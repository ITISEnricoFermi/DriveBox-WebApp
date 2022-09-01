import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import FormElement from "../components/FormElement";
import Button from "../components/Button";
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      console.log(`User logged in`);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  return (
    <Form onsubmite={handleSubmit} title="SignIn" error={error}>
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
      <Button>Login</Button>
      <p>
        Don't have an account?{" "}
        <Link to="/signup" className="text-red-500 hover:underline">
          Sign Up
        </Link>
      </p>
    </Form>
  );
};

export default SignIn;

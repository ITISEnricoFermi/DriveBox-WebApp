import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Device from "./pages/Device";
import { AuthContextProvider } from "./context/AuthContext";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import ProtectedRoute from "./pages/ProtectedRoute";
import Shop from "./pages/Shop";
import Faq from "./pages/Faq";
import PreventedRoute from "./pages/PreventedRoute";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signin"
            element={
              <PreventedRoute>
                <SignIn />
              </PreventedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PreventedRoute>
                <SignUp />
              </PreventedRoute>
            }
          />
          <Route path="/shop" element={<Shop />} />
          <Route path="/faq" element={<Faq />} />
          <Route
            path="/device"
            element={
              <ProtectedRoute>
                <Device />
              </ProtectedRoute>
            }
          />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;

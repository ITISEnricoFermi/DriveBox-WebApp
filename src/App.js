import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Device from "./pages/Device";
import { AuthContextProvider } from "./context/AuthContext";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";

function App() {
  return (
    <>
      <AuthContextProvider>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/device" element={<Device />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;

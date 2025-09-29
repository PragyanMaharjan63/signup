import { Routes, Route } from "react-router-dom";
import Home from "./assets/home";
import SignUp from "./assets/Signup";
import Login from "./assets/login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

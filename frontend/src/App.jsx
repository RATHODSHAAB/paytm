import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import {SignUp} from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";


function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<SendMoney />} />
      </Routes>
    </>
  );
}

export default App;

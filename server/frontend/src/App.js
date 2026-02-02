import React from 'react';
import { Routes, Route } from "react-router-dom";
import LoginPanel from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Register />} />
      {/* Add a default route if needed */}
      <Route path="*" element={<div>Please go to /login or /register</div>} />
    </Routes>
  );
}

export default App;
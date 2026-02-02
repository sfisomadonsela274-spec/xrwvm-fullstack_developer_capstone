import React from 'react';
import { Routes, Route } from "react-router-dom";
import LoginPanel from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dealers from './components/Dealers/Dealers';
import Dealer from "./components/Dealers/Dealer";
import PostReview from "./components/Dealers/PostReview"

function App() {
  return (
    <Routes>
        <Route path="/login" element={<LoginPanel />} />
        <Route path="/dealers" element={<Dealers/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/dealer/:id" element={<Dealer/>} />
        <Route path="/postreview/:id" element={<PostReview/>} />
        {/* Add a default route if needed */}
        <Route path="*" element={<div>Please go to /login or /register</div>} />
    </Routes>
  );
}

export default App;
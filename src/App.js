import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Join from "./pages/Join";
import Login from "./pages/Login";
import Top from "./components/Top";
import TopBar from "./components/TopBar";
import ManuBar from "./components/ManuBar";
import MainLayout from "./components/MainLayout";
import Cart from "./pages/Cart";
import Goods from "./pages/Goods";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/goods" element={<Goods />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import ManuBar from "./ManuBar";
import Top from "./Top";
import TopBar from "./TopBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
function MainLayout() {
  return (
    <>
      <TopBar />
      <Top />
      <ManuBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;

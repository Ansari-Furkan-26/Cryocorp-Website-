// src/components/Layout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AIwidget from "./AIwidget"
// import FloatingButton from "./FloatingButton"; // or whatever the file is called

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      {/* <AIwidget /> */}
      <Footer />
      {/* <FloatingButton /> */}
    </>
  );
};

export default Layout;

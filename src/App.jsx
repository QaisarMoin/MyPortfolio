import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css"; // Import LocomotiveScroll styles
import Header from "./Components/Header";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  useEffect(() => {
    // Initialize LocomotiveScroll
    const scrollContainer = document.querySelector("[data-scroll-container]");
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true, // Enables smooth scrolling
    });

    // Clean up LocomotiveScroll on component unmount
    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div
      data-scroll-container
      className="absolute min-w-[100vw] min-h-[100vh] overflow-hidden"
    >
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

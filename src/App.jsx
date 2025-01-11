import "./App.css";
import Header from "../src/Components/Header.jsx";
import LocomotiveScroll from "locomotive-scroll";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./Components/Footer/Footer";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  // useEffect(() => {
  //   const cursor = document.querySelector(".cursor");
  //   document.addEventListener(
  //     "mousemove",
  //     (e) => (
  //       (cursor.style.left = e.pageX + "px"),
  //       (cursor.style.top = e.pageY + "px")
  //     )
  //   );
  // }, []);

  return (
    <div className="absolute min-w-[100vw] min-h-[100vh]  overflow-hidden">
      {/* bg-gradient-to-b from-[#3333339b] to-[#000000] */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

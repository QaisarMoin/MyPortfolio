import "./App.css";
import Header from "../src/Components/Header.jsx";
import LocomotiveScroll from "locomotive-scroll";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

function App() {
  // const locomotiveScroll = new LocomotiveScroll();

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
    <div className="min-w-screen  overflow-hidden">
      <div className="min-w-[100%] overflow-hidden">
        {/* <div
          className="cursor bg-white fixed w-[20px]
       h-[20px] rounded-full "
        ></div> */}
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default App;

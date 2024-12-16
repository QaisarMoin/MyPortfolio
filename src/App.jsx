import "./App.css";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Header from "../src/Components/Header.jsx";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="max-w-screen overflow-hidden">
      <Header />
      <Page1 data-scroll data-scroll-speed="-.3" />
      <Page3 />
      <Page2 />
    </div>
  );
}

export default App;

import "./App.css";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Card from "./Components/Card/Card";
import Header from "../src/Components/Header.jsx";
import LocomotiveScroll from "locomotive-scroll";
import Info from "./Pages/Info";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="min-w-screen absolute overflow-hidden">
      <Header />
      {/* <Page1 />
      <Page3 />
      <Page2 /> */}
      <Info />
    </div>
  );
}

export default App;

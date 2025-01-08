import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Courses from "./components/Courses";
import Home from "./components/Home";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Footer from "./Footer";
import Contact from "./components/Contact";

function Holder() {
  return (
    <div className="h-full w-full">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/campus" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
      
      </Routes>
      <Footer/>
    </div>
  );
}

export default Holder;

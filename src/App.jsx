import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Services from "./components/Services";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<Contact />} />
          {/* Default route for the home page */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

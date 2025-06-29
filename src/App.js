import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonial";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  return (
    <Router basename="/cleargo-services">
      <Header />
      <Routes>
        <Route path="/" element={
          <div>
            <Hero />
            <About />
            <Services />
            <Testimonials />
          </div>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/residential" element={<Services />} />
        <Route path="/window-cleaning" element={<Services />} />
        <Route path="/carpet-upholstery" element={<Services />} />
      </Routes>
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;

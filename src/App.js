import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonial";
import Contact from "./components/Contact";
import CategoryPage from "./components/Category.jsx";

function App() {
  return (
    <Router basename={process.env.REACT_APP_BASENAME || "/"}>
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
        <Route path="/residential" element={<CategoryPage />} />
        <Route path="/window-cleaning" element={<CategoryPage />} />
        <Route path="/carpet-upholstery" element={<CategoryPage />} />
      </Routes>
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;

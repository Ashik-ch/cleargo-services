import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import About from './components/About';
import Testimonials from './components/Testimonial';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './components/Gallery';

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
            <Gallery />
            <Contact />
          </div>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

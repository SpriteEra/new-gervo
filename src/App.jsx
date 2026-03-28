import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Navbar from './common/Nav';
import Services from './pages/Services';
import OurProducts from './pages/OurProducts';
import Footer2 from './pages/Footer.jsx';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/our-products' element={<OurProducts />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer2/>
    </Router>
  
  );
}

export default App;

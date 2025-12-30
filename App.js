import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar/navbar.js';
import SearchBar from './SearchBar/Search.js';
import Body from './Body/Body.js';  
import About from './About/About.js';
import Contact from './Contact/Contact.js';
import Services from './Services/Services.js';
import ProductsItem from './Product/Products.js';



const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        {/* <SearchBar/> */}
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Products/:id" element={<ProductsItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

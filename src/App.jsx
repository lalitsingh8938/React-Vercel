import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Category from "./components/category";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Rest from "./components/rest";
import SigninPage from "./components/Signin";
import About from "./components/About";
import Contact from "./components/Contact";



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Default route (Home Page) */}
        <Route path="/" element={<><Category /><Rest /></>} />

        {/* About page route */}
        <Route path="/about" element={<About />} />


        {/* Contact us page route */}
        <Route path="/contact" element={<Contact />} />
        
        {/* Signin page route */}
        <Route path="/signin" element={<SigninPage />} />


     
        {/* Agar user galat URL pe jaye toh ise home page par le jao */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

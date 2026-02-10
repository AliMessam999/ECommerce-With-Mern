import React from 'react'
import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductListing from './pages/ProductListing'
import Footer from './components/Footer'
// import HomeSlider from './components/HomeSlider'
const App = () => {
  return (
    <Router>
      <Header/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productListing" element={<ProductListing />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
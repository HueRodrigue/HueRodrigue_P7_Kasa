import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import './sass/main.scss'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import App from './App'
import Footer from './components/Footer/Footer'

import './sass/main.scss'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <App/>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

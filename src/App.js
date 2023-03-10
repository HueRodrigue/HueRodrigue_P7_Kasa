import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Product from './pages/Product/Product.jsx'
import Error from './pages/Error/Error.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
export default function App() {
    return(
        <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/product/:id" element={<Product/>}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="*" element={<Error />}></Route>
        </Routes>
    )
}

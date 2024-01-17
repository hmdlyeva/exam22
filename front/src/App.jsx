import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import MenuPage from './components/routesPages/MenuPage'
import SepacialPage from './components/routesPages/SepacialPage'
import Reservationpage from './components/routesPages/Reservationpage'
import Blogpage from './components/routesPages/blogpage'
import Aboutpage from './components/routesPages/Aboutpage'
import Contactpage from './components/routesPages/Contactpage'
import AddPage from './components/addpage/AddPage'



import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import Detail from './components/detail/Detail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/special" element={<SepacialPage />} />
          <Route path="/reservation" element={<Reservationpage />} />
          <Route path="/blog" element={<Blogpage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/detail" element={<Detail />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

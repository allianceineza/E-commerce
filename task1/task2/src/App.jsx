import { useState } from 'react'

import Home from './components/Home'
import Layout from './components/Layout'
import Blog from './components/Blog'
import Vendors from './components/Vendors'
import Contact from './components/contact'
import Shop from'./components/shop'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//import Layout from './components/Layout'
//import Footer from './components/Footer'
//import './App.css'

function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/home'  element={<Home />} />
            <Route path='/blog'  element={<Blog />} />
            <Route path='/Vendors' element={<Vendors/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Shop' element={<Shop/>}/>


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from './components/Header'
import './styles/main.scss'
import { Container } from './home/Container'
import { BrowserRouter, HashRouter, Router, Routes, Route } from 'react-router-dom'
import { Projects } from './projects/Projects'
import { Footer } from './home/Footer'
import { useEffect } from 'react'
import AOS from 'aos'
import { Prodpage } from './productpage/Prodpage'
import { Contact } from './contact/Contact'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])
  return (
    <>
      <BrowserRouter basename='/'>
        <Header />
        <Routes>
          <Route path='/mupando/' element={<Container />} ></Route>
          <Route path='/mupando/projects' element={<Projects />} ></Route>
          <Route path='/mupando/projects/:title' element={<Prodpage />} ></Route>
          <Route path='/mupando/contact' element={<Contact/>} ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>

  )
}

export default App

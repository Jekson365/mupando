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
          <Route path='/projects' element={<Projects />} ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>

  )
}

export default App

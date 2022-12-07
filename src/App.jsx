import { useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from './components/Header'
import './styles/main.scss'
import { Container } from './home/Container'
import { BrowserRouter, HashRouter, Router,Routes, Route } from 'react-router-dom'
import { Projects } from './projects/Projects'
import { Footer } from './home/Footer'

function App() {
  return (
    <>
      <BrowserRouter basename='/'>
        <Header />
        <Routes>
          <Route path='/' element={<Container />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    </>

  )
}

export default App

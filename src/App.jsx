import { useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from './components/Header'
import './styles/main.scss'
import { Container } from './sections/Container'

function App() {
  return (
    <>
      <Header />
      <Container/>
    </>

  )
}

export default App

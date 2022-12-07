import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components.scss'

export const Header = () => {
  return (
    <div className='hd container-fluid d-flex bg-white align-items-center justify-content-between'
    >
        <h3 className='title h3'>Mupando</h3>
        <nav className='d-flex'>
            <Link to='/' className='fs-5 color-gray m-3'>About</Link>
            <Link to='/projets' className='fs-5 color-gray m-3'>Projects</Link>
            <Link to='#' className='fs-5 color-gray m-3'>Contact</Link>
        </nav>
    </div>
  )
}

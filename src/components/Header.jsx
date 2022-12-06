import React from 'react'
import '../styles/components.scss'

export const Header = () => {
  return (
    <div className='hd container-fluid d-flex bg-white align-items-center justify-content-between'
    >
        <h3 className='title h3'>Mupando</h3>
        <nav className='d-flex'>
            <a href='#' className='fs-5 color-gray m-3'>About</a>
            <a href='#' className='fs-5 color-gray m-3'>Projects</a>
            <a href='#' className='fs-5 color-gray m-3'>Contact</a>
        </nav>
    </div>
  )
}

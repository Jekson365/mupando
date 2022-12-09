import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../styles/components.scss'

export const Header = () => {
  const [head,setHead] = useState("res-nav-none")
  return (
    <div className='hd container-fluid d-flex bg-white align-items-center justify-content-between'
    >
      <h3 className='title h3'>Mupando</h3>
      <nav className={`d-flex align-items-center ${head}`}>
        <Link to='/mupando' className='fs-5 color-gray m-3'>About</Link>
        <Link to='/mupando/projects' className='fs-5 color-gray m-3'>Projects</Link>
        <Link to='/mupando/contact' className='fs-5 color-gray m-3'>Contact</Link>
      </nav>
      <div className="bars">
          <FaBars onClick={()=>setHead(head == 'res-nav' ? "res-nav-dis" : "res-nav")} />
        </div>
    </div>
  )
}

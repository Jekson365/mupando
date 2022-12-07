import React from 'react'
import mainVideo from '../assets/cover_video.mp4'
import '../styles/sections.scss'
import { motion } from 'framer-motion'


export const Home = () => {
    return (
        <section className='video-section w-100 position-relative'
        >
            <div className="content position-absolute d-flex h-100 
                w-100 flex-column text-center
                align-items-center justify-content-center">
                <motion.h1
                    initial={{ opacity: 0, y: 200 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className='text-white'>Lets Create Your Dream <br /> Space</motion.h1>
                <button className='main-btn'>Contact Us</button>
            </div>
            <div className="overlay position-absolute w-100 h-100"></div>
            <video src={mainVideo} className='w-100' autoPlay loop muted type='video/mp4' style={{ "height": "100vh" }}></video>
        </section>
    )
}

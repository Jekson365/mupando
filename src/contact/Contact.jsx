import React from 'react'
import { Formcomp } from './Formcomp'

export const Contact = () => {
    return (
        <>
            <div className="w-100" style={{ "height": "100vh" }}>

                <div className="cover-image position-relative"
                    style={{ "height": "65%", "backgroundImage": `url('https://uploads-ssl.webflow.com/632872dd89964e9ebf491700/63287af870bf8d0f2bb1da79_kam-idris-_HqHX3LBN18-unsplash.webp')`, 'backgroundSize': "cover" }}
                >

                    <div className="overlay w-100 h-100 position-absolute top-0 left-0">
                        <h1 className='h1 text-white d-flex align-items-center justify-content-center h-100' data-aos='fade-up'>Contact Us</h1>
                    </div>
                </div>
            </div>
            <div className="titlee d-flex align-items-center flex-column justify-content-center">
                <h1 className='h1 text-center'>Contact us to know how<br />
                    we can create</h1>
                <h1 className='h1 df'>your dream space</h1>
            </div>

            <Formcomp />
        </>
    )
}

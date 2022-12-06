import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { AiFillYoutube } from 'react-icons/ai'

export const Footer = () => {
    return (
        <footer className='container-fluid w-100 p-5'>
            <div className="row flex-wrap d-flex align-items-start justify-content-center">
                <div className="col d-flex flex-column align-items-start">
                    <p className="fs-5">
                        Designed By <span>Olajide Fakorede</span>
                    </p>
                    <p className="fs-5">
                        Designed By <span>Olajide Fakorede</span>
                    </p>
                </div>
                <div className="col d-flex text-center flex-column align-items-start">
                    <p className="fs-5">
                        About
                    </p>
                    <p className="fs-5">
                        Projects
                    </p>
                    <p className="fs-5">
                        Contact
                    </p>

                </div>
                <div className="col d-flex flex-column align-items-start">
                    <p className="fs-5">Style Guide</p>
                    <p className="fs-5">Licenses</p>
                    <p className="fs-5">Changelog</p>
                    <p className="fs-5">404</p>
                    <p className="fs-5">Password</p>
                </div>
                <div className="fot-icn col d-flex flex-column align-items-end">
                    <div className="ft-icn">
                        <FaFacebookF />
                    </div>
                    <div className="ft-icn">
                        <BsInstagram />
                    </div>
                    <div className="ft-icn">
                        <BsTwitter />
                    </div>
                    <div className="ft-icn">
                        <AiFillYoutube />
                    </div>
                </div>
            </div>
        </footer>
    )
}

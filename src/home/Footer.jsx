import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { AiFillYoutube } from 'react-icons/ai'

export const Footer = () => {
    return (
        <footer className='container-fluid w-100 p-5'>
            <div className="row flex-wrap d-flex align-items-start justify-content-center">
                <ul className="col d-flex flex-column align-items-start">

                    <li className="fs-5">
                        <a>
                            Designed By <span>Olajide Fakorede</span>
                        </a>
                    </li>
                    <li className="fs-5">
                        <a>
                            Designed By <span>Olajide Fakorede</span>
                        </a>
                    </li>
                </ul>
                <ul className="col d-flex text-center flex-column align-items-start">
                    <li className="fs-5">
                        <a>
                            About
                        </a>
                    </li>
                    <li className="fs-5">
                        <a>
                            Projects
                        </a>
                    </li>
                    <li className="fs-5">
                        <a>
                            Contact
                        </a>
                    </li>

                </ul>
                <ul className="col d-flex flex-column align-items-start">
                    <li className="fs-5">
                        <a>
                            Style Guide
                        </a>
                    </li>
                    <li className="fs-5">
                        <a>
                            Licenses
                        </a>
                    </li>
                    <li className="fs-5">
                        <a>
                            Changelog
                        </a>
                    </li>
                    <li className="fs-5">
                        <a>
                            404
                        </a>
                    </li>

                    <li className="fs-5">
                        <a>
                            Password
                        </a>
                    </li>
                </ul>
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
        </footer >
    )
}

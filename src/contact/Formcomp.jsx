import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { AiFillYoutube } from 'react-icons/ai'
import '../styles/contact.scss'

export const Formcomp = () => {
    return (
        <>
            <div className="w-100 p-3 d-flex flex-row flex-wrap  align-items-start af" style={{ "maxWidth": "1300px",'margin':"0 auto"}}>
                <div className="col-md-5 d-flex flex-column align-items-left ">
                    <h1 className='h1' style={{ "fontWeight": "bold" }}>Address</h1>
                    <p className="fs-5">
                        8 Ginseng CL, Salama Park<br />
                        Lusaka, Zambia
                    </p>
                    <div className="fot-icn flex-row d-flex align-items-end">
                        <div className="ft-icn">
                            <FaFacebookF className='sds' />
                        </div>
                        <div className="ft-icn">
                            <BsInstagram className='sds' />
                        </div>
                        <div className="ft-icn">
                            <BsTwitter className='sds' />
                        </div>
                        <div className="ft-icn">
                            <AiFillYoutube className='sds' />
                        </div>
                    </div>
                </div>
                <div className="col-md-7 d-flex flex-column align-items-left">
                    <form className=' frm d-flex flex-column align-items-start'>
                        <div className="form-group d-flex flex-column">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" placeholder='What`s your name?' className='w-100' />
                        </div>
                        <div className="form-group d-flex flex-column">
                            <label htmlFor="Email">Email Address</label>
                            <input type="text" name="Email" className='w-100' placeholder='What is your Email address ? ' />
                        </div>
                        <div className="form-group d-flex flex-column">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" name="phone" className='w-100' placeholder='What`s your phone Number' />
                        </div>
                        <div className="form-group d-flex flex-column">
                            <label htmlFor="message">Message</label>
                            <textarea type="text" name="name" className='w-100'  placeholder='How can we help you ? '/>
                        </div>
                        <button className='submit' >Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

import React from 'react'
import '../styles/components.scss'

export const Overview = ({ overview }) => {
    return (

        <div className='overview container-fluid text-left d-flex flex-column w-100 align-items-center text-center justify-content-center' style={{ "height": "100vh" }}>
            <h1 className='h1'>Overview</h1>
            <p className="fs-5 w-75">
                {overview}
            </p>
        </div>
    )
}

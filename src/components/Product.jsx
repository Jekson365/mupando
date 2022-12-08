import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Product = (props) => {
    const navigate = useNavigate()
    return (
        <>
            <a
                href={`/mupando/projects/${props.props.title.split(" ").join("-")}`}
                className="box box_2 m-1 position-relative" style={{ "backgroundImage": `url('${props.props.image}')` }}>
                <div className="box-content">   
                    <h2 className="h2">{props.props.title}</h2>
                    <p className="p">{props.props.year}</p>
                </div>
            </a>
        </>
    )
}   

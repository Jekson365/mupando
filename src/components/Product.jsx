import React from 'react'

export const Product = ({props}) => {
    return (
        <>
            <div className="box box_2 m-1 position-relative" style={{ "backgroundImage": `url('${props.image}')` }}>
                <div className="box-content">
                    <h2 className="h2">{props.title}</h2>
                    <p className="p">{props.year}</p>
                </div>
            </div>
        </>
    )
}

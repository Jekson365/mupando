import React from 'react'

export const Attached = () => {
    var content = [
        {
            image: "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/634938e7d2f3b4bd250203ca_632a3606603406e4663171ad_uneebo-office-design-6182SnH84II-unsplash-p-1600-p-500.jpg",
            title: "Blue Light",
            year: 2022,
        },
        {
            image: "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/63493a208dd9b8415ad4a4b5_632a33be81825a7362be9106_toa-heftiba-FV3GConVSss-unsplash-p-1600-p-500.jpg",
            title: "Ola Trader",
            year: 2020,
        },
        {
            image: "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/63493ae7da60b37aed660ccc_632a3323ed3664e2a26f8503_spacejoy-AAy5l4-oFuw-unsplash-p-1600-p-500.jpg",
            title: "Miamor Lodge",
            year: 2015,
        }
    ]
    return (
        <section className='container-fluid position-relative attached d-flex align-items-center flex-column justify-content-center' >
            <h1 className="h1 m-5 text-white dxa">Our Projects</h1>
            <div className="container-fluid dxa d-flex flex-wrap align-items-start justify-content-center">
                {content.map((con) => {
                    return (
                        <>
                            <div className="box m-1 position-relative" style={{ "backgroundImage": `url('${con.image}')` }}>
                                <div className="box-content">
                                    <h2 className="h2">{con.title}</h2>
                                    <p className="p">{con.year}</p>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
            <button className='main-btn m-5 dxa'>View More</button>
            <div className="overlay position-absolute top-0 left-0 w-100 h-100">
            </div>
        </section>
    )
}

import React, { useEffect, useState } from 'react'
import { Product } from '../components/Product'

export const More = () => {
    const content = [

        {
            image: "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/634938e7d2f3b4bd250203ca_632a3606603406e4663171ad_uneebo-office-design-6182SnH84II-unsplash-p-1600-p-500.jpg",
            title: "Blue Light",
            year: 2022,
            typology: "House",
            photos: [
                "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/63493afa667b348367442445_632a33249c50e33eb825df25_spacejoy-umAXneH4GhA-unsplash-p-1600.jpg",
                "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/63493afa446cd791dc346d55_632a3326226b7835ff91bda7_spacejoy-TKFskJy8PQ8-unsplash-p-1600.jpg",
                "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/63493af89738c57c86d3ea40_632a332608053cb90a85c0a1_spacejoy-q3Qd86sfaoU-unsplash-p-1600.jpg",
                "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/63493ae7da60b37aed660ccc_632a3323ed3664e2a26f8503_spacejoy-AAy5l4-oFuw-unsplash-p-1600.jpg"
            ],
            id:1,
            simId:[2,4,3],
        },
        {
            image: "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/63493a208dd9b8415ad4a4b5_632a33be81825a7362be9106_toa-heftiba-FV3GConVSss-unsplash-p-1600-p-500.jpg",
            title: "Ola Trader",
            year: 2020,
            typology: "Apartament",
            photos: [
                "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/63493afa667b348367442445_632a33249c50e33eb825df25_spacejoy-umAXneH4GhA-unsplash-p-1600.jpg",
                "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/63493afa446cd791dc346d55_632a3326226b7835ff91bda7_spacejoy-TKFskJy8PQ8-unsplash-p-1600.jpg",
                "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/63493af89738c57c86d3ea40_632a332608053cb90a85c0a1_spacejoy-q3Qd86sfaoU-unsplash-p-1600.jpg",
                "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/63493ae7da60b37aed660ccc_632a3323ed3664e2a26f8503_spacejoy-AAy5l4-oFuw-unsplash-p-1600.jpg"
            ],
            id:2,
            simId:[2,5,1],
        },
        {
            image: "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/63493ae7da60b37aed660ccc_632a3323ed3664e2a26f8503_spacejoy-AAy5l4-oFuw-unsplash-p-1600-p-500.jpg",
            title: "Miamor Lodge",
            year: 2015,
            typology: "House",
            photos: [
                "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/63493afa667b348367442445_632a33249c50e33eb825df25_spacejoy-umAXneH4GhA-unsplash-p-1600.jpg",
                "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/63493afa446cd791dc346d55_632a3326226b7835ff91bda7_spacejoy-TKFskJy8PQ8-unsplash-p-1600.jpg",
                "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/63493af89738c57c86d3ea40_632a332608053cb90a85c0a1_spacejoy-q3Qd86sfaoU-unsplash-p-1600.jpg",
                "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/63493ae7da60b37aed660ccc_632a3323ed3664e2a26f8503_spacejoy-AAy5l4-oFuw-unsplash-p-1600.jpg"
            ],
            id:3,
            simId:[3,5,1],
        },
        {
            image: "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/6349399a667b34418c4413e6_6328a4ff0f5f61f3730c8f35_spacejoy-RUvW1KGD9a4-unsplash-p-1600-p-500.jpg",
            title: "Holiday Me",
            year: 2022,
            typology: "Apartament",
            photos: [
                "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/63493afa667b348367442445_632a33249c50e33eb825df25_spacejoy-umAXneH4GhA-unsplash-p-1600.jpg",
                "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/63493afa446cd791dc346d55_632a3326226b7835ff91bda7_spacejoy-TKFskJy8PQ8-unsplash-p-1600.jpg",
                "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/63493af89738c57c86d3ea40_632a332608053cb90a85c0a1_spacejoy-q3Qd86sfaoU-unsplash-p-1600.jpg",
                "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/63493ae7da60b37aed660ccc_632a3323ed3664e2a26f8503_spacejoy-AAy5l4-oFuw-unsplash-p-1600.jpg"
            ],
            id:4,
            simId:[4,2,1],
        },
        {
            image: "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/63493b92a76f0334f2e5d288_6328a450b1e648ca7cc0568c_ralph-ravi-kayden-zSG-kd-L6vw-unsplash-p-1600-p-500.jpg",
            title: "Prime Joint",
            year: 2020,
            typology: "House",
            photos: [
                "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/63493afa667b348367442445_632a33249c50e33eb825df25_spacejoy-umAXneH4GhA-unsplash-p-1600.jpg",
                "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/63493afa446cd791dc346d55_632a3326226b7835ff91bda7_spacejoy-TKFskJy8PQ8-unsplash-p-1600.jpg",
                "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/63493af89738c57c86d3ea40_632a332608053cb90a85c0a1_spacejoy-q3Qd86sfaoU-unsplash-p-1600.jpg",
                "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/63493ae7da60b37aed660ccc_632a3323ed3664e2a26f8503_spacejoy-AAy5l4-oFuw-unsplash-p-1600.jpg"
            ],
            id:5,
            simId:[1,4,5],
        },
        {
            image: "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/63493c2007d2bd6c778dc908_6328a3309a2f387b90ce347a_r-architecture-wDDfbanbhl8-unsplash-p-1600-p-500.jpg",
            title: "Kingsland Apartament",
            year: 2015,
            typology: "House",
            photos: [
                "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/63493afa667b348367442445_632a33249c50e33eb825df25_spacejoy-umAXneH4GhA-unsplash-p-1600.jpg",
                "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/63493afa446cd791dc346d55_632a3326226b7835ff91bda7_spacejoy-TKFskJy8PQ8-unsplash-p-1600.jpg",
                "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/63493af89738c57c86d3ea40_632a332608053cb90a85c0a1_spacejoy-q3Qd86sfaoU-unsplash-p-1600.jpg",
                "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/63493ae7da60b37aed660ccc_632a3323ed3664e2a26f8503_spacejoy-AAy5l4-oFuw-unsplash-p-1600.jpg"
            ],
            id:6,
            simId:[2,4,3],
        },

    ]
    const [elements, setElements] = useState([])
    const selectRandom = () => {
        var elements = []

        for (var i = 0; i < 3; i++) {
            elements.push(content[Math.floor(Math.random() * content.length)])
        }
        setElements(elements)
    }

    useEffect(() => {
        selectRandom()
    }, [])

    return (
        <>
            <section className='container-fluid position-relative attached d-flex align-items-center flex-column justify-content-center' >
                <h1 className="h1 m-5 text-white dxa" data-aos='fade-up'>More Projects</h1>
                <div className="line"></div>
                <div
                    data-aos='fade-up'
                    className="container-fluid  dxa d-flex flex-wrap align-items-start justify-content-center">
                    {elements.map((con) => {
                        return (
                            <>
                                <Product props={con} />
                            </>
                        )
                    })}
                </div>
                <button className='main-btn m-5 dxa' data-aos='fade-up'>View More</button>
                <div className="overlay position-absolute top-0 left-0 w-100 h-100">
                </div>
            </section>
        </>
    )
}

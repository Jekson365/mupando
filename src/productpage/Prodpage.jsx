import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/prodpage.scss'
import { More } from './More'
import { Overview } from './Overview'
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. <br />Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."

export const Prodpage = () => {
    const url = useParams()

    const data = [
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
            ]
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
            ]
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
            ]
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
            ]
        },
        {
            image: "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee    6a9e/63493b92a76f0334f2e5d288_6328a450b1e648ca7cc0568c_ralph-ravi-kayden-zSG-kd-L6vw-unsplash-p-1600-p-500.jpg",
            title: "Prime Joint",
            year: 2020,
            typology: "House",
            photos: [
                "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/63493afa667b348367442445_632a33249c50e33eb825df25_spacejoy-umAXneH4GhA-unsplash-p-1600.jpg",
                "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/63493afa446cd791dc346d55_632a3326226b7835ff91bda7_spacejoy-TKFskJy8PQ8-unsplash-p-1600.jpg",
                "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/63493af89738c57c86d3ea40_632a332608053cb90a85c0a1_spacejoy-q3Qd86sfaoU-unsplash-p-1600.jpg",
                "https://uploads-ssl.webflow.com/6328a1c19d4859dd9eee6a9e/63493ae7da60b37aed660ccc_632a3323ed3664e2a26f8503_spacejoy-AAy5l4-oFuw-unsplash-p-1600.jpg"
            ]
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
            ]
        },

    ]
    const [currentProd, setCurrentPord] = useState(data.filter((item) => item.title == url.title.split("-").join(" ")))



    return (
        <div>
            {currentProd.map((each) => {
                return (
                    <>
                        <div
                            style={{ "height": "80vh" }}
                            className="prod-page w-100 d-flex p-5 align-items-end justify-content-center flex-wrap">
                            <div className="col-md-6 h-75 pt-5 align-items-start">
                                <h1 className='h1'>{each.title}</h1>
                            </div>
                            <div className="scc col-md-6 h-75">
                                <ul className='d-flex flex-column align-items-start'>
                                    <li className='d-flex mt-5 justify-content-between w-100'>
                                        <p className='fs-2'>Client</p>
                                        <p className='fs-4'>{each.title}</p>
                                    </li>
                                    <li className='d-flex mt-5 justify-content-between w-100'>
                                        <p className='fs-2'>Typology</p>
                                        <p className='fs-4'>{each.typology}</p>
                                    </li>
                                    <li className='d-flex mt-5 justify-content-between w-100'>
                                        <p className='fs-2'>Year</p>
                                        <p className='fs-4'>{each.year}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {each.photos.map((img) => {
                            return (
                                <>
                                    <div className="container-fluid mt-4" style={{ "height": "100vh" }}>
                                        <img src={img} className='w-100 h-100' style={{ "objectFit": "cover", 'borderRadius': "200px" }} />
                                    </div>
                                </>
                            )
                        })}
                    </>
                )
            })}
            <Overview overview={lorem}/>
            <More/>
        </div>
    )
}

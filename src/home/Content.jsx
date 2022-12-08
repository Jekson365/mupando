import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const lorem = <p className='p'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. <br />Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
</p>
export const Content = () => {

    const content = [
        {
            title: "Interior Design",
            desc: lorem,
            img: "https://uploads-ssl.webflow.com/632872dd89964e9ebf491700/63287af870bf8d0f2bb1da79_kam-idris-_HqHX3LBN18-unsplash-p-800.webp",            
            transition:"left",
            
        },
        {
            title: "Premium furninshings",
            desc: lorem,
            img: "https://uploads-ssl.webflow.com/632872dd89964e9ebf491700/63287fe07c790dd578d0ec42_r-architecture-rOk4VSMS3Ck-unsplash-p-800.jpg",
            transition:"right",
        },
        {
            title: "Interior Design",
            desc: lorem,
            img: "https://uploads-ssl.webflow.com/632872dd89964e9ebf491700/63288122893c4b166adcefc1_r-architecture-WNW8qPAqdsg-unsplash-p-800.webp",
            transition:"left",
        },
        {
            title: "Interior Design",
            desc: lorem,
            img: "https://uploads-ssl.webflow.com/632872dd89964e9ebf491700/6328811fe72ddc75a5329fcc_r-architecture-uDtC-1NLEzU-unsplash-p-800.jpg",
            transition:"right",
        },
    ]

    useEffect(()=> {
        AOS.init({
            duration:1000
        })
    },[])

    return (
        <div className='container d-flex align-items-center flex-column content-content' style={{ "maxWidth": "1300px" }}>
            {content.map((each) => {
                return (<>
                    <div  className="in-content position-relative container-fluid d-flex align-items-center flex-wrap p-5">
                        <div className="rev row w-100  h-100 align-items-center">
                            <div data-aos='fade-right' className="col-md-6">
                                <h1 className='h1'>{each.title}</h1>
                                <div className="line"></div>
                                <p style={{"fontSize":"1.2rem"}}>{each.desc}</p>
                            </div>
                            <div data-aos='fade-left' className="col-md-6">
                                <div className="cover h-100 w-100">
                                    <img src={each.img} className='h-100 w-100' />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                )
            })}
        </div>
    )
}

import React from 'react'

const lorem = <p className='p'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. <br />Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
</p>
export const Content = () => {

    const content = [
        {
            title: "Interior Design",
            desc: lorem,
            img: "https://uploads-ssl.webflow.com/632872dd89964e9ebf491700/63287af870bf8d0f2bb1da79_kam-idris-_HqHX3LBN18-unsplash-p-800.webp"
        },
        {
            title: "Premium furninshings",
            desc: lorem,
            img: "https://uploads-ssl.webflow.com/632872dd89964e9ebf491700/63287fe07c790dd578d0ec42_r-architecture-rOk4VSMS3Ck-unsplash-p-800.jpg"
        },
        {
            title: "Interior Design",
            desc: lorem,
            img: "https://uploads-ssl.webflow.com/632872dd89964e9ebf491700/63288122893c4b166adcefc1_r-architecture-WNW8qPAqdsg-unsplash-p-800.webp"
        },
        {
            title: "Interior Design",
            desc: lorem,
            img: "https://uploads-ssl.webflow.com/632872dd89964e9ebf491700/6328811fe72ddc75a5329fcc_r-architecture-uDtC-1NLEzU-unsplash-p-800.jpg"
        },
    ]

    return (
        <div className='container-fluid d-flex flex-column content-content'>
            {content.map((each) => {
                return (
                    <section className="in-content  container-fluid d-flex flex-wrap p-5">
                        <div className="rev row w-100  h-100 align-items-center">
                            <div className="col-md-6">
                                <h1 className='h1'>{each.title}</h1>
                                <div className="line"></div>
                                <p className="fs-5">{each.desc}</p>
                            </div>
                            <div className="col-md-6 h-100">
                                <div className="cover h-100 w-100">
                                    <img src={each.img} className='h-100 w-100'/>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            })}
        </div>
    )
}

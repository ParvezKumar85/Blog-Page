import React from 'react'

const Hero = (props) => {
    return (
        <>
            <section class="hero-section mt-5 mb-5">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <h1>{props.title}</h1>
                            <p className="p-hero">{props.des}</p>
                        </div>
                        <div class="col-lg-6">
                            <img src={props.img} alt="Image" class="img-fluid mt-2" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
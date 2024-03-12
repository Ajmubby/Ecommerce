"use client"
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as Animate from "react-reveal"

export default function HomeHeroSection() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
    };

    return (
        <section className="bg-zinc-200 py-20">
            <Slider {...settings} className="md:w-[75%] w-[100%] mx-auto">
                {(() => {
                    const slides = [];

                    for (let i = 1; i <= 3; i++) {
                        slides.push(<div>
                            <div className="grid grid-cols-2 md:gap-0 gap-10">
                                <div className="md:col-span-1 col-span-2">
                                    <Animate.Fade top>
                                        <h3 className="text-red-500 uppercase">Special Price</h3>
                                    </Animate.Fade>
                                    <Animate.Reveal bottom>
                                        <h1 className="text-6xl mt-4 mb-10">New Product <br /> Collection</h1>
                                    </Animate.Reveal>
                                    <Animate.Reveal bottom delay={500}>
                                        <Link href="/shop" className="uppercase underline">Discover More</Link>
                                    </Animate.Reveal>
                                </div>
                                <div className="md:col-span-1 col-span-2">
                                    <div style={{
                                        background: `url("/facials-bg.png")`,
                                        backgroundSize: 'cover',
                                        width: "100%",
                                        height: "400px",
                                        backgroundPosition: "center"
                                    }}></div>
                                </div>
                            </div>
                        </div>);
                    }

                    return slides;
                    })()}
            </Slider>
        </section>
    )
}
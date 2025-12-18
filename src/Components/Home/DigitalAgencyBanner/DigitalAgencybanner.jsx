import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DigitalAgencyBanner = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        gsap.from(textRef.current, {
            y: 100,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
            }
        });

        gsap.fromTo(".banner-img",
            {
                scale: 1.3,
            },
            {
                scale: 1.0,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            }
        );
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-dark">
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1774&q=80"
                    alt="Digital Marketing Background"
                    className="banner-img w-full h-full object-cover opacity-70"
                    style={{ willChange: 'transform' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent mix-blend-multiply"></div>
            </div>
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4 select-none">
                <h2 ref={textRef} className="text-[12vw] md:text-[11vw] font-black font-display text-white opacity-0.5 uppercase tracking-tight leading-[0.80] drop-shadow-2xl">
                    Digital<br />
                    <span className="text-transparent opacity-0.5" style={{ WebkitTextStroke: '1px white' }}>Marketing</span>
                </h2>
            </div>
        </section>
    );
};

export default DigitalAgencyBanner;
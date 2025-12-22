import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DiscoverSection = () => {
    const containerRef = useRef(null);
    const headingRef = useRef(null);
    const circleRef = useRef(null);

    useGSAP(() => {
        gsap.to(circleRef.current, {
            y: 150,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            }
        });

        gsap.from(".heading-reveal", {
            x: -100,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: headingRef.current,
                start: "top 90%",
                end: "top 40%",
                scrub: 1,
            }
        });

        gsap.from(".discover-left-content", {
            x: -50,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".discover-left-content",
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.from(".discover-right-content p", {
            y: 60,
            opacity: 0,
            duration: 1,
            stagger: 0.3,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".discover-right-content",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.from(".accent-border", {
            scaleY: 0,
            transformOrigin: "top",
            duration: 1.5,
            ease: "power4.inOut",
            scrollTrigger: {
                trigger: ".accent-border",
                start: "top 80%",
            }
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 md:py-32 bg-customBg relative overflow-hidden ">
            <div className="container mx-auto px-32">
                <div ref={circleRef} className="hidden lg:flex justify-center absolute left-0 right-0 top-12 pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-gray-200/50 border border-gray-300"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 pt-12 relative z-10">
                    <div className="discover-left-content">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-12 block">About Us</span>

                        <div ref={headingRef} className="overflow-hidden mb-16">
                            <h2 className="heading-reveal text-6xl md:text-6xl font-black font-display uppercase leading-[0.85] text-dark">
                                Discover
                            </h2>
                            <h2 className="heading-reveal text-6xl md:text-6xl font-black font-display uppercase leading-[0.85] text-dark">
                                Our <span className="text-[#FF4081]">Agency</span>
                            </h2>
                        </div>

                        <div className="flex relative pl-8 py-1">
                            <div className="accent-border absolute left-0 top-0 bottom-0 w-[3px] bg-accent"></div>
                            <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
                                Welcome to <span className="font-bold text-dark">Spicaware</span> where your ideas come to life. We specialize in crafting unique brands, captivating advertising campaigns, and effective digital strategies.
                            </p>
                        </div>
                    </div>

                    <div className="discover-right-content flex flex-col justify-center space-y-10 lg:pt-20">
                        <p className="text-gray-500 leading-relaxed text-sm md:text-lg text-justify font-medium">
                            At <span className="font-bold text-dark underline decoration-accent/30 underline-offset-4">Spicaware</span>, we specialize in crafting powerful brands, captivating advertising campaigns, and results-driven digital strategies. Our team of skilled designers, copywriters, and marketers works with creativity and dedication to help your business stand out in today's competitive digital landscape. We take the time to understand your goals, audience, and vision — then tailor our approach to ensure your message connects meaningfully with the people who matter most.
                        </p>
                        <p className="text-gray-500 leading-relaxed text-sm md:text-base text-justify">
                            We believe in the power of <span className="font-bold text-dark">creativity, innovation, and strategy</span>. Our mission is to help you build a lasting emotional connection with your audience using modern tools and data-driven insights. By blending our expertise with your unique perspective, we create engaging stories and impactful campaigns that not only attract attention but also inspire action.
                        </p>
                        <div className="w-24 h-[1px] bg-gray-300"></div>
                    </div>

                </div>
            </div>
            <div className="absolute -bottom-20 -right-20 text-[20vw] font-black font-display text-gray-200/20 select-none pointer-events-none uppercase">
                Agency
            </div>
        </section>
    );
};

export default DiscoverSection;
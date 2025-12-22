import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LiquidButton from '../Styles/LiquidButton';
import { JumpingText } from '../JumpingText';
gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const sectionRef = useRef(null);


    
    useGSAP(() => {
        gsap.utils.toArray('.port-shape img').forEach((img) => {
            gsap.to(img, {
                y: "random(-40, 40)",
                x: "random(-20, 20)",
                rotation: "random(-20, 20)",
                duration: "random(4, 7)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: Math.random() * 2
            });
        });

        gsap.utils.toArray('.port-shape').forEach((shape, i) => {
            gsap.to(shape, {
                y: (i + 1) * 80,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });
        });

        const revealItems = gsap.utils.toArray('.port-item-reveal');
        revealItems.forEach((item) => {
            const img = item.querySelector('img');
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top 90%",
                }
            });

            tl.fromTo(item,
                { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
                { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, duration: 1.5, ease: "expo.inOut" }
            );

            if (img) {
                tl.fromTo(img, { scale: 1.4 }, { scale: 1, duration: 2.5, ease: "expo.out" }, 0);
            }
        });

        gsap.to(".diagonal-marquee-1", {
            xPercent: -30,
            ease: "none",
            scrollTrigger: {
                trigger: ".marquee-trigger",
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });

        gsap.to(".diagonal-marquee-2", {
            xPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: ".marquee-trigger",
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });

        gsap.from(".logo-item", {
            opacity: 0,
            y: 50,
            stagger: 0.1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".logo-grid",
                start: "top 95%"
            }
        });

        // Heading animation inside hook
        const headingParts = textRef.current ? textRef.current.querySelectorAll('span, .text-segment') : [];
        if (headingParts && headingParts.length) {
            gsap.from(headingParts, {
                y: 50,
                opacity: 0,
                rotateX: -45,
                stagger: 0.1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });
        }

        // Manifesto footer entrance
        gsap.from(".manifesto-footer", {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".manifesto-footer",
                start: "top 90%",
            }
        });

        // Background X decoration parallax
        gsap.to(".bg-deco-x", {
            y: -100,
            rotate: 180,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });

        // Button hover micro-interaction
        const buttons = gsap.utils.toArray(".button");
        buttons.forEach((item) => {
            const span = item.querySelector("span");
            if (!span) return;
            const tl = gsap.timeline({ paused: true });

            tl.to(span, { duration: 0.2, yPercent: -150, ease: "power2.in" });
            tl.set(span, { yPercent: 150 });
            tl.to(span, { duration: 0.2, yPercent: 0 });

            item.addEventListener("mouseenter", () => tl.play(0));
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="bg-customBg pt-32 md:pt-48 pb-0 relative overflow-hidden" id="portfolio">

            <div className="port-shape absolute top-[5%] left-[-10%] w-[35vw] max-w-[450px] z-0 opacity-60">
                <img src="https://spicaware.com/wp-content/uploads/2024/12/shapes-1.png" alt="" />
            </div>
            <div className="port-shape absolute top-[2%] right-[-12%] w-[40vw] max-w-[550px] z-0 opacity-60">
                <img src="https://spicaware.com/wp-content/uploads/2024/12/shapes-2.png" alt="" />
            </div>
            <div className="port-shape absolute top-[22%] left-[18%] w-[12vw] max-w-[150px] z-0 opacity-30">
                <img src="https://spicaware.com/wp-content/uploads/2024/12/shapes-5.png" alt="" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb- flex flex-col items-center">
                    <h1 className="text-[12vw] md:text-[8vw] font-black font-display uppercase tracking-tighter text-dark leading-none relative">

                        <JumpingText
                            text="our best"
                            hoverColor="hover:text-blue-400"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }} />
                        <span className="text-[6vw] text-[#FF4081]">WORKS</span>
                    </h1>
                    <div className="port-shape w-24 h-24 mt-[-40px] opacity-40">
                        <img src="https://spicaware.com/wp-content/uploads/2024/12/shapes-5.png" alt="" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 mb-64">
                    <div className="md:col-span-4 flex flex-col pt-12">
                        <div className="port-item-reveal relative h-[800px] md:h-[1050px] rounded-sm overflow-hidden shadow-2xl bg-[#0a0a0a]">
                            <img
                                src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                alt="VanMoof iPhone App"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-dark/10"></div>
                        </div>
                        <div className="port-item-reveal relative h-[450px] rounded-sm overflow-hidden shadow-xl mt-12 bg-white">
                            <img
                                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Nike Shoe App"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="md:col-span-4 flex flex-col gap-12 pt-32">
                        <div className="port-item-reveal relative h-[650px] rounded-sm overflow-hidden shadow-xl bg-[#F4F4F4]">
                            <img
                                src="https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                alt="Stationery Branding"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="port-item-reveal relative h-[550px] rounded-sm overflow-hidden shadow-xl bg-white">
                            <img
                                src="https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Branded Tote Bag"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="md:col-span-4 flex flex-col gap-12">
                        <div className="port-item-reveal relative h-[480px] rounded-sm overflow-hidden shadow-xl bg-[#c8e6c9]">
                            <img
                                src="https://images.unsplash.com/photo-1572044162444-ad6021105507?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Young Design 2023 Poster"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="port-item-reveal relative h-[350px] rounded-sm overflow-hidden shadow-xl bg-[#fdf2e9]">
                            <img
                                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Delicia De Ruma Box"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="port-item-reveal relative h-[520px] rounded-sm overflow-hidden shadow-xl bg-[#1b5e20]">
                            <img
                                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Financial UI App"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <section ref={sectionRef} className="py-24 md:py-32 bg-customBg flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
                    <div className="bg-deco-x absolute top-20 right-10 md:right-32 text-[15rem] font-black text-gray-200/40 select-none pointer-events-none font-display">
                        X
                    </div>
                    <div className="absolute -bottom-10 -left-10 w-64 h-64 border-[40px] border-accent/5 rounded-full blur-xl pointer-events-none"></div>

                    <div className="max-w-6xl relative z-10">
                        <p className="text-[12px] font-black uppercase text-gray-400 mb-12 tracking-[0.4em] fade-in-up">Explore Our Agency</p>

                        <h2 ref={textRef} className="text-4xl md:text-4xl lg:text-6xl font-black text-dark uppercase leading-[1.1] font-display">
                            <span className="inline-block mr-3">Spicaware</span>
                            <span className="inline-block mr-3">is</span>
                            <span className="inline-block mr-3">a</span>
                            <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-[#59BB8C]">
                                <span className="text-black inline-block mr-3">creative</span>
                            </span>
                            <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-[#935E2D]">
                                <span className="text-white inline-block mr-3">agency</span>
                            </span>
                            <span className="inline-block mr-3">that</span>
                            <span className="inline-block mr-3">transforms</span>
                            <span className="text-black inline-block mr-3">ideas</span>
                            <span className="inline-block mr-3">into</span>
                            <span className="inline-block mr-3">masterpieces.</span>
                            <br className="hidden md:block" />
                            <span className="inline-block mr-3">We</span>
                            <span className="inline-block mr-3">craft</span>
                            <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-gray-400">
                                <span className="text-black inline-block mr-3">design</span>
                            </span>
                            <span className="inline-block mr-3">magic,</span>
                            <span className="inline-block mr-3">breathe</span>
                            <span className="inline-block mr-3">new</span>
                            <span className="inline-block mr-3">life</span>
                            <span className="inline-block mr-3">into</span>
                            <span className="inline-block mr-3">brands,</span>
                            <span className="inline-block mr-3">and</span>
                            <span className="inline-block mr-3">make</span>
                            <span className="inline-block mr-3">the</span>
                            <span className="text-accent inline-block mr-3">impossible</span>
                            <span className="text-accent inline-block mr-3">possible.</span>
                            <br className="hidden md:block" />
                            <span className="inline-block mr-3">Choose</span>
                            <span className="text-purple-600 inline-block">Pixy</span>
                            <span className="inline-block ml-3">because</span>
                            <span className="inline-block ml-3">we</span>
                            <span className="inline-block ml-3">are</span>
                            <span className="inline-block ml-3">worth</span>
                            <span className="inline-block ml-3">it!</span>
                        </h2>

                        <div className="manifesto-footer mt-20 flex flex-col items-center">
                            <p className="text-xs md:text-sm text-gray-500 max-w-sm mb-12 leading-loose font-medium">
                                We've been working for several years to build a portfolio that truly reflects our passion for innovation and storytelling.
                            </p>

                            <button>
                                <span className="relative z-10">
                                    <LiquidButton
                                        // eslint-disable-next-line no-undef
                                        onClick={() => handleNav('portfolio')}
                                        variant="dark"
                                        className="shadow-lg"
                                    >
                                        View Portfolio
                                    </LiquidButton>
                                </span>
                                <div className="liquid-wave-inner" style={{ background: '#1a1a1a' }}></div>
                            </button>
                        </div>
                    </div>
                </section>
            </div>

            {/* --- DIAGONAL MARQUEE STRIPS (MATCHING SS) --- */}
            <div className="marquee-trigger relative py-60 overflow-hidden bg-white/5">
                <div className="absolute top-1/2 left-[-15%] w-[130%] -translate-y-1/2 flex flex-col gap-12 rotate-[-5deg] z-0">
                    {/* White Strip */}
                    <div className="diagonal-marquee-1 whitespace-nowrap bg-white py-10 border-y-2 border-dark flex items-center shadow-xl">
                        {Array(10).fill("").map((_, i) => (
                            <span key={i} className="text-5xl md:text-7xl font-black font-display uppercase text-dark px-16">
                                CUTTING-EDGE TECHNOLOGY • TAILORED STRATEGIES • PROVEN TRACK RECORD • EXPERT GUIDANCE •
                            </span>
                        ))}
                    </div>
                    <div className="diagonal-marquee-2 whitespace-nowrap bg-[#7F00FF] py-10 shadow-2xl flex items-center translate-x-[-15%]">
                        {Array(10).fill("").map((_, i) => (
                            <span key={i} className="text-5xl md:text-7xl font-black font-display uppercase text-white px-16">
                                SUSTAINABLE PRACTICES • GLOBAL REACH • SATISFACTION GUARANTEED • INDUSTRY EXPERIENCE • COST EFFECTIVE •
                            </span>
                        ))}
                    </div>
                </div>
                <div className="port-shape absolute bottom-[-10%] left-[8%] w-[32vw] max-w-[450px] z-10 opacity-80">
                    <img src="https://spicaware.com/wp-content/uploads/2024/12/shapes-1.png" alt="" />
                </div>
            </div>
            <div className="container mx-auto px-6 pt-72 pb-96 logo-grid">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-16 md:gap-32 items-center justify-items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-1000">

                    <div className="logo-item flex flex-col items-center gap-4">
                        <div className="w-16 h-16 border-[2.5px] border-dark flex items-center justify-center p-3">
                            <div className="w-full h-full bg-dark/20 grid grid-cols-2 gap-2">
                                <div className="bg-dark/60"></div><div className="bg-dark/60"></div>
                                <div className="bg-dark/60"></div><div className="bg-dark/60"></div>
                            </div>
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-dark">minimal logo</span>
                    </div>

                    <div className="logo-item text-3xl font-display font-black leading-none text-center tracking-tight">
                        MI<br />NI<br />MAL
                    </div>

                    <div className="logo-item flex flex-col items-center group">
                        <div className="w-16 h-16 rounded-full border-[2.5px] border-dark flex items-center justify-center relative">
                            <div className="w-10 h-10 rounded-full border border-dark border-dashed animate-spin-slow"></div>
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest mt-4 text-dark">minimal logo</span>
                    </div>

                    <div className="logo-item flex flex-col items-center">
                        <div className="text-6xl font-display font-black leading-none">M</div>
                        <div className="w-12 h-[3px] bg-dark -mt-1"></div>
                        <span className="text-[10px] font-black uppercase tracking-widest mt-3 text-dark">minimal</span>
                    </div>

                    <div className="logo-item text-5xl font-display font-black tracking-tighter">
                        M/L
                    </div>

                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
        animation: spin-slow 15s linear infinite;
        }
    `}} />
        </div>
    );
};


export default Portfolio;
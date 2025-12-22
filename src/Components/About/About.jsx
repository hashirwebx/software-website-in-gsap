import React, { useRef } from 'react';
import { ArrowDownRight, ArrowRight, Instagram, Facebook, Globe } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { JumpingText } from '../JumpingText';
import "./About.css"
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const progressRef = useRef(null);

    useGSAP(() => {
        gsap.to(progressRef.current, {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 0.3,
            }
        });
        gsap.utils.toArray('.about-shape img').forEach((img: any) => {
            gsap.to(img, {
                y: "random(-20, 20)",
                x: "random(-10, 10)",
                rotation: "random(-10, 10)",
                duration: "random(3, 5)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: Math.random() * 2
            });
        });

        gsap.utils.toArray('.about-shape').forEach((shape: any, i: number) => {
            gsap.to(shape, {
                y: (i + 1) * 60,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });
        });
        const maskHeadings = gsap.utils.toArray('.mask-heading');
        maskHeadings.forEach((heading: any) => {
            const text = heading.innerText;
            heading.innerHTML = text.split(' ').map(word => `<span class="inline-block overflow-hidden py-1"><span class="inline-block translate-y-full">${word}&nbsp;</span></span>`).join('');

            gsap.to(heading.querySelectorAll('span span'), {
                y: 0,
                duration: 1.2,
                stagger: 0.1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: heading,
                    start: "top 90%",
                }
            });
        });


        gsap.utils.toArray('.fade-in-up').forEach((el: any) => {
            gsap.from(el, {
                y: 50,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                }
            });
        });


        const revealImages = gsap.utils.toArray('.reveal-img');
        revealImages.forEach((imgWrapper: any) => {
            const img = imgWrapper.querySelector('img');
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: imgWrapper,
                    start: "top 85%",
                }
            });

            tl.fromTo(imgWrapper,
                { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
                { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, duration: 1.5, ease: "expo.inOut" }
            );

            if (img) {
                tl.fromTo(img, { scale: 1.3 }, { scale: 1, duration: 2, ease: "expo.out" }, 0);
            }
        });

        gsap.utils.toArray('.parallax-img').forEach((img: any) => {
            gsap.to(img, {
                yPercent: 15,
                ease: 'none',
                scrollTrigger: {
                    trigger: img.parentElement,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            });
        });

        gsap.from(".purple-bar", {
            x: -100,
            rotate: -5,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".purple-bar",
                start: "top 95%",
            }
        });

        gsap.from(".info-block", {
            y: 60,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".info-block",
                start: "top 90%",
            }
        });
        gsap.from(".hero-text", {
            y: 100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.2
        });

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="bg-customBg overflow-hidden relative" id="about-top">

            <div className="fixed right-6 top-1/2 -translate-y-1/2 w-[1px] h-48 bg-gray-300 z-50 overflow-hidden hidden md:block">
                <div ref={progressRef} className="w-full h-full bg-accent origin-top scale-y-0"></div>
            </div>

            {/* --- PART 1: HEADER SECTION --- */}
            <div className="pt-32 pb-12 md:pt-48 md:pb-24 container mx-auto px-6 relative min-h-[85vh] flex flex-col justify-center">

                {/* Abstract Shapes - Nested structure for cleaner animation */}
                <div className="about-shape absolute top-[5%] left-[-2%] w-[25vw] max-w-[350px] z-0 opacity-40 pointer-events-none">
                    <img src="https://spicaware.com/wp-content/uploads/2024/12/shapes-1.png" alt="" className="w-full h-auto" />
                </div>
                <div className="about-shape absolute top-[15%] right-[5%] w-[20vw] max-w-[300px] z-0 opacity-30 pointer-events-none">
                    <img src="https://spicaware.com/wp-content/uploads/2024/12/shapes-3.png" alt="" className="w-full h-auto" />
                </div>
                <div className="about-shape absolute bottom-[10%] left-[10%] w-[18vw] max-w-[250px] z-0 opacity-40 pointer-events-none">
                    <img src="https://spicaware.com/wp-content/uploads/2024/12/shapes-2.png" alt="" className="w-full h-auto" />
                </div>
                <div className="about-shape absolute bottom-[5%] right-[2%] w-[12vw] max-w-[180px] z-0 opacity-30 pointer-events-none">
                    <img src="https://spicaware.com/wp-content/uploads/2024/12/shapes-5.png" alt="" className="w-full h-auto" />
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 relative z-10">
                    <div className="lg:w-1/2 relative z-10 flex flex-col justify-center">
                        <div className="text-about mb-12">
                            <h1 className="about-text about-text font-black text-dark tracking-tighter uppercase flex justify-start">
                                <JumpingText
                                    text="About"
                                    hoverColor="hover:text-gray-400"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }} />
                            </h1>
                            <h1 className='about-text font-black text-dark tracking-tighter uppercase flex justify-start mb-12'>
                                <JumpingText
                                    text="Spicaware"
                                    hoverColor="hover:text-gray-400"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }} />
                            </h1>
                            <p className="fade-in-up text-gray-600 max-w-md text-sm md:text-base leading-relaxed mb-16 pl-1 border-l-2 border-accent/50 ml-1">
                                Welcome to Spicaware where your ideas come to life. We specialize in crafting unique brands, captivating advertising campaigns, and effective digital strategies.
                            </p>
                        </div>

                        <div className="purple-bar w-[100vw] lg:w-[120%] -ml-[6vw] lg:-ml-[5%] bg-accent text-white py-6 px-6 md:py-8 md:px-12 flex items-center justify-between shadow-2xl relative z-20 transform -rotate-1 origin-left rounded-sm transition-all duration-500 hover:rotate-0">
                            <div className="flex items-center gap-6">
                                <button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-accent transition-all group overflow-hidden relative">
                                    <ArrowDownRight size={20} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                                </button>
                                <span className="text-xs font-bold uppercase tracking-widest hidden md:inline-block">Scroll Down</span>
                            </div>
                            <div className="flex items-center gap-8 pr-4 md:pr-24">
                                <Instagram size={18} className="hover:text-purple-300 cursor-pointer hover:scale-110 transition-transform" />
                                <Globe size={18} className="hover:text-purple-300 cursor-pointer hover:scale-110 transition-transform" />
                                <Facebook size={18} className="hover:text-purple-300 cursor-pointer hover:scale-110 transition-transform" />
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative lg:-ml-20 lg:mt-24 h-[450px] lg:h-[650px] w-full overflow-hidden rounded-sm group z-0 shadow-2xl reveal-img bg-gray-200">
                        <img
                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
                            alt="Team meeting"
                            className="parallax-img w-full h-[120%] object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-1000"
                        />
                    </div>
                </div>
            </div>

            {/* --- PART 2: DISCOVER CONTENT --- */}
            <div className="bg-customBg py-24 md:py-40 relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                        <div className="lg:w-5/12 pt-10 relative">
                            <div>
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 block fade-in-up">Our Journey</span>
                                <h2 className="mask-heading text-6xl md:text-7xl font-black font-display uppercase leading-none mb-10 text-dark">
                                    Discover
                                    <br />Our Agency.
                                </h2>

                                <p className="fade-in-up text-gray-500 leading-relaxed mb-6 text-sm md:text-base text-justify">
                                    At Spicaware, we specialize in crafting powerful brands, captivating advertising campaigns, and results-driven digital strategies. Our team of skilled designers, copywriters, and marketers works with creativity and dedication.
                                </p>
                                <p className="fade-in-up text-gray-500 leading-relaxed mb-12 text-sm md:text-base text-justify">
                                    We take the time to understand your goals, audience, and vision. We believe in the power of creativity, innovation, and strategy.
                                </p>
                            </div>

                            <div className="mt-20 fade-in-up relative select-none">
                                <h3 className="text-[10rem] md:text-[13rem] font-black text-gray-300/40 leading-[0.7] font-display absolute -left-10 -bottom-10 z-0">
                                    257
                                </h3>
                                <div className="relative z-10 pl-4">
                                    <h3 className="text-6xl font-black text-dark font-display">257</h3>
                                    <div className="h-1 w-12 bg-accent mt-2 mb-2"></div>
                                    <p className="font-bold uppercase tracking-widest text-gray-500 text-xs">Completed Projects</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-7/12 relative mt-12 lg:mt-0">
                            <div className="relative h-[600px] lg:h-[800px] w-full overflow-hidden rounded-sm shadow-xl reveal-img bg-gray-200">
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1771&q=80"
                                    alt="Agency Life"
                                    className="parallax-img w-full h-[120%] object-cover grayscale brightness-110 contrast-125 hover:grayscale-0 transition-all duration-1000"
                                />

                                <button
                                    className="gsap-btn btn--accent absolute bottom-10 left-6 right-6 md:left-12 md:right-auto md:w-80 p-10 shadow-2xl transition-all duration-300 rounded-sm"
                                >
                                    <span className="button__flair"></span>
                                    <span className="button__label w-full justify-between">
                                        <span className="text-xs font-bold uppercase tracking-widest">Read More About Us</span>
                                        <ArrowRight size={18} />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#F8F8F8] py-32 border-t border-gray-200">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-20 text-center">
                        <div className="info-block flex flex-col items-center group cursor-default">
                            <div className="w-24 h-24 mb-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 group-hover:border-accent group-hover:text-accent group-hover:bg-white transition-all duration-500 bg-transparent">
                                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                            </div>
                            <h4 className="text-xl font-bold uppercase font-display mb-4 text-dark tracking-wide">Expert Team</h4>
                            <p className="text-xs text-gray-500 leading-relaxed max-w-xs mx-auto font-medium">
                                Our team consists of experienced professionals who work with passion, delivering high-quality projects.
                            </p>
                        </div>

                        <div className="info-block flex flex-col items-center group cursor-default">
                            <div className="w-24 h-24 mb-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 group-hover:border-accent group-hover:text-accent group-hover:bg-white transition-all duration-500 bg-transparent">
                                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                            </div>
                            <h4 className="text-xl font-bold uppercase font-display mb-4 text-dark tracking-wide">Innovative Solutions</h4>
                            <p className="text-xs text-gray-500 leading-relaxed max-w-xs mx-auto font-medium">
                                We offer unique and creative approaches that help your business stand out in the market and achieve success.
                            </p>
                        </div>

                        <div className="info-block flex flex-col items-center group cursor-default">
                            <div className="w-24 h-24 mb-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 group-hover:border-accent group-hover:text-accent group-hover:bg-white transition-all duration-500 bg-transparent">
                                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z" /></svg>
                            </div>
                            <h4 className="text-xl font-bold uppercase font-display mb-4 text-dark tracking-wide">Client Focus</h4>
                            <p className="text-xs text-gray-500 leading-relaxed max-w-xs mx-auto font-medium">
                                We prioritize client needs, deeply understanding them to create tailored solutions for maximum results.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
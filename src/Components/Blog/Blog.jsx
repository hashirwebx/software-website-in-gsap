import React, { useRef } from 'react';
import { ArrowUpRight, ArrowRight, ArrowLeft } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { JumpingText } from '../JumpingText';
gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.to(".blog-shape", {
            y: -20,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: 0.8
        });

        const revealImages = gsap.utils.toArray('.reveal-img-blog');
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
                tl.fromTo(img,
                    { scale: 1.3 },
                    { scale: 1, duration: 2, ease: "expo.out" },
                    0
                );
            }
        });
        const fadeElements = gsap.utils.toArray('.fade-in-blog');
        fadeElements.forEach((el: any) => {
            gsap.fromTo(el,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                    }
                }
            );
        });

    }, { scope: containerRef });

    const articles = [
        {
            tag: "DESIGN",
            date: "JANUARY 4, 2025",
            title: "HOW TO BECOME A GRAPHIC DESIGNER IN 10 SIMPLE STEPS",
            desc: "design is a dynamic field that combines creativity, technical skills, and a keen eye for aesthetics. Whether you're a beginner...",
            image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            btnColor: "bg-gray-200",
            btnTextColor: "text-dark"
        },
        {
            tag: "BRANDING",
            date: "JANUARY 1, 2025",
            title: "10 ESSENTIAL TOOLS EVERY GRAPHIC DESIGNER SHOULD MASTER",
            desc: "Are you passionate about design and interested in pursuing a career as a graphic designer? Graphic design is a dynamic...",
            image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Green leaf texture
            btnColor: "bg-gray-200",
            btnTextColor: "text-white"
        },
        {
            tag: "TECHNOLOGY",
            date: "DECEMBER 28, 2024",
            title: "FROM CONCEPT TO CREATION: THE DESIGN PROCESS EXPLAINED",
            desc: "Are you passionate about design and interested in pursuing a career as a graphic designer? Graphic design is a dynamic...",
            image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Abstract texture
            btnColor: "bg-gray-200",
            btnTextColor: "text-dark"
        }
    ];

    return (
        <div ref={containerRef} className="bg-customBg pt-32 pb-0 min-h-screen">
            <section className="container mx-auto px-6 mb-24 text-center relative">
                <div className="blog-shape absolute top-0 left-10 w-32 h-32 opacity-30 pointer-events-none hidden md:block">
                    <img src="https://spicaware.com/wp-content/uploads/2024/12/shapes-5.png" alt="" className="w-full" />
                </div>
                <div className="blog-shape absolute top-10 right-20 w-48 h-48 opacity-20 pointer-events-none hidden md:block">
                    <img src="https://spicaware.com/wp-content/uploads/2024/12/shapes-3.png" alt="" className="w-full" />
                </div>

                <div className="relative z-10">
                    <div className="mb-4 flex justify-center">
                        <div className="relative">
                            <span className="absolute -top-6 -left-8 text-4xl text-gray-300 transform -rotate-12 opacity-50">✎</span>
                        </div>
                    </div>
                    <div className="blog-title text-[15vw] md:text-[12vw] leading-[1] font-black font-display uppercase text-dark tracking-tight">
                        <h1 className="about-text about-text font-black text-dark tracking-tighter uppercase flex justify-center">
                            <JumpingText
                                text="Newsletter"
                                hoverColor="hover:text-gray-400"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }} />
                        </h1>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-6 mb-32">
                <div className="flex items-center gap-4 mb-12 fade-in-blog">
                    <h2 className="text-4xl md:text-5xl font-black font-display uppercase text-dark">
                        Popular <span className="text-[#FF4081]">Publications</span>
                    </h2>
                    <div className="flex gap-2 ml-auto">
                        <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-dark hover:text-white transition-colors"><ArrowLeft size={16} /></button>
                        <button className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center hover:bg-dark transition-colors"><ArrowRight size={16} /></button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="group bg-transparent fade-in-blog">
                        <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-6 shadow-md group-hover:shadow-2xl transition-all duration-500">
                            <img src={articles[0].image} alt="" className="w-full h-full group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute top-6 left-6 flex items-center gap-4">
                                <span className="bg-dark text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">{articles[0].tag}</span>
                                <span className="bg-white text-dark px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">{articles[0].date}</span>
                            </div>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black font-display uppercase leading-tight mb-4 text-dark">{articles[0].title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-md">{articles[0].desc}</p>
                        <button className={`${articles[0].btnColor} ${articles[0].btnTextColor} w-full py-4 rounded-sm flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity`}>
                            Read More <ArrowUpRight size={16} />
                        </button>
                    </div>

                    <div className="group bg-transparent fade-in-blog">
                        <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-6 shadow-md group-hover:shadow-2xl transition-all duration-500">
                            <img src={articles[1].image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute top-6 left-6 flex items-center gap-4">
                                <span className="bg-dark text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">{articles[1].tag}</span>
                                <span className="bg-white text-dark px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">{articles[1].date}</span>
                            </div>
                            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white">
                                <ArrowRight size={20} className="rotate-45" />
                            </div>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black font-display uppercase leading-tight mb-4 text-dark">{articles[1].title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-md">{articles[1].desc}</p>
                        <button className={`${articles[1].btnColor} ${articles[1].btnTextColor} w-full py-4 rounded-sm flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity`}>
                            Read More <ArrowUpRight size={16} />
                        </button>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-6 mb-32">
                <h2 className="text-4xl md:text-5xl font-black font-display uppercase mb-12 fade-in-blog text-dark">
                    Latest <span className="text-[#FF4081]">Publications</span>
                </h2>

                <div className="flex flex-col gap-12">
                    {articles.map((article, index) => (
                        <div key={index} className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center fade-in-blog">
                            <div className="md:col-span-5 relative h-[250px] rounded-2xl overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-500">
                                <img src={article.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-4 left-4 flex gap-2">
                                    <span className="bg-white/90 backdrop-blur text-dark px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest">{article.tag}</span>
                                    <span className="bg-white/90 backdrop-blur text-dark px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest">{article.date}</span>
                                </div>
                            </div>
                            <div className="md:col-span-7">
                                <h3 className="text-2xl md:text-4xl font-black font-display uppercase leading-tight mb-4 text-dark">{article.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xl">{article.desc}</p>
                                <button className="bg-[#FF4081] text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-dark transition-colors shadow-lg shadow-pink-200">
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center gap-4 mt-20 fade-in-blog">
                    <button className="w-10 h-10 rounded-full bg-accent text-white font-bold flex items-center justify-center shadow-lg">1</button>
                    <button className="w-10 h-10 rounded-full bg-gray-200 text-gray-500 font-bold flex items-center justify-center hover:bg-gray-300">2</button>
                    <button className="w-10 h-10 rounded-full bg-gray-200 text-gray-500 font-bold flex items-center justify-center hover:bg-gray-300"><ArrowRight size={16} /></button>
                </div>
            </section>

            <section className="bg-customBg py-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Team" className="w-full h-full object-cover grayscale contrast-125" />
                        <div className="absolute inset-0 bg-gray-200/20"></div>
                    </div>

                    <div className="flex flex-col justify-center p-12 lg:p-24 bg-customBg">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-4">Newsletter</h4>
                        <h2 className="text-5xl md:text-7xl font-black font-display uppercase text-gray-400 mb-2">
                            Subscribe <span className="text-[#FF4081]">Our</span>
                        </h2>
                        <h2 className="text-5xl md:text-7xl font-black font-display uppercase text-gray-400 mb-12">
                            Newsletter
                        </h2>

                        <div className="relative max-w-md">
                            <input
                                type="email"
                                placeholder="ENTER YOUR EMAIL"
                                className="w-full bg-transparent border-b-2 border-gray-300 py-4 text-xs font-bold tracking-widest text-dark placeholder:text-gray-400 focus:outline-none focus:border-accent transition-colors"
                            />
                            <button className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center text-dark hover:scale-110 transition-transform">
                                <ArrowRight size={18} />
                            </button>
                        </div>

                        <p className="mt-8 text-[10px] text-gray-400 max-w-xs">
                            By clicking the submit button, you agree to the <span className="text-[#FF4081]">rules for processing personal data.</span>
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Blog;
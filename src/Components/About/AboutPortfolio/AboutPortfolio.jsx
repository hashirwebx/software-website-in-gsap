import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const Portfolio = () => {
        const [onNavigate, setMobileOpen] = useState(false);
    const projects = [
        { title: "SHOE STORE", category: "App Mockup", img: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80", color: "#A8D5BA" },
        { title: "DELICIA DE RUMA", category: "Packaging", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80", color: "#90BE6D" },
        { title: "YOUNG DESIGN 2023", category: "Branding", img: "https://images.unsplash.com/photo-1572044162444-ad6021105507?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80", color: "#84C59E" },
        { title: "MOCKUP SET", category: "Stationery", img: "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80", color: "#52B788" }
    ];
    const handleNav = (page) => {
        onNavigate(page);
        setMobileOpen(false);
        window.scrollTo(0, 0);
    };
    return (
        <section className="bg-white py-32" id="portfolio">
            <div className="container mx-auto px-6">
                <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
                    <h2 className="text-5xl md:text-8xl font-black font-display uppercase leading-[0.85] text-dark">
                        Our Best <br /> <span className="text-accent">Projects</span>
                    </h2>
                    <button className="gsap-btn btn--stroke py-4 px-10">
                        <span className="button__flair"></span>
                        <span className="button__label" onClick={() => handleNav('portfolio')}>View All Projects</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((p, i) => (
                        <div key={i} className="group relative overflow-hidden rounded-xl shadow-xl transition-all duration-700 hover:-translate-y-2 h-[500px] md:h-[650px]">
                            <img src={p.img} alt={p.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors"></div>

                            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex justify-between items-end">
                                <div className="text-white">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2">{p.category}</p>
                                    <h3 className="text-3xl md:text-4xl font-black font-display uppercase tracking-tight">{p.title}</h3>
                                </div>
                                <div className="w-16 h-16 rounded-full bg-white text-dark flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500">
                                    <ArrowUpRight size={32} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
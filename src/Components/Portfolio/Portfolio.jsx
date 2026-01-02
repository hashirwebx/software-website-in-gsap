import React, { useRef, useState } from 'react';
import { ArrowUpRight, X, ArrowRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LiquidButton from '../Styles/LiquidButton';
import { JumpingText } from '../JumpingText';

gsap.registerPlugin(ScrollTrigger);


const Portfolio = () => {
    const containerRef = useRef(null);
    const modalRef = useRef(null);
    const modalContentRef = useRef(null);
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "VANMOOF APP",
            category: "UX/UI Design",
            image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            description: "A complete redesign of the VanMoof e-bike companion app, focusing on seamless connectivity and intuitive ride tracking.",
            client: "VanMoof",
            year: "2024",
            span: "row-span-2 col-span-1"
        },
        {
            id: 2,
            title: "B-STATIONARY",
            category: "Branding",
            image: "https://images.unsplash.com/photo-1526597796581-efa2fc6087ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVuJTIwYW5kJTIwcGFwZXIlMjBzdGF0YWlvbmFyeXxlbnwwfHwwfHx8MA%3D%3D",
            description: "Visual identity system for a modern architecture firm, balancing brutalist aesthetics with digital fluidity.",
            client: "B-Studio",
            year: "2024",
            span: "row-span-1 col-span-1"
        },
        {
            id: 3,
            title: "YOUNG DESIGN '23",
            category: "Identity",
            image: "https://images.unsplash.com/photo-1710799885122-428e63eff691?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Official promotional campaign and poster series for the 2023 Young Design Festival in Milan.",
            client: "Milan Art Council",
            year: "2023",
            span: "row-span-1 col-span-1"
        },
        {
            id: 4,
            title: "NIKE AIR MAX",
            category: "E-Commerce",
            image: "https://images.unsplash.com/photo-1749392505295-b9a71f5d9b4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TklLRSUyMEFJUiUyME1BWCUyMEUtQ29tbWVyY2V8ZW58MHx8MHx8fDA%3D",
            description: "An immersive shopping experience for the latest Nike collection, featuring 3D product visualization.",
            client: "Nike Global",
            year: "2023",
            span: "row-span-1 col-span-1"
        },
        {
            id: 5,
            title: "DELICIA BOXES",
            category: "Product Design",
            image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            description: "Luxury chocolate packaging that uses tactile materials and holographic foils.",
            client: "Delicia De Ruma",
            year: "2024",
            span: "row-span-1 col-span-1"
        },
        {
            id: 6,
            title: "TOTE SERIES",
            category: "Packaging",
            image: "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            description: "Eco-conscious packaging and merchandise design for a sustainable fashion brand.",
            client: "EcoWear",
            year: "2023",
            span: "row-span-2 col-span-1"
        },
        {
            id: 7,
            title: "WEB ECOSYSTEM",
            category: "Web Design",
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            description: "A secure, lightning-fast financial dashboard designed for high-frequency traders.",
            client: "TechFlow",
            year: "2024",
            span: "row-span-1 col-span-1"
        },
        {
            id: 8,
            title: "CATALOGUE '24",
            category: "Print Design",
            image: "https://images.unsplash.com/photo-1549298222-1c31e8915347?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q0FUQUxPR1VFJTIwJzI0JTIwUHJpbnQlMjBEZXNpZ258ZW58MHx8MHx8fDA%3D",
            description: "Editorial layout and high-end printing for a luxury furniture brand's annual collection.",
            client: "Luxe Home",
            year: "2024",
            span: "row-span-2 col-span-1"
        },
        {
            id: 9,
            title: "FINTECH INTERFACE",
            category: "App Design",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            description: "Mobile-first banking experience focusing on accessibility and visual clarity.",
            client: "Nuvem Bank",
            year: "2024",
            span: "row-span-1 col-span-1"
        }
    ];

    useGSAP(() => {

        gsap.utils.toArray('.port-deco-shape img').forEach((img) => {
            gsap.to(img, {
                y: "random(-30, 30)",
                x: "random(-15, 15)",
                rotation: "random(-20, 20)",
                duration: "random(4, 7)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: Math.random() * 2
            });
        });

        gsap.utils.toArray('.port-deco-shape').forEach((shape, i) => {
            gsap.to(shape, {
                y: (i + 1) * 40,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });
        });

        gsap.from(".portfolio-grid-item", {
            opacity: 0,
            y: 100,
            stagger: 0.1,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".portfolio-grid-container",
                start: "top 90%"
            }
        });

    }, { scope: containerRef });

    const openModal = (project) => {
        setSelectedProject(project);
        gsap.to(modalRef.current, { display: 'flex', opacity: 1, duration: 0.4, ease: "power2.out" });
        gsap.fromTo(modalContentRef.current,
            { scale: 0.95, y: 50, opacity: 0 },
            { scale: 1, y: 0, opacity: 1, duration: 0.6, delay: 0.1, ease: "back.out(1.2)" }
        );
    };

    const closeModal = () => {
        gsap.to(modalContentRef.current, { scale: 0.95, y: 30, opacity: 0, duration: 0.3, ease: "power2.in" });
        gsap.to(modalRef.current, {
            opacity: 0, duration: 0.4, ease: "power2.in", onComplete: () => {
                setSelectedProject(null);
                gsap.set(modalRef.current, { display: 'none' });
            }
        });
    };

    const ProjectCard = ({ project }) => (
        <div className={`portfolio-grid-item group relative overflow-hidden cursor-pointer rounded-sm shadow-lg hover:shadow-2xl transition-all duration-500 bg-white ${project.span}`} onClick={() => openModal(project)}>
            <div className="w-full h-full relative overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-90"
                />

                <div className="absolute bottom-0 left-0 w-full flex translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-20">
                    <div className="flex-1 bg-[#2C2C2C] p-5 md:p-8 flex flex-col justify-center">
                        <h3 className="text-white text-2xl md:text-4xl font-black font-display uppercase tracking-tight leading-none mb-1">
                            {project.title}
                        </h3>
                        <p className="text-gray-400 text-[8px] font-bold uppercase tracking-[0.2em]">
                            {project.category}
                        </p>
                    </div>
                    <div className="bg-[#7F00FF] w-20 md:w-36 flex flex-col items-center justify-center p-4 transition-colors hover:bg-white hover:text-[#7F00FF] group/btn">
                        <ArrowUpRight size={36} className="mb-1 transition-transform group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2" />
                        <span className="text-[8px] font-black uppercase tracking-widest whitespace-nowrap">READ MORE</span>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div ref={containerRef} className="bg-customBg pt-32 md:pt-48 pb-32 relative overflow-hidden" id="portfolio-page">

            <div className="port-deco-shape absolute top-[5%] left-[2%] w-[15vw] max-w-[200px] z-0 opacity-60">
                <img src="https://spicaware.com/wp-content/uploads/2024/12/shapes-1.png" alt="" />
            </div>
            <div className="port-deco-shape absolute top-[2%] right-[5%] w-[18vw] max-w-[250px] z-0 opacity-60">
                <img src="https://spicaware.com/wp-content/uploads/2024/12/shapes-2.png" alt="" />
            </div>

            <div className="container mx-auto px-6 relative z-10">

                <div className="text-center mb-24 md:mb-40 flex flex-col items-center">
                    <h1 className="text-[14vw] md:text-[10vw] font-black font-display uppercase tracking-tighter text-dark leading-[0.8] relative">
                                                        <JumpingText
                                                            text="OUR BEST"
                                                            className="text-[9vw]"
                                                            hoverColor="hover:text-gray-400"
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ duration: 1 }} />
                                                    <span className="text-accent text-[8vw]">WORKS</span>
                    </h1>
                    <div className="port-deco-shape w-16 h-16 mt-[-30px] opacity-40">
                        <img src="https://spicaware.com/wp-content/uploads/2024/12/shapes-5.png" alt="" />
                    </div>
                </div>

                <div className="portfolio-grid-container grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[250px] md:auto-rows-[350px]">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                <div className="mt-32 text-center max-w-3xl mx-auto">
                    <p className="text-[12px] font-black uppercase tracking-[0.5em] text-gray-400 mb-8">Crafted with precision</p>
                    <p className="text-lg md:text-2xl font-bold text-gray-600 leading-relaxed italic">
                        "We take the time to understand your goals, audience, and vision — then tailor our approach to ensure your message connects meaningfully."
                    </p>
                </div>
            </div>

            <div
                ref={modalRef}
                className="fixed inset-0 z-[100] hidden items-center justify-center p-6 md:p-12 bg-dark/95 backdrop-blur-xl opacity-0"
                onClick={closeModal}
            >
                <button
                    className="absolute top-8 right-8 w-14 h-14 rounded-full bg-white/10 hover:bg-[#FF4081] text-white flex items-center justify-center transition-all duration-300 z-[110]"
                    onClick={(e) => { e.stopPropagation(); closeModal(); }}
                >
                    <X size={28} />
                </button>

                <div
                    ref={modalContentRef}
                    className="bg-white w-full max-w-6xl rounded-sm overflow-hidden flex flex-col md:flex-row shadow-2xl relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    {selectedProject && (
                        <>
                            <div className="md:w-1/2 h-[350px] md:h-auto overflow-hidden bg-dark">
                                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="md:w-1/2 p-8 md:p-20 flex flex-col justify-center bg-white">
                                <div className="flex items-center gap-3 mb-8">
                                    <span className="px-4 py-1.5 bg-[#FF4081] text-white rounded-full text-[9px] font-black tracking-widest uppercase">{selectedProject.category}</span>
                                    <span className="text-gray-300 text-[9px] font-black tracking-widest uppercase">{selectedProject.year}</span>
                                </div>
                                <h2 className="text-4xl md:text-7xl font-black font-display uppercase leading-none text-dark mb-8 tracking-tighter">
                                    {selectedProject.title}
                                </h2>
                                <div className="grid grid-cols-2 gap-8 mb-8 py-8 border-y border-gray-100">
                                    <div>
                                        <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Client</p>
                                        <p className="text-sm font-bold text-dark">{selectedProject.client}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Year</p>
                                        <p className="text-sm font-bold text-dark">{selectedProject.year}</p>
                                    </div>
                                </div>
                                <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-12">
                                    {selectedProject.description}
                                </p>
                                <LiquidButton variant="dark" className="self-start px-12 py-5" onClick={closeModal}>
                                    Launch Case Study <ArrowRight size={18} className="ml-2" />
                                </LiquidButton>
                            </div>
                        </>
                    )}
                </div>
            </div>

        </div>
    );
};

export default Portfolio;
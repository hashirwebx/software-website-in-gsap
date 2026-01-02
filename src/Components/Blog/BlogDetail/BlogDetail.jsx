import React, { useRef } from "react";
import {
   ArrowLeft,
   Calendar,
   Clock,
   Share2,
   Instagram,
   Twitter,
   ArrowRight,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LiquidButton from "../../Styles/LiquidButton";

gsap.registerPlugin(ScrollTrigger);

const BlogDetail = ({ post, onBack }) => {
   const containerRef = useRef(null);
   const progressRef = useRef(null);


   useGSAP(
      () => {
         // 1. Reading Progress Indicator
         gsap.to(progressRef.current, {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
               trigger: containerRef.current,
               start: "top top",
               end: "bottom bottom",
               scrub: true,
            },
         });

         // 2. Initial Entrance Animation
         const tl = gsap.timeline();

         tl.from(".detail-header-meta", {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: "power3.out",
            delay: 0.2,
         })
            .from(
               ".detail-title span",
               {
                  opacity: 0,
                  y: 60,
                  rotateX: -30,
                  stagger: 0.1,
                  duration: 1.2,
                  ease: "expo.out",
               },
               "-=0.6"
            )
            .fromTo(
               ".detail-hero-img-wrap",
               { clipPath: "inset(100% 0% 0% 0%)" },
               { clipPath: "inset(0% 0% 0% 0%)", duration: 1.8, ease: "expo.inOut" },
               "-=0.8"
            )
            .from(
               ".detail-hero-img",
               {
                  scale: 1.3,
                  duration: 2.5,
                  ease: "expo.out",
               },
               "<"
            );

      gsap.utils.toArray(".reveal-text").forEach((text) => {
            gsap.from(text, {
               y: 40,
               opacity: 0,
               duration: 1,
               ease: "power3.out",
               scrollTrigger: {
                  trigger: text,
                  start: "top 90%",
               },
            });
         });

         // 4. Parallax effect for decorative side elements
         gsap.to(".side-shape", {
            y: -100,
            scrollTrigger: {
               trigger: containerRef.current,
               start: "top bottom",
               end: "bottom top",
               scrub: 1,
            },
         });

         ScrollTrigger.refresh();
      },
      { scope: containerRef, dependencies: [post] }
   );

   return (
      <div ref={containerRef} className="bg-customBg pt-32 pb-40 relative">
         {/* Dynamic Progress Bar */}
         <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-dark/5">
            <div
               ref={progressRef}
               className="h-full bg-accent origin-left scale-x-0"
            ></div>
         </div>

         <div className="container mx-auto px-6 max-w-7xl">
            {/* Navigation Toolbar */}
            <div className="mb-20 flex items-center justify-between">
               <LiquidButton variant="stroke" onClick={onBack} className="px-6 py-3">
                  <ArrowLeft size={16} className="mr-2" /> Back to Journal
               </LiquidButton>
               <div className="flex gap-4 text-gray-400">
                  <Share2
                     size={18}
                     className="cursor-pointer hover:text-accent transition-colors"
                  />
                  <Instagram
                     size={18}
                     className="cursor-pointer hover:text-accent transition-colors"
                  />
                  <Twitter
                     size={18}
                     className="cursor-pointer hover:text-accent transition-colors"
                  />
               </div>
            </div>

            {/* Article Header */}
            <header className="mb-20">
               <div className="detail-header-meta flex items-center gap-6 mb-10">
                  <span className="bg-accent/10 text-accent px-5 py-1.5 rounded-full text-[9px] font-black tracking-widest uppercase">
                     {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-gray-400 text-[10px] font-bold tracking-widest uppercase">
                     <Calendar size={12} /> {post.date}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-[10px] font-bold tracking-widest uppercase">
                     <Clock size={12} /> {post.readTime}
                  </div>
               </div>

               <h1 className="detail-title text-5xl md:text-[8vw] font-black font-display uppercase leading-[0.9] tracking-tighter text-dark mb-12 flex flex-wrap">
                  {post.title.split(" ").map((word, i) => (
                     <span key={i} className="inline-block mr-4">
                        {word}
                     </span>
                  ))}
               </h1>

               <p className="reveal-text text-lg md:text-2xl text-gray-500 font-medium leading-relaxed max-w-3xl italic">
                  "{post.excerpt}"
               </p>
            </header>

            {/* Featured Cinematic Image */}
            <div className="detail-hero-img-wrap relative w-full h-[50vh] md:h-[80vh] rounded-sm overflow-hidden mb-32 shadow-2xl bg-dark">
               <img
                  src={post.image}
                  alt={post.title}
                  className="detail-hero-img w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
               />
               <div className="absolute inset-0 bg-dark/10"></div>
            </div>

            {/* Main Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
               {/* Sidebar Info */}
               <aside className="lg:col-span-3 sticky top-40 h-fit">
                  <div className="space-y-16">
                     <div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-dark mb-6">
                           Published By
                        </h4>
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                              <img
                                 src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                                 alt="Author"
                                 className="w-full h-full object-cover"
                              />
                           </div>
                           <div>
                              <p className="text-xs font-bold text-dark uppercase">
                                 {/* cSpell:disable-next-line */}Spicaware Team
                              </p>
                              <p className="text-[10px] text-gray-400 uppercase">
                                 Creative Agency
                              </p>
                           </div>
                        </div>
                     </div>

                     <div className="side-shape w-24 h-24 opacity-20 pointer-events-none">
                        <img
                           src="https://spicaware.com/wp-content/uploads/2024/12/shapes-5.png"
                           alt="Decoration"
                        />
                     </div>

                     <div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-dark mb-6">
                           Article Tags
                        </h4>
                        <div className="flex flex-wrap gap-2">
                           {["Creative", "Agency", "Modern", "Digital"].map((tag) => (
                              <span
                                 key={tag}
                                 className="text-[9px] font-bold text-gray-400 border border-dark/5 px-3 py-1 rounded-sm uppercase tracking-widest"
                              >
                                 #{tag}
                              </span>
                           ))}
                        </div>
                     </div>
                  </div>
               </aside>

               {/* Core Article Body */}
               <article className="lg:col-span-8 lg:col-start-5 prose prose-invert prose-xl">
                  <div className="reveal-text space-y-12">
                     <p className="text-xl md:text-2xl text-gray-600 leading-relaxed first-letter:text-6xl first-letter:font-black first-letter:text-accent first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                        {post.content}
                     </p>

                     <div className="reveal-text grid grid-cols-2 gap-8 my-20">
                        <div className="h-64 rounded-sm overflow-hidden bg-gray-100">
                           <img
                              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                              className="w-full h-full object-cover grayscale"
                              alt="Workspace"
                           />
                        </div>
                        <div className="h-64 rounded-sm overflow-hidden bg-gray-100 mt-12">
                           <img
                              src="https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                              className="w-full h-full object-cover grayscale"
                              alt="Collaboration"
                           />
                        </div>
                     </div>

                     <h3 className="text-3xl font-black font-display uppercase text-dark mb-8">
                        Elevating Digital Standards
                     </h3>
                     <p className="text-gray-500 leading-loose">
                        At Spicaware, we believe that every pixel tells a story. Our
                        approach to {post.category.toLowerCase()} combines technical
                        expertise with a deep understanding of human psychology. We
                        don't just build websites or brands; we create digital
                        ecosystems where users feel empowered and connected.
                        <br />
                        <br />
                        As we navigate through 2025, the boundary between physical and
                        digital continues to blur. Our mission remains clear: to help
                        our clients navigate this complexity with confidence,
                        creativity, and unconventional aesthetics.
                     </p>

                     {/* Pull Quote */}
                     <div className="my-24 p-12 bg-dark rounded-xl relative overflow-hidden group">
                        <div className="relative z-10">
                           <h4 className="text-xs font-black uppercase tracking-widest text-accent mb-6">
                              Key Insight
                           </h4>
                           <p className="text-2xl md:text-4xl font-bold text-white leading-tight">
                              Innovation is not about adding more; it's about removing the
                              unnecessary until only the{" "}
                              <span className="text-accent italic">essential</span>{" "}
                              remains.
                           </p>
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                     </div>
                  </div>
               </article>
            </div>

            {/* Footer Navigation CTA */}
            <section className="mt-40 pt-20 border-t border-dark/10">
               <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-12">
                  Up Next
               </p>
               <div className="group cursor-pointer max-w-4xl" onClick={onBack}>
                  <h2 className="text-4xl md:text-7xl font-black font-display uppercase leading-[0.9] text-dark group-hover:text-accent transition-colors duration-500">
                     EXPLORE OUR LATEST{" "}
                     <span
                        className="text-transparent"
                        style={{ WebkitTextStroke: "1px #141414" }}
                     >
                        PORTFOLIO
                     </span>
                  </h2>
                  <div className="flex items-center gap-6 mt-12 text-dark font-black uppercase tracking-widest text-xs group-hover:translate-x-4 transition-transform duration-500">
                     View Case Studies <ArrowRight size={18} className="text-accent" />
                  </div>
               </div>
            </section>
         </div>
      </div>
   );
};

export default BlogDetail;

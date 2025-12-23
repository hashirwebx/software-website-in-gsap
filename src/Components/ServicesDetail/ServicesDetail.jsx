import React, { useRef } from 'react';
import { Triangle, LayoutTemplate, Crosshair, Plus } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Styles/Styles.css'
import { JumpingText } from '../JumpingText';
gsap.registerPlugin(ScrollTrigger);

const ServiceDetail = () => {
   const containerRef = useRef(null);

   useGSAP(() => {
      gsap.utils.toArray('.detail-shape img').forEach((img: any) => {
         gsap.to(img, {
            y: "random(-25, 25)",
            x: "random(-15, 15)",
            rotation: "random(-10, 10)",
            duration: "random(4, 7)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: Math.random() * 2
         });
      });

      gsap.utils.toArray('.detail-shape').forEach((shape: any, i: number) => {
         gsap.to(shape, {
            y: (i + 1) * 50,
            ease: "none",
            scrollTrigger: {
               trigger: containerRef.current,
               start: "top bottom",
               end: "bottom top",
               scrub: 1
            }
         });
      });

      const revealImages = gsap.utils.toArray('.reveal-img-detail');
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
               { scale: 1.4, filter: 'grayscale(100%)' },
               { scale: 1, filter: 'grayscale(0%)', duration: 2.5, ease: "expo.out" },
               0
            );
         }
      });
      gsap.from(".geo-icon", {
         scale: 0,
         opacity: 0,
         duration: 1,
         stagger: 0.2,
         ease: "back.out(1.7)",
         scrollTrigger: {
            trigger: ".icon-grid",
            start: "top 80%"
         }
      });


      gsap.from(".portfolio-header", {
         y: 100,
         opacity: 0,
         duration: 1,
         scrollTrigger: {
            trigger: "#dark-portfolio",
            start: "top 70%"
         }
      });

   }, { scope: containerRef });

   return (
      <div ref={containerRef} className="bg-customBg min-h-screen pt-32 overflow-hidden">
         <section className="container mx-auto px-6 text-center mb-16 relative pt-12">
            <div className="detail-shape absolute top-0 left-[5%] w-48 h-48 opacity-40 pointer-events-none z-0">
               <img src="https://spicaware.com/wp-content/uploads/2024/12/shapes-1.png" alt="" className="w-full h-auto" />
            </div>
            <div className="detail-shape absolute top-20 right-[5%] w-64 h-64 opacity-30 pointer-events-none z-0">
               <img src="https://spicaware.com/wp-content/uploads/2024/12/shapes-3.png" alt="" className="w-full h-auto" />
            </div>
            <div className="detail-shape absolute -bottom-20 left-[20%] w-32 h-32 opacity-20 pointer-events-none z-0">
               <img src="https://spicaware.com/wp-content/uploads/2024/12/shapes-5.png" alt="" className="w-full h-auto" />
            </div>
            <div className="absolute top-0 left-10 hidden lg:block opacity-50">
               <div className="w-24 h-24 border-8 border-gray-300 rounded-full animate-bounce"></div>
            </div>
            <div className="absolute top-10 right-20 hidden lg:block opacity-40">
               <div className="w-32 h-32 bg-green-200 rounded-full mix-blend-multiply blur-xl"></div>
            </div>

            <div className="relative z-10">
               <h1 className="blog-title text-[8vw] md:text-[8vw] leading-[1] font-black font-display uppercase text-dark tracking-tight mb-8">
                  
                     <JumpingText
                        text="Web development"
                        hoverColor=""
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }} />
                  
               </h1>

               <div className="max-w-4xl mx-auto fade-in-up">
                  <h2 className="text-2xl md:text-3xl font-black font-display uppercase leading-tight text-gray-800">
                     <span className="text-[#FF4081]">Website Development</span> is the art of combining functionality with aesthetics — creating digital experiences that inspire, engage, and drive results.
                  </h2>
               </div>
            </div>
         </section>

         {/* --- ICONS GRID --- */}
         <section className="container mx-auto px-6 mb-32 icon-grid">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

               {/* Item 1 */}
               <div className="flex flex-col items-center group">
                  <div className="w-32 h-32 mb-8 relative flex items-center justify-center">
                     <div className="geo-icon w-full h-full border border-gray-400 rotate-45 group-hover:border-dark transition-colors duration-500"></div>
                     <Triangle strokeWidth={1} size={48} className="absolute text-gray-600 group-hover:text-dark transition-colors" />
                     <div className="absolute top-0 w-[1px] h-12 bg-gray-400 -mt-12"></div>
                  </div>
                  <h3 className="text-xl font-black font-display uppercase mb-4 text-gray-600 group-hover:text-dark transition-colors">Expert Team</h3>
                  <p className="text-xs text-gray-400 max-w-[200px] leading-relaxed">
                     Delivering cutting-edge web solutions with creativity and precision.
                  </p>
               </div>

               <div className="flex flex-col items-center group">
                  <div className="w-32 h-32 mb-8 relative flex items-center justify-center">
                     <div className="geo-icon w-full h-full border border-gray-400 group-hover:border-dark transition-colors duration-500"></div>
                     <LayoutTemplate strokeWidth={1} size={48} className="absolute text-gray-600 group-hover:text-dark transition-colors" />
                     <div className="absolute top-0 w-24 h-[1px] bg-gray-400 -mt-8"></div>
                  </div>
                  <h3 className="text-xl font-black font-display uppercase mb-4 text-gray-600 group-hover:text-dark transition-colors">Innovative Solutions</h3>
                  <p className="text-xs text-gray-400 max-w-[200px] leading-relaxed">
                     Crafting responsive, scalable websites that elevate your brand presence.
                  </p>
               </div>

               <div className="flex flex-col items-center group">
                  <div className="w-32 h-32 mb-8 relative flex items-center justify-center">
                     <div className="geo-icon w-full h-full rounded-full border border-gray-400 group-hover:border-dark transition-colors duration-500"></div>
                     <Crosshair strokeWidth={1} size={48} className="absolute text-gray-600 group-hover:text-dark transition-colors" />
                     <div className="absolute top-0 left-1/2 w-[1px] h-8 bg-gray-400 -mt-8 -ml-[1px]"></div>
                     <div className="absolute top-0 right-1/2 w-[1px] h-8 bg-gray-400 -mt-8 rotate-45 origin-bottom"></div>
                  </div>
                  <h3 className="text-xl font-black font-display uppercase mb-4 text-gray-600 group-hover:text-dark transition-colors">Client Focus</h3>
                  <p className="text-xs text-gray-400 max-w-[200px] leading-relaxed">
                     Tailoring each project to meet your unique goals and ensure maximum ROI.
                  </p>
               </div>

            </div>
         </section>

         <section className="bg-customBg py-24">
            <div className="container mx-auto px-6">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                  <div className="flex flex-col justify-between">
                     <div className="fade-in-up">
                        <p className="text-sm text-gray-500 leading-loose mb-12 text-justify">
                           Space — it's the heartbeat of your brand. Our team of developers and designers work together to deliver high-performing websites that are visually captivating, easy to navigate, and optimized for all devices.
                           <br /><br />
                           We follow a comprehensive development process that includes research, strategy, design, development, testing, and deployment, ensuring your website not only looks great but also performs seamlessly and achieves your business objectives.
                        </p>
                     </div>

                     <div className="flex items-center gap-4 mb-16 fade-in-up">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
                           <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Avatar" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-xs">
                           <p><span className="font-bold text-dark">Passionately Creating</span> <span className="text-gray-500">Design Wonders:</span></p>
                           <p><span className="font-bold text-dark">Unleashing</span> <span className="text-gray-500">Boundless Creativity</span></p>
                        </div>
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white text-[10px]">||</div>
                     </div>

                     <div className="relative fade-in-up">
                        <div className="w-full h-40 bg-gray-200/50 absolute bottom-4 left-4 -z-10 rounded-sm"></div>
                        <div className="flex items-baseline">
                           <span className="text-[8rem] md:text-[10rem] font-black text-gray-600 font-display leading-[0.8]">257</span>
                           <Plus className="text-[#FF4081] w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-8" strokeWidth={4} />
                        </div>
                        <p className="font-black text-gray-400 uppercase tracking-widest text-lg ml-2">Completed Projects</p>
                     </div>
                  </div>

                  <div className="space-y-16 pt-12 fade-in-up">
                     <div className="group">
                        <h3 className="text-2xl md:text-3xl font-black font-display uppercase mb-6 text-gray-400 group-hover:text-accent transition-colors">
                           <span className="text-accent">01.</span> Strategy & Architecture
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed pl-2 border-l-2 border-gray-200 group-hover:border-accent transition-colors">
                           We begin by mapping out the user journey and site architecture. Every click is planned to lead your customers toward their goals, ensuring the logic is as beautiful as the design.
                        </p>
                     </div>

                     <div className="space-y-16">
                        <div className="group">
                           <h3 className="text-2xl md:text-3xl font-black font-display uppercase mb-6 text-gray-400 group-hover:text-dark transition-colors">
                              <span className="text-[#FF4081]">02.</span> Design & Prototyping
                           </h3>
                           <p className="text-sm text-gray-500 leading-relaxed pl-2 border-l-2 border-gray-300 group-hover:border-[#FF4081] transition-colors">
                              In this stage, we transform ideas into visual concepts and prototypes. Our designers craft intuitive layouts, engaging visuals, and user-friendly interfaces aligned with your brand identity. Interactive mockups help you visualize your future website before we move to full development.
                           </p>
                        </div>

                        <div className="group">
                           <h3 className="text-2xl md:text-3xl font-black font-display uppercase mb-6 text-gray-400 group-hover:text-dark transition-colors">
                              <span className="text-[#FF4081]">03.</span> Development & Integration
                           </h3>
                           <p className="text-sm text-gray-500 leading-relaxed pl-2 border-l-2 border-gray-300 group-hover:border-[#FF4081] transition-colors">
                              Once the design is finalized, our development team brings it to life using the latest technologies. Whether it's WordPress, Shopify, or a custom-built solution, we ensure fast-loading, secure, and SEO-friendly websites. We also integrate third-party tools, APIs, and CMS systems to enhance functionality.
                           </p>
                        </div>

                        <div className="group">
                           <h3 className="text-2xl md:text-3xl font-black font-display uppercase mb-6 text-gray-400 group-hover:text-dark transition-colors">
                              <span className="text-[#FF4081]">04.</span> Testing & Launch
                           </h3>
                           <p className="text-sm text-gray-500 leading-relaxed pl-2 border-l-2 border-gray-300 group-hover:border-[#FF4081] transition-colors">
                              Before going live, we conduct thorough testing to ensure flawless performance across all devices and browsers. Every element — from forms to navigation — is refined for smooth functionality. After launch, we provide ongoing support and maintenance to keep your site running perfectly.
                           </p>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </section>

         <section id="dark-portfolio" className="bg-dark text-white py-32 overflow-hidden relative">
            <div className="container mx-auto px-6 relative z-10">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                  <div className="portfolio-header">
                     <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-8">Portfolio</p>
                     <h2 className="text-6xl md:text-8xl font-black font-display uppercase leading-[0.85] mb-12">
                        Explore Our <span className="text-accent">Portfolio</span> And Get <span className="text-gray-400">Inspired</span>
                     </h2>
                     <button className="border border-white hover:bg-white hover:text-dark text-white px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest transition-all">
                        View Portfolio
                     </button>
                  </div>

                  <div className="relative h-[600px] w-full">
                     <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gray-800 rotate-6 rounded-lg overflow-hidden shadow-2xl z-0 opacity-50"></div>
                     <div className="absolute top-10 right-10 w-3/4 h-3/4 bg-gray-200 rounded-lg overflow-hidden shadow-2xl z-10 hover:scale-105 transition-transform duration-700">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" className="w-full h-full object-cover" alt="Portfolio 1" />
                     </div>
                     <div className="absolute bottom-20 left-0 w-40 h-40 bg-gray-100 rounded-lg shadow-xl z-20 overflow-hidden hover:scale-110 transition-transform">
                        <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Detail" />
                     </div>
                  </div>
               </div>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1A1A1A] skew-x-12 -z-0 hidden lg:block"></div>
         </section>

      </div>
   );
};

export default ServiceDetail;
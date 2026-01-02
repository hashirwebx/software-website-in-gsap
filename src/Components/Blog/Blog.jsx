
import React, { useRef, useState, useEffect } from 'react';
import { ArrowUpRight, ArrowRight, Calendar, User } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Blog = ({ onPostSelect }) => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All Posts");

  const categories = ["All Posts", "Design", "Marketing", "Branding", "Technology", "Agency Life"];

  const allPosts = [
    {
      id: 1,
      category: "DESIGN",
      date: "JAN 12, 2025",
      title: "THE FUTURE OF MINIMALISM IN DIGITAL INTERFACES",
      excerpt: "Exploring how less is becoming more in the age of rapid AI integration and voice-first UX design principles.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      readTime: "5 MIN READ",
      content: "Minimalism in digital design is undergoing a massive transformation. We are moving beyond the flat, sterile environments of the 2010s into a era of 'New Minimalism' where white space is balanced with rich, interactive elements and organic motion. The rise of AI-driven interfaces means users expect more intuitive, less cluttered experiences that anticipate their needs before they even ask."
    },
    {
      id: 2,
      category: "MARKETING",
      date: "JAN 08, 2025",
      title: "EMOTIONAL BRANDING: CONNECTING THROUGH CODE",
      excerpt: "Why modern brands are ditching corporate personas for high-fidelity human interactions and raw storytelling.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      readTime: "8 MIN READ",
      content: "Brands today are no longer just logos on a screen; they are living, breathing digital entities. Emotional branding is about creating a resonant connection with the user through every touchpoint. This article explores how Spicaware uses micro-interactions and personalized digital journeys to foster deep loyalty in a crowded marketplace."
    },
    {
      id: 3,
      category: "BRANDING",
      date: "JAN 05, 2025",
      title: "REIMAGINING IDENTITY IN THE METAVERSE",
      excerpt: "A deep dive into how digital-first agencies are creating responsive brand systems for spatial computing.",
      image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      readTime: "12 MIN READ",
      content: "As spatial computing becomes a reality, brand identities must evolve from 2D static assets into 3D immersive experiences. We explore the challenges and opportunities for brands looking to establish a presence in virtual environments, from 3D typography to spatial sound branding."
    },
    {
      id: 4,
      category: "TECHNOLOGY",
      date: "JAN 02, 2025",
      title: "GSAP & WEBGL: THE NEXT FRONTIER OF INTERACTIVE WEB",
      excerpt: "Mastering the art of performance-driven animations to create cinematic experiences on the browser.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      readTime: "10 MIN READ",
      content: "Performance is the ultimate feature. By combining the power of GSAP for orchestrating animations with the rendering capabilities of WebGL, we can create web experiences that were previously thought impossible. Learn the secrets behind high-performance animations that don't compromise on visual fidelity."
    },
    {
      id: 5,
      category: "AGENCY LIFE",
      date: "DEC 28, 2024",
      title: "LIFE AT SPICAWARE: THE CULTURE OF CREATIVITY",
      excerpt: "Inside the walls of our Islamabad studio, where coffee meets code and pixels meet passion.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      readTime: "7 MIN READ",
      content: "What makes a creative studio tick? At Spicaware, it's a mix of radical transparency, constant experimentation, and a shared obsession with perfection. Join us for a day in the life of our Islamabad-based team as we tackle complex problems with simple, elegant solutions."
    },
    {
      id: 6,
      category: "DESIGN",
      date: "DEC 20, 2024",
      title: "TYPOGRAPHY AS A BRAND'S VOICE",
      excerpt: "How choosing the right font can change the entire emotional perception of your digital product.",
      image: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      readTime: "6 MIN READ",
      content: "Typography is often an afterthought, but it's the foundation of effective communication. The right typeface conveys authority, playfulness, or innovation before a single word is read. We analyze recent brand redesigns and the typographic choices that defined them."
    }
  ];

  const filteredPosts = activeCategory === "All Posts"
    ? allPosts
    : allPosts.filter(post => post.category.toLowerCase() === activeCategory.toLowerCase());

  useGSAP(() => {
    gsap.utils.toArray('.blog-deco-shape img').forEach((img: any) => {
      gsap.to(img, {
        y: "random(-30, 30)",
        x: "random(-15, 15)",
        rotation: "random(-15, 15)",
        duration: "random(4, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 2
      });
    });

    gsap.utils.toArray('.blog-deco-shape').forEach((shape: any, i: number) => {
      gsap.to(shape, {
        y: (i + 1) * 60,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    });

    gsap.from(".blog-hero-text span", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: "power4.out",
      delay: 0.2
    });

    ScrollTrigger.refresh();
  }, { scope: containerRef });

  useEffect(() => {
    const revealImages = gsap.utils.toArray('.blog-reveal-img');
    revealImages.forEach((imgWrapper: any) => {
      const img = imgWrapper.querySelector('img');
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: imgWrapper,
          start: "top 90%",
        }
      });

      tl.fromTo(imgWrapper,
        { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
        { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, duration: 1.5, ease: "expo.inOut" }
      );

      if (img) {
        tl.fromTo(img, { scale: 1.4 }, { scale: 1, duration: 2.5, ease: "expo.out" }, 0);
      }
    });

    ScrollTrigger.refresh();
  }, [filteredPosts]);

  return (
    <div ref={containerRef} className="bg-customBg pt-32 md:pt-48 relative overflow-hidden">
      <div className="blog-deco-shape absolute top-[5%] left-[-5%] w-[30vw] opacity-30 pointer-events-none">
        <img src="https://spicaware.com/wp-content/uploads/2024/12/shapes-1.png" alt="" />
      </div>
      <div className="blog-deco-shape absolute top-[10%] right-[-8%] w-[35vw] opacity-40 pointer-events-none">
        <img src="https://spicaware.com/wp-content/uploads/2024/12/shapes-3.png" alt="" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400 mb-8">Spicaware Insights</p>
          <h1 className="blog-hero-text text-[14vw] md:text-[11vw] font-black font-display uppercase tracking-tighter leading-[0.85] text-dark flex flex-col">
            <span>THE</span>
            <span className="text-[#FF4081]">JOURNAL</span>
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-10 mb-32 border-y border-dark/5 py-8">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(cat)}
              className={`text-[11px] font-black uppercase tracking-[0.2em] transition-colors relative group py-2 px-1 ${activeCategory === cat ? 'text-accent' : 'text-dark/40 hover:text-accent'}`}
            >
              {cat}
              <span className={`absolute -bottom-0 left-0 h-[2px] bg-accent transition-all ${activeCategory === cat ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
          ))}
        </div>

        {activeCategory === "All Posts" && (
          <section className="featured-post grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-56">
            <div
              onClick={() => onPostSelect(allPosts[0])}
              className="lg:col-span-7 blog-reveal-img h-[500px] md:h-[700px] rounded-sm overflow-hidden shadow-2xl bg-dark cursor-pointer group"
            >
              <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" alt="Featured Post" />
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center featured-content md:pl-12">
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-accent text-white px-5 py-1.5 rounded-full text-[9px] font-black tracking-widest uppercase">Editor's Pick</span>
                <span className="text-gray-400 text-[9px] font-black tracking-widest uppercase">JAN 15, 2025</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black font-display uppercase leading-[1.05] text-dark mb-10 tracking-tight cursor-pointer hover:text-accent transition-colors" onClick={() => onPostSelect(allPosts[0])}>
                THE ART OF <span className="text-[#B399FF]">VISUAL</span> STORYTELLING IN 2025.
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-12 max-w-md">
                Discover how Spicaware bridges the gap between raw data and emotional connection through unconventional digital aesthetics.
              </p>
              <button className="btn bg-dark text-white self-start px-12 py-5 shadow-xl" onClick={() => onPostSelect(allPosts[0])}>
                <span className="button__flair"></span>
                <span className="button__label">Read Full Story <ArrowRight size={16} /></span>
              </button>
            </div>
          </section>
        )}

        <div className="mb-40">
          <div className="flex items-baseline justify-between mb-20 border-b border-dark/10 pb-6">
            <h3 className="text-3xl md:text-5xl font-black font-display uppercase text-dark">
              {activeCategory === "All Posts" ? "LATEST" : activeCategory} <span className="text-[#FF4081]">ARTICLES</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 md:gap-24">
            {filteredPosts.map((post, i) => (
              <div key={`${activeCategory}-${i}`} className="group cursor-pointer" onClick={() => onPostSelect(post)}>
                <div className="blog-reveal-img relative h-[400px] md:h-[550px] rounded-sm overflow-hidden shadow-xl bg-white mb-10">
                  <img src={post.image} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" alt={post.title} />
                  <div className="absolute inset-0 bg-dark/5"></div>
                  <div className="absolute top-8 left-8 flex flex-col gap-2">
                    <span className="bg-white text-dark px-4 py-1.5 rounded-sm text-[8px] font-black tracking-widest uppercase shadow-sm">{post.category}</span>
                    <span className="bg-dark text-white px-4 py-1.5 rounded-sm text-[8px] font-black tracking-widest uppercase shadow-sm">{post.readTime}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-6 text-gray-400 text-[10px] font-bold tracking-widest uppercase">
                  <Calendar size={12} className="text-accent" /> {post.date}
                  <span className="w-8 h-[1px] bg-dark/10"></span>
                  <User size={12} className="text-accent" /> BY SPICAWARE
                </div>
                <h4 className="text-2xl md:text-4xl font-black font-display uppercase leading-tight text-dark mb-6 group-hover:text-accent transition-colors">
                  {post.title}
                </h4>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-10 max-w-lg">
                  {post.excerpt}
                </p>
                <button className="btn btn--stroke px-10 py-4 text-[10px]">
                  <span className="button__flair"></span>
                  <span className="button__label">Read More <ArrowUpRight size={14} /></span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

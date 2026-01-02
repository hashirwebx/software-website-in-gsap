import React, { useRef } from 'react';
import { Phone, MessageSquare, MapPin } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { JumpingText } from '../JumpingText';
const ContactPage = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        // Animate hero text
        gsap.from(".contact-hero-text", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out"
        });

        // Animate icons
        gsap.from(".contact-icon", {
            scale: 0,
            opacity: 0,
            duration: 0.8,
            delay: 0.5,
            stagger: 0.2,
            ease: "back.out(1.7)"
        });

        // Organic Floating animation for 3D shapes
        gsap.utils.toArray('.shape-float img').forEach((img) => {
            gsap.to(img, {
                y: "random(-15, 15)",
                x: "random(-10, 10)",
                rotation: "random(-15, 15)",
                duration: "random(4, 6)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: Math.random() * 2
            });
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="bg-customBg pt-32 pb-0 relative overflow-hidden">

            {/* Branded Abstract Shapes - Wrapped for organic bobbing */}
            <div className="shape-float absolute -top-10 -left-10 w-64 h-64 z-0 opacity-40">
                <img
                    src="https://spicaware.com/wp-content/uploads/2024/12/shapes-1.png"
                    className="w-full h-full object-contain"
                    alt=""
                />
            </div>
            <div className="shape-float absolute top-20 right-[15%] w-48 h-48 z-0 opacity-30">
                <img
                    src="https://spicaware.com/wp-content/uploads/2024/12/shapes-3.png"
                    className="w-full h-full object-contain"
                    alt=""
                />
            </div>
            <div className="shape-float absolute top-[40%] -right-20 w-80 h-80 z-0 opacity-40">
                <img
                    src="https://spicaware.com/wp-content/uploads/2024/12/shapes-2.png"
                    className="w-full h-full object-contain"
                    alt=""
                />
            </div>

            {/* Hero Section */}
            <div className="container mx-auto px-6 text-center relative z-10 mb-24">
                <h1 className="contact-hero-text text-6xl md:text-8xl lg:text-9xl font-black font-display uppercase leading-none tracking-tight text-dark mb-4">
                    
                    <h1 className="about-text about-text font-black text-dark tracking-tighter uppercase flex justify-center">
                        <JumpingText
                            text="Get In"
                            hoverColor="hover:text-gray-400"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }} />
                    </h1>
                    <span className="text-accent">Touch</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 max-w-5xl mx-auto">
                    <div className="contact-icon flex flex-col items-center">
                        <div className="w-24 h-24 bg-dark rounded-3xl flex items-center justify-center mb-6 shadow-lg text-white">
                            <Phone size={40} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-black font-display uppercase mb-2 text-dark">Call</h3>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Office: +923180593242</p>
                    </div>

                    <div className="contact-icon flex flex-col items-center">
                        <div className="w-24 h-24 bg-accent rounded-3xl flex items-center justify-center mb-6 shadow-lg text-white">
                            <MessageSquare size={40} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-black font-display uppercase mb-2 text-dark">Write</h3>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">spicaware@gmail.com</p>
                    </div>

                    <div className="contact-icon flex flex-col items-center">
                        <div className="w-24 h-24 bg-dark rounded-3xl flex items-center justify-center mb-6 shadow-lg text-white">
                            <MapPin size={40} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-black font-display uppercase mb-2 text-dark">Visit</h3>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 text-center max-w-xs">
                            Office # 28, 1st Floor, Al-Rehmat Mall, Markaz, G-11, Islamabad, 45200
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-dark text-white relative">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <img
                        src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
                        className="w-full h-full object-cover"
                        alt=""
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
                    <div className="p-12 md:p-24 flex flex-col justify-center">
                        <h2 className="text-5xl md:text-7xl font-black font-display uppercase mb-12">
                            Let's <span className="text-accent">Talk</span>
                        </h2>

                        <form className="space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="relative">
                                    <input type="text" placeholder="WHAT'S YOUR NAME" className="w-full bg-transparent border-b border-gray-700 py-4 text-xs font-bold tracking-widest focus:outline-none focus:border-accent transition-colors placeholder:text-gray-500" />
                                </div>
                                <div className="relative">
                                    <input type="email" placeholder="YOUR EMAIL" className="w-full bg-transparent border-b border-gray-700 py-4 text-xs font-bold tracking-widest focus:outline-none focus:border-accent transition-colors placeholder:text-gray-500" />
                                </div>
                            </div>

                            <div className="relative">
                                <textarea placeholder="TELL US ABOUT YOUR PROJECT" rows={4} className="w-full bg-transparent border-b border-gray-700 py-4 text-xs font-bold tracking-widest focus:outline-none focus:border-accent transition-colors placeholder:text-gray-500 resize-none"></textarea>
                            </div>

                            <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-4">
                                <p className="text-[10px] text-gray-500 max-w-xs">
                                    * We promise not to disclose your personal information to third parties.
                                </p>
                                <button className="bg-accent hover:bg-white hover:text-accent text-white px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest shadow-lg hover:shadow-xl transition-all w-full md:w-auto">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="relative min-h-[500px] lg:min-h-full bg-gray-800">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.527376375044!2d72.98925231520637!3d33.72111198069695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbe38b43f01b3%3A0xcb12543310009c95!2sG-11%20Markaz%20G%2011%20Markaz%20G-11%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory!5e0!3m2!1sen!2s!4v1625123456789!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            title="Spicaware Office Location - G-11 Markaz, Islamabad"
                            className="absolute inset-0 grayscale opacity-80 hover:opacity-100 transition-opacity"
                        ></iframe>
                        <div className="absolute top-8 left-8 bg-white p-4 rounded shadow-lg max-w-xs text-dark">
                            <h4 className="font-bold text-sm">G-11 Markaz</h4>
                            <p className="text-xs text-gray-500 mt-1">Islamabad, Pakistan</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#EAEAEA] py-12 text-center relative z-0">
                <div className="container mx-auto px-6">
                    <p className="text-[10px] text-gray-400 max-w-md mx-auto leading-relaxed">
                        By clicking the submit button, you agree to the <span className="text-accent">rules for processing personal data.</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;

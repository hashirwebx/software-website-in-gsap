import React from 'react';
import { ArrowRight } from 'lucide-react';

const Newsletter = () => {
    return (
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto px-6">
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 min-h-[400px] relative bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80)' }}>
                        <div className="absolute inset-0 bg-accent/60 mix-blend-multiply"></div>
                        <div className="absolute inset-0 p-12 flex flex-col justify-center">
                            <h2 className="text-5xl md:text-7xl font-display font-black text-white uppercase leading-none mb-4">
                                We Are<br />
                                <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Creative Digital</span><br />
                                Marketing<br />
                                Agency
                            </h2>
                        </div>
                    </div>

                    <div className="lg:w-1/2 p-12 md:p-20 bg-gray-100 flex flex-col justify-center">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Newsletter</h4>
                        <h2 className="text-4xl md:text-6xl font-black uppercase text-gray-300 mb-2 font-display">
                            Subscribe <span className="text-purple-200">Our</span>
                        </h2>
                        <h2 className="text-4xl md:text-6xl font-black uppercase text-gray-300 mb-12 font-display">
                            Newsletter
                        </h2>

                        <form className="relative w-full max-w-md">
                            <input
                                type="email"
                                placeholder="ENTER YOUR EMAIL"
                                className="w-full bg-white px-8 py-5 rounded-full text-xs font-bold tracking-widest focus:outline-none focus:ring-2 focus:ring-accent shadow-sm text-dark placeholder:text-gray-400"
                            />
                            <button className="absolute right-2 top-2 bottom-2 w-12 h-12 bg-orange-400 hover:bg-orange-500 rounded-full flex items-center justify-center text-white transition-colors">
                                <ArrowRight size={20} />
                            </button>
                        </form>

                        <p className="mt-8 text-xs text-gray-400 max-w-xs leading-relaxed">
                            By clicking the submit button, you agree to the rules for processing personal data.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Newsletter;
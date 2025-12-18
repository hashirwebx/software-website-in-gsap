
const Footer = ({ simple = false }) => {
    return (
        <>
            <div id="contact" className="bg-dark text-white pt-24 pb-8 border-t border-gray-800">
                <div className="container mx-auto px-6">
                    {!simple && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                            <div>
                                <h2 className="text-6xl md:text-8xl font-black font-display uppercase mb-12">
                                    Let's <span className="text-accent">Talk</span>
                                </h2>

                                <form className="space-y-8 max-w-lg">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="group">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block group-focus-within:text-accent transition-colors">What's Your Name</label>
                                            <input type="text" className="w-full bg-transparent border-b border-gray-700 py-2 focus:outline-none focus:border-accent text-white transition-colors" />
                                        </div>
                                        <div className="group">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block group-focus-within:text-accent transition-colors">Your Email</label>
                                            <input type="email" className="w-full bg-transparent border-b border-gray-700 py-2 focus:outline-none focus:border-accent text-white transition-colors" />
                                        </div>
                                    </div>

                                    <div className="group">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block group-focus-within:text-accent transition-colors">Tell Us About Your Project</label>
                                        <textarea rows={4} className="w-full bg-transparent border-b border-gray-700 py-2 focus:outline-none focus:border-accent text-white transition-colors resize-none"></textarea>
                                    </div>

                                    <div className="flex justify-between items-center pt-8">
                                        <p className="text-[10px] text-gray-600 max-w-[200px]">
                                            * We promise not to disclose your personal information to third parties.
                                        </p>
                                        <button className="bg-accent hover:bg-white hover:text-accent text-white px-8 py-3 rounded-full font-bold uppercase text-xs tracking-widest transition-all">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="relative h-[400px] lg:h-auto overflow-hidden invert">
                                <iframe
                                    title="Google Maps - Islamabad"
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2025.609391860373!2d72.99752939839478!3d33.6693543!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df93d2bede8315%3A0x7d132618b9829bbb!2sSpicaware!5e1!3m2!1sen!2sus!4v1765978013802!5m2!1sen!2su"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    className="absolute inset-0">
                                </iframe>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </>
    )
}


export default Footer;
import { Instagram, Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0A0A0A] text-white pt-20 pb-10 px-6 lg:px-12 border-t border-white/5">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-xl font-bold tracking-tight">One Book Tarot</h2>
                            <p className="text-xs text-neutral-500 uppercase tracking-widest">by Meenakshi</p>
                        </div>
                        <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
                            Guiding you through life's journey with ancient wisdom of tarot and astrology. Trusted by thousands across India.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="p-2 bg-neutral-900 rounded-full hover:bg-neutral-800 transition-colors">
                                <MessageSquare size={18} className="text-neutral-400" />
                            </a>
                            <a href="#" className="p-2 bg-neutral-900 rounded-full hover:bg-neutral-800 transition-colors">
                                <Instagram size={18} className="text-neutral-400" />
                            </a>
                            <a href="#" className="p-2 bg-neutral-900 rounded-full hover:bg-neutral-800 transition-colors">
                                <Phone size={18} className="text-neutral-400" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-8">Quick Links</h3>
                        <ul className="space-y-4 text-sm text-neutral-400">
                            <li><a href="/about" className="hover:text-white transition-colors">About Me</a></li>
                            <li><a href="/#services" className="hover:text-white transition-colors">Services</a></li>
                            <li><a href="/#what-is-tarot" className="hover:text-white transition-colors">What is Tarot?</a></li>
                            <li><a href="/#reviews" className="hover:text-white transition-colors">Client Reviews</a></li>
                            <li><a href="/#book" className="hover:text-white transition-colors">Book Session</a></li>
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-8">Services</h3>
                        <ul className="space-y-4 text-sm text-neutral-400">
                            <li><a href="#" className="hover:text-white transition-colors">Tarot Reading</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Crystal Healing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Vedic Astrology</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Love & Relationships</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Career Guidance</a></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-8">Contact</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 group">
                                <Phone size={18} className="text-neutral-500 mt-1" />
                                <div className="text-sm">
                                    <p className="text-neutral-300 font-medium">+91 7489021356</p>
                                    <p className="text-neutral-500 text-xs">Mon-Sun, 10AM-8PM IST</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail size={18} className="text-neutral-500 mt-1" />
                                <div className="text-sm">
                                    <p className="text-neutral-300 font-medium">onebooktarotbymeenakshi.com</p>
                                    <p className="text-neutral-500 text-xs">Email for inquiries</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <MapPin size={18} className="text-neutral-500 mt-1" />
                                <div className="text-sm text-neutral-300">
                                    Raipur, Chhattisgarh, India
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] text-neutral-600 uppercase tracking-widest">
                        © {currentYear} One Book Tarot by Meenakshi
                    </p>
                    <div className="flex items-center gap-2 text-[10px] text-neutral-600 uppercase tracking-widest">
                        Made with <span className="text-red-900">❤️</span> in India
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-neutral-600 uppercase tracking-widest">
                        <a
                            href="https://www.architchandrakar.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors cursor-pointer"
                        >
                            <strong>Designed by Archit Chandrakar</strong>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
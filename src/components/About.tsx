import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Moon, Sun, Heart } from 'lucide-react';

const AboutMe = () => {
    return (
        <section className="min-h-screen bg-[#FDFDFD] py-24 px-6 lg:px-12 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Photo Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        {/* Decorative background element */}
                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-purple-100/50 rounded-full blur-3xl -z-10" />

                        <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl border-[12px] border-white">
                            {/* Replace the src with your actual photo path in the /public folder */}
                            <img
                                src="/decks/Journet.jpeg"
                                alt="Meenakshi - One Book Tarot"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                onError={(e) => {
                                    e.currentTarget.src = "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop";
                                }}
                            />
                            {/* Overlay Label */}
                            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg border border-white/20">
                                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-900">Spiritual Guide & Healer</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 space-y-8"
                    >
                        <div className="space-y-4">
                            <span className="text-xs font-black uppercase tracking-[0.4em] text-purple-600 flex items-center gap-3">
                                <Sparkles size={14} /> The Soul Behind the Craft
                            </span>
                            <h1 className="text-5xl lg:text-7xl font-bold text-neutral-900 leading-[1.1]">
                                Hi, I’m <span className="text-neutral-400 font-light">Meenakshi</span>
                            </h1>
                        </div>

                        <p className="text-lg text-neutral-600 leading-relaxed font-medium italic border-l-4 border-neutral-200 pl-6">
                            "My journey began over  years ago as a personal quest for clarity, healing, and deeper spiritual understanding."
                        </p>

                        <div className="space-y-6 text-neutral-600 leading-relaxed text-base">
                            <p>
                                Rooted in Tarot wisdom, Vedic Astrology, and ancient spiritual principles, this path gradually evolved into a sacred calling—to guide others through life’s challenges with intuitive insight, compassion, and divine connection.
                            </p>

                            <p>
                                I believe Tarot is not just a tool for prediction, but a reflection of the soul. Along with Tarot, I work with <strong>Vedic Astrology</strong> to gain insight into life patterns and <strong>Pranic Healing</strong> to understand energy at its source. This combination enhances the clarity and healing aspect of every reading.
                            </p>
                        </div>

                        {/* Benefit Pillars */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-neutral-50 rounded-xl"><Moon size={18} className="text-purple-500" /></div>
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-900">Clarity</h4>
                                    <p className="text-xs text-neutral-500">In love, career & life decisions</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-neutral-50 rounded-xl"><Sun size={18} className="text-amber-500" /></div>
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-900">Alignment</h4>
                                    <p className="text-xs text-neutral-500">Connecting with your highest path</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-8">
                            <a
                                href="/#book"
                                className="inline-flex items-center gap-3 px-10 py-4 bg-neutral-900 text-white rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-purple-700 transition-all hover:scale-105"
                            >
                                Let's Journey Together <Heart size={14} />
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutMe;
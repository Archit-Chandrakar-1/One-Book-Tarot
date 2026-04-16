import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Eye, Star, Moon } from 'lucide-react';
import Footer from './Footer';

const tarotDecks = [
    {
        title: "Osho Zen Tarot",
        image: "decks/OSHOZEN-TAROT.jpeg", // Add your image paths here
        style: "Transcendental",
        tagline: "The Zen Way to the Here & Now",
        description: "Focuses on gaining an understanding of the here and now, rooted in the wisdom of Zen and Osho's teachings.",
        visuals: "Deeply meditative, non-traditional, focus on inner reflection.",
        color: "bg-indigo-500/10"
    },
    {
        title: "Rider-Waite Tarot",
        image: "/decks/RiderWaite.jpeg",
        style: "Classical Symbolism",
        tagline: "The Foundation of Modern Tarot",
        description: "The gold standard of tarot systems, providing clear, archetype-rich scenes that offer direct answers.",
        visuals: "Medieval iconography, primary colors, and structural clarity.",
        color: "bg-yellow-500/10"
    }
];

const oracleDecks = [
    {
        title: "Kali Oracle",
        image: "/decks/Kali-oracle.jpeg",
        author: "Alana Fairchild",
        description: "Focuses on radical transformation and the fierce protection of the Divine Mother.",
        color: "bg-red-500/10"
    },
    {
        title: "Moonology Oracle",
        image: "/decks/Moonolgy.jpeg",
        author: "Yasmin Boland",
        description: "Harnesses lunar energies to find cosmic timing and manifest your intentions.",
        color: "bg-blue-500/10"
    },
    {
        title: "Gita Wisdom Oracle",
        image: "/decks/Gita-wisdom.jpeg",
        author: "Sacred Teachings",
        description: "Profound spiritual guidance derived from the timeless verses of the Bhagavad Gita.",
        color: "bg-orange-500/10"
    },
    {
        title: "Gods of India Oracle",
        image: "/decks/ShivShakti.jpeg",
        author: "Sacred Heritage",
        description: "Connecting with the distinct archetypal energies of various Indian deities.",
        color: "bg-amber-500/10"
    },
    {
        title: "Lord Hanuman Says",
        image: "/decks/Hanuman ji wallpaper.jpeg",
        author: "Divine Strength",
        description: "Messages of courage, devotion, and protection for overcoming life's hurdles.",
        color: "bg-orange-600/10"
    },
    {
        title: "Lovers Oracle",
        image: "/decks/Lovers Oracle.jpeg",
        author: "Relationship Insight",
        description: "Gentle guidance for matters of the heart, soulmate connections, and emotional healing.",
        color: "bg-pink-500/10"
    },
    {
        title: "Archangels & Gemstones",
        image: "/decks/Angel Message Cards.jpeg",
        author: "Margaret Ann Lembo",
        description: "A unique blend of angelic guidance paired with the vibrational healing of crystals.",
        color: "bg-emerald-500/10"
    },
    {
        title: "Past Life", // Example 8th deck
        image: "/decks/Past-life.png",
        author: "Intuitive Tool",
        description: "Additional spiritually guided tools selected based on your unique energy.",
        color: "bg-purple-500/10"
    }
];

const Tarotdecks = () => {
    return (
        <>
            <div className="min-h-screen bg-[#F8F9FA] pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <header className="mb-16 space-y-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-purple-600 font-bold text-xs uppercase tracking-[0.3em]">
                            <Star size={14} /> Intuitive Selection
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-bold text-neutral-900"
                        >
                            Tools of <span className="text-neutral-400 font-light italic">Divination</span>
                        </motion.h1>
                        <p className="text-neutral-500 max-w-2xl text-lg">
                            I work with a diverse range of intuitively selected decks to ensure every reading is deeply personalized and energy-aligned.
                        </p>
                    </header>

                    {/* Section: Tarot */}
                    <h3 className="text-xs font-black uppercase tracking-[0.5em] text-neutral-400 mb-8 flex items-center gap-4">
                        Tarot Systems <div className="h-[1px] flex-1 bg-neutral-200"></div>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                        {tarotDecks.map((deck, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-[2.5rem] border border-neutral-200 p-8 flex flex-col md:flex-row gap-8 shadow-sm hover:shadow-xl transition-all"
                            >
                                {/* Image Container */}
                                <div className="w-full md:w-1/3 aspect-[3/4] rounded-2xl overflow-hidden border border-neutral-100 bg-neutral-50 relative group">
                                    <img
                                        src={deck.image}
                                        alt={deck.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1572916120286-da759299335c?q=80&w=500'; }}
                                    />
                                    <div className={`absolute inset-0 ${deck.color} opacity-40 group-hover:opacity-10 transition-opacity`} />
                                </div>

                                <div className="flex-1 space-y-4">
                                    <div className="flex items-center gap-2 text-neutral-400">
                                        <Sparkles size={14} />
                                        <span className="text-[10px] uppercase tracking-widest font-bold">{deck.style}</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-neutral-900">{deck.title}</h2>
                                    <p className="text-neutral-500 text-sm leading-relaxed">{deck.description}</p>
                                    <div className="pt-4 border-t border-neutral-100 flex items-start gap-3">
                                        <Eye className="text-neutral-400 mt-1" size={16} />
                                        <div>
                                            <p className="text-[10px] uppercase text-neutral-400 font-bold">Visual Language</p>
                                            <p className="text-xs text-neutral-600">{deck.visuals}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Section: Oracle */}
                    <h3 className="text-xs font-black uppercase tracking-[0.5em] text-neutral-400 mb-8 flex items-center gap-4">
                        Oracle Guidance <div className="h-[1px] flex-1 bg-neutral-200"></div>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {oracleDecks.map((deck, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white p-6 rounded-3xl border border-neutral-200 flex flex-col items-center text-center space-y-4 overflow-hidden"
                            >
                                {/* Oracle Image Circle */}
                                <div className={`w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden relative group`}>
                                    <img
                                        src={deck.image}
                                        alt={deck.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125"
                                        onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1512431019954-593974f76ca5?q=80&w=200'; }}
                                    />
                                    <div className={`absolute inset-0 ${deck.color} opacity-20`} />
                                </div>

                                <div>
                                    <h4 className="font-bold text-neutral-900">{deck.title}</h4>
                                    <p className="text-[10px] text-neutral-400 uppercase tracking-widest">{deck.author}</p>
                                </div>
                                <p className="text-xs text-neutral-500 leading-relaxed">
                                    {deck.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Tarotdecks;
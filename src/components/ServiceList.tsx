import React from 'react';
import {
    Sparkles, Hash, Gem, GraduationCap, Heart,
    Users, Wind, Briefcase, Sun, HelpCircle, Flame
} from 'lucide-react';
import { motion } from "framer-motion";

const services = [
    {
        title: "Tarot Reading",
        icon: <Sparkles className="w-6 h-6" />,
        items: [
            { label: "Quick Reading (1-2 questions)", price: "777" },
            { label: "Detailed Reading", price: "1111" },
            { label: "In-depth Session", price: "1500" }
        ],
        popular: true
    },
    {
        title: "Numerology",
        icon: <Hash className="w-6 h-6" />,
        items: [
            { label: "Basic (Life Path + Personality)", price: "1111" },
            { label: "Detailed Report", price: "2100" },
            { label: "Name Correction", price: "3100" }
        ]
    },
    {
        title: "Crystal Consultation",
        icon: <Gem className="w-6 h-6" />,
        items: [
            { label: "Crystal Suggestion", price: "555" },
            { label: "Healing Guidance", price: "999" },
            { label: "Customized Crystal Plan", price: "1500" }
        ]
    },
    {
        title: "Tarot Mentorship",
        icon: <GraduationCap className="w-6 h-6" />,
        items: [
            { label: "Complete Tarot Course", price: "15000" }
        ],
        popular: true
    },
    {
        title: "Love & Relationship",
        icon: <Heart className="w-6 h-6" />,
        items: [
            { label: "Love Reading", price: "1111" },
            { label: "Relationship Clarity", price: "1500" },
            { label: "Breakup / No Contact", price: "1111" }
        ],
        popular: true
    },
    {
        title: "Matchmaking",
        icon: <Users className="w-6 h-6" />,
        items: [
            { label: "Compatibility Check", price: "1500" },
            { label: "Tarot + Kundali", price: "2500" }
        ]
    },
    {
        title: "Healing Sessions",
        icon: <Wind className="w-6 h-6" />,
        items: [
            { label: "Energy Healing", price: "1111" },
            { label: "Deep Emotional Release", price: "2100" }
        ]
    },
    {
        title: "Career Guidance",
        icon: <Briefcase className="w-6 h-6" />,
        items: [
            { label: "Career Reading", price: "1111" },
            { label: "Detailed Growth Plan", price: "1500" }
        ]
    },
    {
        title: "Vedic Astrology",
        icon: <Sun className="w-6 h-6" />,
        items: [
            { label: "Basic Kundali Analysis", price: "1500" },
            { label: "Detailed Predictions", price: "3100" }
        ]
    },
    {
        title: "Problem Solving",
        icon: <HelpCircle className="w-6 h-6" />,
        items: [
            { label: "General Consultation", price: "1500" },
            { label: "Deep Problem Solving", price: "2500" }
        ]
    },
    {
        title: "Remedies / Rituals",
        icon: <Flame className="w-6 h-6" />,
        items: [
            { label: "Personalized Remedies", price: "1111" },
            { label: "Advanced Ritual Guidance", price: "2100" }
        ]
    }
];

const ServicesGrid = () => {
    return (
        <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">

            {/* 🌌 Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(168,85,247,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(236,72,153,0.15),transparent_40%)]"></div>

            <div className="relative max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">

                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.08 }}
                            whileHover={{ scale: 1.05 }}
                            className="group relative"
                        >

                            {/* ✨ Glow Border */}
                            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 opacity-20 group-hover:opacity-70 blur transition duration-500"></div>

                            {/* 🃏 Card */}
                            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10  p-6 h-full transition-all duration-500 group-hover:bg-white/10">

                                {/* Popular Badge */}
                                {service.popular && (
                                    <div className="absolute top-4 right-4 text-[10px] px-3 py-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 text-black font-semibold tracking-wider">
                                        POPULAR
                                    </div>
                                )}

                                {/* 🔮 Icon */}
                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-300 mb-6 group-hover:rotate-6 transition duration-500">
                                    {service.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-semibold text-white mb-4 tracking-wide">
                                    {service.title}
                                </h3>

                                {/* Divider */}
                                <div className="w-10 h-[1px] bg-gradient-to-r from-purple-400 to-pink-400 mb-4 opacity-60"></div>

                                {/* Pricing */}
                                <div className="space-y-3">
                                    {service.items.map((item, i) => (
                                        <div key={i} className="flex justify-between items-center">
                                            <span className="text-sm text-zinc-400">
                                                {item.label}
                                            </span>
                                            <span className="text-md font-semibold text-white">
                                                ₹{item.price}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* 🌟 Hover Glow Effect */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-xl"></div>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesGrid;
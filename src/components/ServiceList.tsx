import React from 'react';
import {
    Sparkles, Hash, Gem, GraduationCap, Heart,
    Users, Wind, Briefcase, Sun, HelpCircle, Flame
} from 'lucide-react';

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
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-300 ease-in-out hover:bg-black hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
                        >
                            {/* Popular Badge */}
                            {service.popular && (
                                <div className="absolute top-4 right-4 bg-black text-white group-hover:bg-white group-hover:text-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-colors duration-300">
                                    Popular
                                </div>
                            )}

                            {/* Icon Container */}
                            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-zinc-800 group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-300">
                                {service.title}
                            </h3>

                            {/* Pricing Items */}
                            <div className="space-y-3">
                                {service.items.map((item, i) => (
                                    <div key={i} className="flex flex-col">
                                        <span className="text-sm text-gray-500 group-hover:text-zinc-400 transition-colors duration-300">
                                            {item.label}
                                        </span>
                                        <span className="text-md font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                                            ₹{item.price}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesGrid;
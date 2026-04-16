import {
    Sparkles, Hash, Gem, GraduationCap, Heart,
    Users, Wind, Briefcase, Sun, HelpCircle, Flame
} from 'lucide-react';

export type ServiceItem = {
    label: string;
    price: string;
};

export type Service = {
    id: string;
    title: string;
    icon: React.ReactNode;
    iconColor: string;
    items: ServiceItem[];
    popular?: boolean;
    description: string;
};

export const services: Service[] = [
    {
        id: "tarot-reading",
        title: "Tarot Reading",
        icon: <Sparkles className="w-7 h-7" />,
        iconColor: "text-purple-400",
        items: [
            { label: "Quick Reading (1-2 questions)", price: "777" },
            { label: "Detailed Reading", price: "1111" },
            { label: "In-depth Session", price: "1500" }
        ],
        popular: true,
        description: "Our Tarot Reading sessions explore archetypal energies surrounding your current life situation. We focus on providing clarity and perspective on love, career, or personal growth challenges."
    },
    {
        id: "numerology",
        title: "Numerology",
        icon: <Hash className="w-7 h-7" />,
        iconColor: "text-blue-400",
        items: [
            { label: "Basic (Life Path + Personality)", price: "1111" },
            { label: "Detailed Report", price: "2100" },
            { label: "Name Correction", price: "3100" }
        ],
        description: "Numerology reveals your core personality and life purpose through the vibrational frequency of your birth date and name."
    },
    {
        id: "crystal-consultation",
        title: "Crystal Consultation",
        icon: <Gem className="w-7 h-7" />,
        iconColor: "text-emerald-400",
        items: [
            { label: "Crystal Suggestion", price: "555" },
            { label: "Healing Guidance", price: "999" },
            { label: "Customized Crystal Plan", price: "1500" }
        ],
        description: "Discover which crystals align with your specific intentions for abundance, peace, or protection."
    },
    {
        id: "tarot-mentorship",
        title: "Tarot Mentorship",
        icon: <GraduationCap className="w-7 h-7" />,
        iconColor: "text-amber-400",
        items: [
            { label: "Complete Tarot Course", price: "15000" }
        ],
        popular: true,
        description: "A comprehensive mentor program designed to take you from beginner to a confident, intuitive Tarot reader."
    },
    {
        id: "love-relationship",
        title: "Love & Relationship",
        icon: <Heart className="w-7 h-7" />,
        iconColor: "text-red-400",
        items: [
            { label: "Love Reading", price: "1111" },
            { label: "Relationship Clarity", price: "1500" },
            { label: "Breakup / No Contact", price: "1111" }
        ],
        popular: true,
        description: "Navigate the heart's complexities with sensitive insight into soulmate connections and emotional healing."
    },
    {
        id: "matchmaking",
        title: "Matchmaking",
        icon: <Users className="w-7 h-7" />,
        iconColor: "text-pink-400",
        items: [
            { label: "Compatibility Check", price: "1500" },
            { label: "Tarot + Kundali", price: "2500" }
        ],
        description: "We combine Vedic Kundali matching with Tarot to provide a holistic view of long-term compatibility."
    },
    // {
    //     id: "healing-sessions",
    //     title: "Healing Sessions",
    //     icon: <Wind className="w-7 h-7" />,
    //     iconColor: "text-teal-400",
    //     items: [
    //         { label: "Energy Healing", price: "1111" },
    //         { label: "Deep Emotional Release", price: "2100" }
    //     ],
    //     description: "Work with your subtle energy body to release blockages and facilitate deep relaxation and peace."
    // },
    {
        id: "career-guidance",
        title: "Career Guidance",
        icon: <Briefcase className="w-7 h-7" />,
        iconColor: "text-orange-400",
        items: [
            { label: "Career Reading", price: "1111" },
            { label: "Detailed Growth Plan", price: "1500" }
        ],
        description: "Identify your natural aptitudes and the best timing for career changes or business ventures."
    },
    {
        id: "vedic-astrology",
        title: "Vedic Astrology",
        icon: <Sun className="w-7 h-7" />,
        iconColor: "text-sky-400",
        items: [
            { label: "Basic Kundali Analysis", price: "1500" },
            { label: "Detailed Predictions", price: "3100" }
        ],
        description: "Comprehensive birth chart analysis (Jyotish) to understand your planetary positions and life path."
    },
    {
        id: "problem-solving",
        title: "Problem Solving",
        icon: <HelpCircle className="w-7 h-7" />,
        iconColor: "text-indigo-400",
        items: [
            { label: "General Consultation", price: "1500" },
            { label: "Deep Problem Solving", price: "2500" }
        ],
        description: "Targeted analysis to break down complex life dilemmas and find actionable solutions."
    },
    {
        id: "remedies-rituals",
        title: "Remedies / Rituals",
        icon: <Flame className="w-7 h-7" />,
        iconColor: "text-yellow-400",
        items: [
            { label: "Personalized Remedies", price: "1111" },
            { label: "Advanced Ritual Guidance", price: "2100" }
        ],
        description: "Simple yet powerful home remedies and rituals to mitigate negative influences."
    }
];
import React from 'react';
import { motion } from 'framer-motion';
import {
  Map, Zap, Clock, Heart, HelpCircle,
  CircleDot, Briefcase, Calendar, Scale, Infinity, Sparkles
} from 'lucide-react';

import Footer from './Footer';

const spreads = [
  {
    title: "One-Card Spread",
    count: "1 Card",
    useCase: "Daily Guidance",
    image: "/decks/onecardspread.png",
    description: "The most direct way to get an answer, focus for the day, or a quick spark of intuition.",
    icon: <Zap size={20} className="text-yellow-500" />
  },
  {
    title: "Three-Card Spread",
    count: "3 Cards",
    useCase: "Past, Present, Future",
    image: "/decks/Three-Cross.png",
    description: "A foundational spread that helps you understand the timeline and trajectory of your current situation.",
    icon: <Clock size={20} className="text-blue-500" />
  },
  {
    title: "Celtic Cross Spread",
    count: "10 Cards",
    useCase: "Deep Life Analysis",
    image: "/decks/celticcross.png",
    description: "One of the most ancient and complex spreads, providing a 360-degree view of your life and external influences.",
    icon: <Infinity size={20} className="text-purple-500" />
  },
  {
    title: "Love / Relationship Spread",
    count: "7 Cards",
    useCase: "Partnership Analysis",
    image: "/decks/lovespread.png",
    description: "Perfect for understanding the dynamics between two people and finding a path toward emotional healing.",
    icon: <Heart size={20} className="text-red-500" />
  },
  {
    title: "Yes or No Spread",
    count: "1 or 3 Cards",
    useCase: "Direct Decisions",
    image: "/decks/Yes-No.png",
    description: "Provides a clear direction when you are at a crossroads and need immediate clarity.",
    icon: <HelpCircle size={20} className="text-indigo-500" />
  },
  {
    title: "Horseshoe Spread",
    count: "7 Cards",
    useCase: "Overcoming Obstacles",
    image: "/decks/horsespread.png",
    description: "Offers a broader perspective on obstacles, unseen influences, and the best way forward.",
    icon: <CircleDot size={20} className="text-emerald-500" />
  },
  {
    title: "Career / Money Spread",
    count: "5 Cards",
    useCase: "Professional Growth",
    image: "/decks/CareerSpread.png",
    description: "Focuses on your financial flow, career opportunities, and aligning your work with your purpose.",
    icon: <Briefcase size={20} className="text-orange-500" />
  },
  {
    title: "Decision-Making Spread",
    count: "5 Cards",
    useCase: "Choice Comparison",
    image: "/decks/Decision-Spread.png",
    description: "Compares two different paths to help you understand the potential outcomes of each choice.",
    icon: <Scale size={20} className="text-sky-500" />
  },
  {
    title: "Year Ahead Spread",
    count: "12 Cards",
    useCase: "Monthly Roadmap",
    image: "/decks/YearSprea.png",
    description: "A comprehensive 12-month outlook to help you align with the energy of each coming month.",
    icon: <Calendar size={20} className="text-rose-500" />
  },
  {
    title: "Chakra Spread",
    count: "7 Cards",
    useCase: "Energy Alignment",
    image: "/decks/Chakra-Spread.png",
    description: "Explores the state of your 7 chakras to identify energy blockages and emotional imbalances.",
    icon: <Sparkles size={20} className="text-amber-500" />
  }
];

const TarotCardSpread = () => {
  return (
    <>
      <div className="min-h-screen bg-[#F8F9FA] pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <header className="mb-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-16 h-16 bg-white rounded-full border border-neutral-200 flex items-center justify-center mx-auto mb-6 shadow-sm"
            >
              <Map className="text-neutral-900" size={28} />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight"
            >
              Sacred <span className="text-neutral-400 font-light italic">Spreads</span>
            </motion.h1>
            <p className="text-neutral-400 mt-4 text-sm uppercase tracking-[0.3em] font-bold">Choosing your roadmap to clarity</p>
          </header>

          <div className="grid grid-cols-1 gap-12">
            {spreads.map((spread, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                // INCREASED PADDING: Changed p-6/p-10 to py-16 px-8/px-12
                className="bg-white rounded-[4rem] border border-neutral-200/60 py-16 px-8 md:px-12 flex flex-col lg:flex-row gap-12 items-center hover:shadow-2xl hover:shadow-black/5 transition-all group"
              >

                {/* IMAGE SECTION: Updated aspect-video to aspect-[4/3] for 30% more height */}
                <div className="w-full lg:w-1/2 aspect-[4/3] rounded-[2.5rem] overflow-hidden relative border border-neutral-100 shadow-inner bg-neutral-200">
                  <img
                    src={spread.image}
                    alt={spread.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1572916120286-da759299335c?q=80&w=800";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Text Section: Increased space-y to 8 for better vertical balance */}
                <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-4">
                    <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-100 group-hover:rotate-12 transition-transform duration-500">
                      {spread.icon}
                    </div>
                    <span className="text-neutral-400 font-black text-[10px] uppercase tracking-[0.2em]">{spread.count} Layout</span>
                  </div>

                  <div>
                    <h2 className="text-4xl font-bold text-neutral-900 mb-3 tracking-tight">{spread.title}</h2>
                    <p className="text-purple-600 font-bold text-[11px] uppercase tracking-[0.25em]">{spread.useCase}</p>
                  </div>

                  <p className="text-neutral-500 leading-relaxed text-base max-w-md mx-auto lg:mx-0">
                    {spread.description}
                  </p>

                  <div className="pt-6 flex justify-center lg:justify-start">
                    <button className="text-[11px] font-black uppercase tracking-[0.4em] text-neutral-900 border-b-2 border-black pb-2 hover:text-purple-600 hover:border-purple-600 transition-all hover:translate-x-1 duration-300">
                      Request this Session
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TarotCardSpread;
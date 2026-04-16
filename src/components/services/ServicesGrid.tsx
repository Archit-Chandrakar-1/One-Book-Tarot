"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CalendarDays, ExternalLink, MessageCircle, HelpCircle } from 'lucide-react';
import { services, Service, ServiceItem } from './services-config';

const ServicesGrid = () => {
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [selectedTier, setSelectedTier] = useState<ServiceItem | null>(null);

    const closeModal = () => {
        setSelectedService(null);
        setSelectedTier(null);
    };

    const handleBookNow = () => {
        if (selectedService && selectedTier) {
            const message = `Hey, I want a session on "${selectedService.title}: ${selectedTier.label} (₹${selectedTier.price})"`;
            const whatsappUrl = `https://wa.me/917489021356?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        }
    };

    return (
        <div className="min-h-screen bg-[#FOECE6] py-20 px-4 sm:px-6 lg:px-8 text-neutral-100 font-sans">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-black to-neutral-900 bg-clip-text text-transparent mb-4">
                        Our Sacred Services
                    </h2>
                    <p className="text-neutral-400 text-lg">Click on any service to explore details and pricing</p>
                </header>

                {/* 5 Column Grid for Desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            layoutId={`card-${service.id}`}
                            onClick={() => setSelectedService(service)}
                            className="group relative cursor-pointer min-h-[320px]"
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            {/* Glass Background */}
                            <div className="absolute inset-0 bg-white backdrop-blur-xl rounded-[1rem] border border-neutral-800 group-hover:border-neutral-700 transition-colors z-0" />

                            <div className="relative z-10 p-8 flex flex-col h-full">
                                {service.popular && (
                                    <span className="absolute top-5 right-5 bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter">
                                        Popular
                                    </span>
                                )}

                                <div className={`w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 border border-neutral-700/30 group-hover:scale-110 transition-transform ${service.iconColor}`}>
                                    {service.icon}
                                </div>

                                <h3 className="text-xl font-bold mb-4 text-black">{service.title}</h3>
                                <p className="text-sm font-bold mb-4 text-black">{service.description}</p>

                                <div className="mt-auto pt-4 border-t border-neutral-800/50">
                                    <p className="text-xs text-black uppercase tracking-widest font-semibold mb-1">Starting from</p>
                                    <p className="text-2xl font-black text-black">₹{service.items[0].price}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal View */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/90 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            layoutId={`card-${selectedService.id}`}
                            className="relative w-full max-w-4xl bg-neutral-900 rounded-[2.5rem] border border-neutral-800 overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button onClick={closeModal} className="absolute top-6 right-6 p-2 text-neutral-500 hover:text-white z-20"><X /></button>

                            <div className="flex flex-col md:flex-row h-full max-h-[90vh] overflow-y-auto">
                                {/* Modal Sidebar */}
                                <div className="md:w-1/3 p-10 bg-neutral-800/30 border-r border-neutral-800 flex flex-col items-center text-center">
                                    <div className={`w-24 h-24 rounded-3xl bg-neutral-900 flex items-center justify-center mb-6 shadow-xl ${selectedService.iconColor}`}>
                                        {selectedService.icon}
                                    </div>
                                    <h2 className="text-3xl font-bold mb-4">{selectedService.title}</h2>
                                    <p className="text-neutral-400 text-sm leading-relaxed mb-8">{selectedService.description}</p>

                                    <div className="w-full mt-auto space-y-3">
                                        <button
                                            disabled={!selectedTier}
                                            onClick={handleBookNow}
                                            className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${selectedTier
                                                ? 'bg-purple-600 text-white hover:bg-purple-500 scale-105 shadow-xl shadow-purple-900/20'
                                                : 'bg-neutral-800 text-neutral-600 cursor-not-allowed'
                                                }`}
                                        >
                                            <MessageCircle size={20} />
                                            {selectedTier ? "Book on WhatsApp" : "Choose a Tier"}
                                        </button>
                                    </div>
                                </div>

                                {/* Modal Pricing Selection */}
                                <div className="flex-1 p-10">
                                    <h4 className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-bold mb-6">Select your session type</h4>
                                    <div className="space-y-4">
                                        {selectedService.items.map((item, idx) => {
                                            const active = selectedTier?.label === item.label;
                                            return (
                                                <button
                                                    key={idx}
                                                    onClick={() => setSelectedTier(item)}
                                                    className={`w-full group p-6 rounded-2xl border text-left transition-all ${active
                                                        ? 'bg-purple-600/10 border-purple-500 shadow-lg'
                                                        : 'bg-neutral-950/50 border-neutral-800 hover:border-neutral-600'
                                                        }`}
                                                >
                                                    <div className="flex justify-between items-center">
                                                        <div>
                                                            <p className={`font-bold text-lg ${active ? 'text-purple-300' : 'text-neutral-100'}`}>{item.label}</p>
                                                            <p className="text-xs text-neutral-500 mt-1 italic">Click to select this option</p>
                                                        </div>
                                                        <p className={`text-2xl font-black ${active ? 'text-white' : 'text-neutral-400'}`}>₹{item.price}</p>
                                                    </div>
                                                </button>
                                            );
                                        })}
                                    </div>
                                    <div className="mt-8 p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 flex gap-3 items-start">
                                        <HelpCircle className="text-blue-400 shrink-0 mt-1" size={18} />
                                        <p className="text-xs text-neutral-400 leading-relaxed">
                                            Payments are processed securely via UPI/Bank Transfer after we connect on WhatsApp. You will be able to choose your preferred time slot during our chat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ServicesGrid;

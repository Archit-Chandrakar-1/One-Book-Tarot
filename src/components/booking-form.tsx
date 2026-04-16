"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, CalendarDays, Clock, MessageSquareQuote } from 'lucide-react';
import { services } from './services/services-config'; // Ensure path is correct

const BookingForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        service: '',
        date: '',
        time: '10:00 AM', // Default time
        questions: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleBooking = (e: React.FormEvent) => {
        e.preventDefault();

        // 1. WhatsApp Configuration
        const myPhoneNumber = "917489021356"; // REPLACE WITH YOUR NUMBER (with country code, no +)

        // 2. Format the message for a new communication flow
        const message = `Hey Meenakshi! ✨ 
        
I'm *${formData.fullName}* and I want to book a *${formData.service}* session.
        
*Preferred Slot:*
📅 Date: ${formData.date}
⏰ Time: ${formData.time}
        
*Guidance needed on:*
"${formData.questions || "General guidance"}"
        
Is it available? I am reaching out directly as requested.`;

        // 3. Encode and Open
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${myPhoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center pt-32 pb-20 px-4">
            {/* Main Container - Adjusted to 95% width, maximum max-width for very large screens */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                className="w-[95%] max-w-7xl mx-auto rounded-[3rem] p-1 border border-neutral-200 bg-white/40 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
            >
                {/* Visual Glow Effect for "Liquid" feel */}
                <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />
                <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-pink-500/10 blur-[120px] pointer-events-none" />

                <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row gap-16 items-start">

                    {/* Header/Info Column */}
                    <div className="md:w-2/5 space-y-6 md:sticky md:top-36">
                        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
                            Secure your <br /> sacred space
                        </h2>
                        <p className="text-neutral-600 text-lg leading-relaxed">
                            Share your availability and the guidance you seek. This connection moves directly to WhatsApp for scheduling and private consultation.
                        </p>
                        <div className="pt-8 space-y-4">
                            <div className="flex items-center gap-4 text-neutral-500 text-xs uppercase tracking-widest font-bold">
                                <MessageSquareQuote size={16} /> Direct 1:1 Communication
                            </div>
                        </div>
                    </div>

                    {/* Glass Form Column */}
                    <form onSubmit={handleBooking} className="flex-1 space-y-6 w-full">
                        {/* Name & Phone in same row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">Full Name</label>
                                <input required name="fullName" onChange={handleInputChange} type="text" placeholder="Meenakshi Dewangan" className="w-full p-4 rounded-xl border border-neutral-100 bg-white/60 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all hover:border-neutral-300" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">Phone Number (WhatsApp)</label>
                                <input required name="phoneNumber" onChange={handleInputChange} type="text" placeholder="+91 98765 43210" className="w-full p-4 rounded-xl border border-neutral-100 bg-white/60 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all hover:border-neutral-300" />
                            </div>
                        </div>

                        {/* Custom Styled Service Dropdown */}
                        <div className="space-y-2 relative">
                            <label className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">Choose your Session Type</label>
                            <div className="relative">
                                <select required name="service" onChange={handleInputChange} className="w-full p-4 pr-12 rounded-xl border border-neutral-100 bg-white/60 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all hover:border-neutral-300 appearance-none text-sm text-neutral-900 font-medium cursor-pointer">
                                    <option value="">Select a service category...</option>
                                    {services.map((s) => (
                                        <optgroup key={s.id} label={s.title}>
                                            {s.items.map((item, idx) => (
                                                <option key={idx} value={`${s.title} - ${item.label}`}>
                                                    {item.label} (₹{item.price})
                                                </option>
                                            ))}
                                        </optgroup>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" size={20} />
                            </div>
                        </div>

                        {/* Date & Time with Icons */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">Preferred Date</label>
                                <div className="relative">
                                    <input required name="date" onChange={handleInputChange} type="date" className="w-full p-4 pr-12 rounded-xl border border-neutral-100 bg-white/60 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all hover:border-neutral-300 cursor-pointer text-sm text-neutral-900" />
                                    <CalendarDays className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" size={18} />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">Preferred Time</label>
                                <div className="relative">
                                    <select required name="time" value={formData.time} onChange={handleInputChange} className="w-full p-4 pr-12 rounded-xl border border-neutral-100 bg-white/60 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all hover:border-neutral-300 appearance-none text-sm text-neutral-900 cursor-pointer">
                                        {['10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM'].map(slot => (
                                            <option key={slot} value={slot}>{slot}</option>
                                        ))}
                                    </select>
                                    <Clock className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" size={18} />
                                </div>
                            </div>
                        </div>

                        {/* Questions */}
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">Your Questions (Optional)</label>
                            <textarea name="questions" onChange={handleInputChange} rows={3} placeholder="Share what you'd like guidance on (e.g., love, career, or specific question)..." className="w-full p-4 rounded-xl border border-neutral-100 bg-white/60 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all hover:border-neutral-300 text-sm leading-relaxed" />
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-purple-600 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-purple-500 transition-all shadow-xl shadow-purple-900/10 active:shadow-sm"
                        >
                            Book My Consultation via WhatsApp ✨
                        </motion.button>

                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default BookingForm;
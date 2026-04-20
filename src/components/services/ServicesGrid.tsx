// "use client";

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, MessageCircle, HelpCircle } from 'lucide-react';
// import { services, Service, ServiceItem } from './services-config';

// // ── Curated Unsplash images per service slot ──────────────────────────────────
// // Each URL targets a topic relevant to the service at that index.
// // sig=N guarantees different photos when the same keyword is reused.
// const SERVICE_IMAGES = [
//     'https://pin.it/5lhfxSuUx',      // Tarot Reading
//     'https://source.unsplash.com/featured/700x700/?numerology,sacred,geometry&sig=12', // Numerology
//     'https://source.unsplash.com/featured/700x700/?crystal,gemstone,healing&sig=13',   // Crystal Consultation
//     'https://source.unsplash.com/featured/700x700/?tarot,book,learn,study&sig=14',     // Tarot Mentorship
//     'https://source.unsplash.com/featured/700x700/?love,romance,rose&sig=15',          // Love & Relationship
//     'https://source.unsplash.com/featured/700x700/?couple,hands,together&sig=16',      // Matchmaking
//     'https://source.unsplash.com/featured/700x1000/?career,path,compass&sig=17',       // Career Guidance
//     'https://source.unsplash.com/featured/700x700/?cosmos,stars,galaxy&sig=18',        // Vedic Astrology
//     'https://source.unsplash.com/featured/700x700/?meditation,peace,zen&sig=19',       // Problem Solving
//     'https://source.unsplash.com/featured/700x700/?candle,ritual,incense&sig=20',      // Remedies / Rituals
//     'https://source.unsplash.com/featured/700x700/?palm,reading,hand&sig=21',
//     'https://source.unsplash.com/featured/700x700/?chakra,energy,spiritual&sig=22',
// ];

// // ── Grid layout pattern ───────────────────────────────────────────────────────
// // 2 = tall card (spans 2 rows), 1 = normal card (spans 1 row)
// // For a 3-column grid this produces:
// //   col1: [TALL]  col2: [normal][normal]  col3: [normal][normal]
// //   col1: [normal][TALL⟶spans rows 3-4]  col3: [normal][normal]  …
// const ROW_SPAN_PATTERN = [2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1];

// // ── Fallback dark colours when image hasn't loaded yet ────────────────────────
// const FALLBACK_COLORS = [
//     '#1a1025', '#0f1a20', '#1a1520', '#0d1a10',
//     '#1a0f15', '#200d0d', '#101520', '#0d101a',
//     '#1a180d', '#1a0d0d', '#0f1520', '#15200f',
// ];

// // ─────────────────────────────────────────────────────────────────────────────

// const ServicesGrid = () => {
//     const [selectedService, setSelectedService] = useState<Service | null>(null);
//     const [selectedTier, setSelectedTier] = useState<ServiceItem | null>(null);

//     const closeModal = () => {
//         setSelectedService(null);
//         setSelectedTier(null);
//     };

//     const handleBookNow = () => {
//         if (selectedService && selectedTier) {
//             const message = `Hey, I want a session on "${selectedService.title}: ${selectedTier.label} (₹${selectedTier.price})"`;
//             const whatsappUrl = `https://wa.me/917489021356?text=${encodeURIComponent(message)}`;
//             window.open(whatsappUrl, '_blank');
//         }
//     };

//     return (
//         <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
//             <div className="max-w-7xl mx-auto">

//                 {/* ── Page Header ─────────────────────────────────────── */}
//                 <header className="text-center mb-12">
//                     <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-black to-neutral-700 bg-clip-text text-transparent mb-3">
//                         Our Sacred Services
//                     </h2>
//                     <p className="text-neutral-400 text-base">Click on any service to explore details and pricing</p>
//                 </header>

//                 {/* ── Masonry Photo Grid ──────────────────────────────── */}
//                 <div
//                     className="services-mosaic-grid"
//                     style={{
//                         display: 'grid',
//                         gridTemplateColumns: 'repeat(3, 1fr)',
//                         gridAutoRows: '230px',
//                         gap: '10px',
//                     }}
//                 >
//                     {services.map((service, index) => {
//                         const rowSpan = ROW_SPAN_PATTERN[index % ROW_SPAN_PATTERN.length];
//                         const imageUrl = SERVICE_IMAGES[index % SERVICE_IMAGES.length];
//                         const fallback = FALLBACK_COLORS[index % FALLBACK_COLORS.length];

//                         return (
//                             <motion.div
//                                 key={service.id}
//                                 className="service-mosaic-card relative cursor-pointer overflow-hidden rounded-2xl group"
//                                 style={{ gridRow: `span ${rowSpan}`, backgroundColor: fallback }}
//                                 onClick={() => setSelectedService(service)}
//                                 whileHover="hovered"
//                                 initial="idle"
//                             >
//                                 {/* Full-bleed background image — zooms in on hover */}
//                                 <motion.div
//                                     className="absolute inset-0"
//                                     style={{
//                                         backgroundImage: `url("${imageUrl}")`,
//                                         backgroundSize: 'cover',
//                                         backgroundPosition: 'center',
//                                     }}
//                                     variants={{
//                                         idle: { scale: 1 },
//                                         hovered: { scale: 1.07 },
//                                     }}
//                                     transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
//                                 />

//                                 {/* Bottom gradient — ensures text is always readable */}
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

//                                 {/* Subtle top gradient for Popular badge contrast */}
//                                 <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent pointer-events-none" />

//                                 {/* Popular badge */}
//                                 {service.popular && (
//                                     <div className="absolute top-3.5 right-3.5 bg-white/15 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest border border-white/25 z-10">
//                                         Popular
//                                     </div>
//                                 )}

//                                 {/* ── Always-visible title at bottom ── */}
//                                 <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
//                                     <p className="text-white/55 text-[10px] font-semibold uppercase tracking-[0.18em] mb-1 drop-shadow">
//                                         From ₹{service.items?.[0]?.price}
//                                     </p>
//                                     <h3 className="text-white text-[1.05rem] font-bold leading-snug drop-shadow-md">
//                                         {service.title}
//                                     </h3>
//                                 </div>

//                                 {/* Hover: thin gold border flash */}
//                                 <motion.div
//                                     className="absolute inset-0 rounded-2xl border border-white/0 pointer-events-none"
//                                     variants={{
//                                         idle: { borderColor: 'rgba(255,255,255,0)' },
//                                         hovered: { borderColor: 'rgba(255,255,255,0.25)' },
//                                     }}
//                                     transition={{ duration: 0.3 }}
//                                 />
//                             </motion.div>
//                         );
//                     })}
//                 </div>
//             </div>

//             {/* ── MODAL — identical to original, minus layoutId ──── */}
//             <AnimatePresence>
//                 {selectedService && (
//                     <motion.div
//                         className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/90 backdrop-blur-md"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         onClick={closeModal}
//                     >
//                         <motion.div
//                             className="relative w-full max-w-4xl bg-neutral-900 rounded-[2.5rem] border border-neutral-800 overflow-hidden shadow-2xl"
//                             initial={{ scale: 0.9, opacity: 0, y: 24 }}
//                             animate={{ scale: 1, opacity: 1, y: 0 }}
//                             exit={{ scale: 0.9, opacity: 0, y: 24 }}
//                             transition={{ type: 'spring', stiffness: 320, damping: 28 }}
//                             onClick={(e) => e.stopPropagation()}
//                         >
//                             <button
//                                 onClick={closeModal}
//                                 className="absolute top-6 right-6 p-2 text-neutral-500 hover:text-white z-20 transition-colors"
//                             >
//                                 <X />
//                             </button>

//                             <div className="flex flex-col md:flex-row h-full max-h-[90vh] overflow-y-auto">

//                                 {/* Sidebar */}
//                                 <div className="md:w-1/3 p-10 bg-neutral-800/30 border-r border-neutral-800 flex flex-col items-center text-center">
//                                     <div className={`w-24 h-24 rounded-3xl bg-neutral-900 flex items-center justify-center mb-6 shadow-xl ${selectedService.iconColor}`}>
//                                         {selectedService.icon}
//                                     </div>
//                                     <h2 className="text-3xl font-bold mb-4 text-white">{selectedService.title}</h2>
//                                     <p className="text-neutral-400 text-sm leading-relaxed mb-8">{selectedService.description}</p>

//                                     <div className="w-full mt-auto space-y-3">
//                                         <button
//                                             disabled={!selectedTier}
//                                             onClick={handleBookNow}
//                                             className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${selectedTier
//                                                 ? 'bg-purple-600 text-white hover:bg-purple-500 scale-105 shadow-xl shadow-purple-900/20'
//                                                 : 'bg-neutral-800 text-neutral-600 cursor-not-allowed'
//                                                 }`}
//                                         >
//                                             <MessageCircle size={20} />
//                                             {selectedTier ? 'Book on WhatsApp' : 'Choose a Tier'}
//                                         </button>
//                                     </div>
//                                 </div>

//                                 {/* Pricing selection */}
//                                 <div className="flex-1 p-10">
//                                     <h4 className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-bold mb-6">
//                                         Select your session type
//                                     </h4>
//                                     <div className="space-y-4">
//                                         {selectedService.items.map((item, idx) => {
//                                             const active = selectedTier?.label === item.label;
//                                             return (
//                                                 <button
//                                                     key={idx}
//                                                     onClick={() => setSelectedTier(item)}
//                                                     className={`w-full group p-6 rounded-2xl border text-left transition-all ${active
//                                                         ? 'bg-purple-600/10 border-purple-500 shadow-lg'
//                                                         : 'bg-neutral-950/50 border-neutral-800 hover:border-neutral-600'
//                                                         }`}
//                                                 >
//                                                     <div className="flex justify-between items-center">
//                                                         <div>
//                                                             <p className={`font-bold text-lg ${active ? 'text-purple-300' : 'text-neutral-100'}`}>
//                                                                 {item.label}
//                                                             </p>
//                                                             <p className="text-xs text-neutral-500 mt-1 italic">Click to select this option</p>
//                                                         </div>
//                                                         <p className={`text-2xl font-black ${active ? 'text-white' : 'text-neutral-400'}`}>
//                                                             ₹{item.price}
//                                                         </p>
//                                                     </div>
//                                                 </button>
//                                             );
//                                         })}
//                                     </div>

//                                     <div className="mt-8 p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 flex gap-3 items-start">
//                                         <HelpCircle className="text-blue-400 shrink-0 mt-1" size={18} />
//                                         <p className="text-xs text-neutral-400 leading-relaxed">
//                                             Payments are processed securely via UPI/Bank Transfer after we connect on WhatsApp.
//                                             You will be able to choose your preferred time slot during our chat.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>

//             {/* ── Responsive overrides ───────────────────────────── */}
//             <style>{`
//         /* Mobile: single column, all cards same height */
//         @media (max-width: 639px) {
//           .services-mosaic-grid {
//             grid-template-columns: 1fr !important;
//             grid-auto-rows: 210px !important;
//           }
//           .service-mosaic-card {
//             grid-row: span 1 !important;
//           }
//         }
//         /* Tablet: 2 columns, tall cards keep their span */
//         @media (min-width: 640px) and (max-width: 1023px) {
//           .services-mosaic-grid {
//             grid-template-columns: repeat(2, 1fr) !important;
//             grid-auto-rows: 210px !important;
//           }
//         }
//       `}</style>
//         </div>
//     );
// };

// export default ServicesGrid;

"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, HelpCircle } from 'lucide-react';
import { services, Service, ServiceItem } from './services-config';

// ── Local images from public/service/ ────────────────────────────────────────
// Add/rename files to match your actual filenames.
// The order here maps 1-to-1 with the services array order.
const SERVICE_IMAGES = [
    '/service/Image-1.jpeg',        // Tarot Reading
    '/service/Image-2.jpeg',           // Numerology
    '/service/Image-3.jpeg', // Crystal Consultation
    '/service/Image-4.jpeg',     // Tarot Mentorship
    '/service/Image-5.jpeg',    // Love & Relationship
    '/service/Image-6.jpeg',          // Matchmaking
    '/service/Image-7.jpeg',      // Career Guidance
    '/service/Image-8.jpeg',      // Vedic Astrology
    '/service/Image-9.jpeg',      // Problem Solving
    '/service/Image-10.jpeg',     // Remedies / Rituals
    '/service/Image-11.jpeg',         // slot 11
    '/service/Image-12.jpeg',       // slot 12
];

// ── Grid layout pattern ───────────────────────────────────────────────────────
// 2 = tall card (spans 2 rows), 1 = normal card (spans 1 row)
// For a 3-column grid this produces:
//   col1: [TALL]  col2: [normal][normal]  col3: [normal][normal]
//   col1: [normal][TALL⟶spans rows 3-4]  col3: [normal][normal]  …
const ROW_SPAN_PATTERN = [2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1];

// ── Fallback dark colours when image hasn't loaded yet ────────────────────────
const FALLBACK_COLORS = [
    '#1a1025', '#0f1a20', '#1a1520', '#0d1a10',
    '#1a0f15', '#200d0d', '#101520', '#0d101a',
    '#1a180d', '#1a0d0d', '#0f1520', '#15200f',
];

// ─────────────────────────────────────────────────────────────────────────────

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
        <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* ── Page Header ─────────────────────────────────────── */}
                <header className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-black to-neutral-700 bg-clip-text text-transparent mb-3">
                        Our Sacred Services
                    </h2>
                    <p className="text-neutral-400 text-base">Click on any service to explore details and pricing</p>
                </header>

                {/* ── Masonry Photo Grid ──────────────────────────────── */}
                <div
                    className="services-mosaic-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gridAutoRows: '230px',
                        gap: '10px',
                    }}
                >
                    {services.map((service, index) => {
                        const rowSpan = ROW_SPAN_PATTERN[index % ROW_SPAN_PATTERN.length];
                        const imageUrl = SERVICE_IMAGES[index % SERVICE_IMAGES.length];
                        const fallback = FALLBACK_COLORS[index % FALLBACK_COLORS.length];

                        return (
                            <motion.div
                                key={service.id}
                                className="service-mosaic-card relative cursor-pointer overflow-hidden rounded-2xl group"
                                style={{ gridRow: `span ${rowSpan}`, backgroundColor: fallback }}
                                onClick={() => setSelectedService(service)}
                                whileHover="hovered"
                                initial="idle"
                            >
                                {/* Full-bleed background image — zooms in on hover */}
                                <motion.div
                                    className="absolute inset-0"
                                    style={{
                                        backgroundImage: `url("${imageUrl}")`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                    variants={{
                                        idle: { scale: 1 },
                                        hovered: { scale: 1.07 },
                                    }}
                                    transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                                />

                                {/* Bottom gradient — ensures text is always readable */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                                {/* Subtle top gradient for Popular badge contrast */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent pointer-events-none" />

                                {/* Popular badge */}
                                {service.popular && (
                                    <div className="absolute top-3.5 right-3.5 bg-white/15 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest border border-white/25 z-10">
                                        Popular
                                    </div>
                                )}

                                {/* ── Always-visible title at bottom ── */}
                                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                                    <p className="text-white/55 text-[10px] font-semibold uppercase tracking-[0.18em] mb-1 drop-shadow">
                                        From ₹{service.items?.[0]?.price}
                                    </p>
                                    <h3 className="text-white text-[1.05rem] font-bold leading-snug drop-shadow-md">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Hover: thin gold border flash */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl border border-white/0 pointer-events-none"
                                    variants={{
                                        idle: { borderColor: 'rgba(255,255,255,0)' },
                                        hovered: { borderColor: 'rgba(255,255,255,0.25)' },
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* ── MODAL — identical to original, minus layoutId ──── */}
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
                            className="relative w-full max-w-4xl bg-neutral-900 rounded-[2.5rem] border border-neutral-800 overflow-hidden shadow-2xl"
                            initial={{ scale: 0.9, opacity: 0, y: 24 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 24 }}
                            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={closeModal}
                                className="absolute top-6 right-6 p-2 text-neutral-500 hover:text-white z-20 transition-colors"
                            >
                                <X />
                            </button>

                            <div className="flex flex-col md:flex-row h-full max-h-[90vh] overflow-y-auto">

                                {/* Sidebar */}
                                <div className="md:w-1/3 p-10 bg-neutral-800/30 border-r border-neutral-800 flex flex-col items-center text-center">
                                    <div className={`w-24 h-24 rounded-3xl bg-neutral-900 flex items-center justify-center mb-6 shadow-xl ${selectedService.iconColor}`}>
                                        {selectedService.icon}
                                    </div>
                                    <h2 className="text-3xl font-bold mb-4 text-white">{selectedService.title}</h2>
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
                                            {selectedTier ? 'Book on WhatsApp' : 'Choose a Tier'}
                                        </button>
                                    </div>
                                </div>

                                {/* Pricing selection */}
                                <div className="flex-1 p-10">
                                    <h4 className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-bold mb-6">
                                        Select your session type
                                    </h4>
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
                                                            <p className={`font-bold text-lg ${active ? 'text-purple-300' : 'text-neutral-100'}`}>
                                                                {item.label}
                                                            </p>
                                                            <p className="text-xs text-neutral-500 mt-1 italic">Click to select this option</p>
                                                        </div>
                                                        <p className={`text-2xl font-black ${active ? 'text-white' : 'text-neutral-400'}`}>
                                                            ₹{item.price}
                                                        </p>
                                                    </div>
                                                </button>
                                            );
                                        })}
                                    </div>

                                    <div className="mt-8 p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 flex gap-3 items-start">
                                        <HelpCircle className="text-blue-400 shrink-0 mt-1" size={18} />
                                        <p className="text-xs text-neutral-400 leading-relaxed">
                                            Payments are processed securely via UPI/Bank Transfer after we connect on WhatsApp.
                                            You will be able to choose your preferred time slot during our chat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── Responsive overrides ───────────────────────────── */}
            <style>{`
        /* Mobile: single column, all cards same height */
        @media (max-width: 639px) {
          .services-mosaic-grid {
            grid-template-columns: 1fr !important;
            grid-auto-rows: 210px !important;
          }
          .service-mosaic-card {
            grid-row: span 1 !important;
          }
        }
        /* Tablet: 2 columns, tall cards keep their span */
        @media (min-width: 640px) and (max-width: 1023px) {
          .services-mosaic-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-auto-rows: 210px !important;
          }
        }
      `}</style>
        </div>
    );
};

export default ServicesGrid;
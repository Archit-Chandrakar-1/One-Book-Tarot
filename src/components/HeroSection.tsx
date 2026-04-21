import { useState, useEffect } from "react";
import carousel1 from "@/assets/carousel-1.jpg";
import carousel2 from "@/assets/carousel-2.jpg";
import carousel3 from "@/assets/carousel-3.jpg";
import jupiter from "@/assets/planet-jupiter.png";

const images = [carousel1, carousel2];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-hero-bg overflow-hidden flex items-center justify-center pt-24 lg:pt-32">

      {/* ✅ Background Image Layer */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/decks/Planet-2.png')",
        }}
      >
        {/* White label subtle overlay */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]" />
      </div>

      {/* Zodiac background decorations */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none z-10">
        <svg viewBox="0 0 1200 800" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="0.5">
          <circle cx="200" cy="400" r="300" />
          <circle cx="200" cy="400" r="250" />
          <circle cx="200" cy="400" r="200" />

          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={200 + 200 * Math.cos(angle)}
                y1={400 + 200 * Math.sin(angle)}
                x2={200 + 300 * Math.cos(angle)}
                y2={400 + 300 * Math.sin(angle)}
              />
            );
          })}

          <text x="200" y="120" textAnchor="middle" fontSize="14" fill="currentColor" stroke="none" opacity="0.5">CAPRICORN</text>
          <text x="420" y="200" textAnchor="middle" fontSize="14" fill="currentColor" stroke="none" opacity="0.5">AQUARIUS</text>
          <text x="80" y="200" textAnchor="middle" fontSize="14" fill="currentColor" stroke="none" opacity="0.5">PISCES</text>
          <text x="480" y="400" textAnchor="middle" fontSize="14" fill="currentColor" stroke="none" opacity="0.5">ARIES</text>

          <rect x="950" y="100" width="160" height="280" rx="8" />
          <rect x="960" y="110" width="140" height="260" rx="6" />
          <circle cx="1030" cy="240" r="40" />
          <line x1="1030" y1="200" x2="1030" y2="280" />
          <line x1="990" y1="240" x2="1070" y2="240" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-20 w-full max-w-[1400px] mb-20 mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-6 lg:gap-12 xl:gap-20 min-h-[80vh]">

        {/* Left text */}
        <div className="relative z-20 mt-15 text-right lg:text-left">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal leading-[0.95] text-foreground tracking-tight">
            The Secrets of
            <br />
            <em className="text-accent">the Cosmos</em>
          </h1>

          <p className="font-display text-xs md:text-sm tracking-[0.3em] uppercase mt-4 text-muted-foreground">
            Tarot Readings
          </p>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-normal mt-6 leading-tight text-foreground">
            Unveil Your
            <br />
            Future with Cards
          </h2>
        </div>

        {/* Center carousel */}
        <div className="relative z-30 mt-20 flex justify-center items-center">

          <div className="w-[340px] h-[450px] md:w-[420px] md:h-[560px] lg:w-[500px] lg:h-[650px] bg-hero-circle rounded-2xl overflow-hidden relative shadow-2xl">

            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Tarot scene ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                style={{ opacity: currentIndex === index ? 1 : 0 }}
                {...(index !== 0 && { loading: "lazy" as const })}
              />
            ))}
          </div>

          {/* Jupiter */}
          <img
            src={jupiter}
            alt="Jupiter"
            className="absolute top-4 right-0 lg:-right-4 w-16 h-16 md:w-20 md:h-20 z-40"
            loading="lazy"
          />

          {/* Dots */}
          <div className="absolute bottom-4 flex gap-2 z-40">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index
                  ? "bg-accent w-6"
                  : "bg-foreground/30"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Right text */}
        <div className="relative z-20">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal leading-[0.95] text-foreground tracking-tight">
            Discover Your
            <br />
            Destiny
            <br />
            <em className="italic">with Stars</em>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
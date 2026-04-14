import { useState, useEffect } from "react";
import carousel1 from "@/assets/carousel-1.jpg";
import carousel2 from "@/assets/carousel-2.jpg";
import carousel3 from "@/assets/carousel-3.jpg";
import jupiter from "@/assets/planet-jupiter.png";

const images = [carousel1, carousel2, carousel3];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-hero-bg overflow-hidden flex items-center justify-center">
      {/* Zodiac background decorations */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <svg viewBox="0 0 1200 800" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="0.5">
          {/* Zodiac wheel left */}
          <circle cx="200" cy="400" r="300" />
          <circle cx="200" cy="400" r="250" />
          <circle cx="200" cy="400" r="200" />
          {/* Lines radiating */}
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
          {/* Zodiac signs text around wheel */}
          <text x="200" y="120" textAnchor="middle" fontSize="14" fill="currentColor" stroke="none" opacity="0.5">CAPRICORN</text>
          <text x="420" y="200" textAnchor="middle" fontSize="14" fill="currentColor" stroke="none" opacity="0.5">AQUARIUS</text>
          <text x="80" y="200" textAnchor="middle" fontSize="14" fill="currentColor" stroke="none" opacity="0.5">PISCES</text>
          <text x="480" y="400" textAnchor="middle" fontSize="14" fill="currentColor" stroke="none" opacity="0.5">ARIES</text>

          {/* Right side tarot card outlines */}
          <rect x="950" y="100" width="160" height="280" rx="8" />
          <rect x="960" y="110" width="140" height="260" rx="6" />
          <circle cx="1030" cy="240" r="40" />
          <line x1="1030" y1="200" x2="1030" y2="280" />
          <line x1="990" y1="240" x2="1070" y2="240" />
        </svg>
      </div>

      {/* Main content grid */}
      <div className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-0 min-h-[80vh]">
        
        {/* Left text */}
        <div className="relative z-10 text-right lg:text-left lg:pr-0">
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
          <p className="mt-6 text-sm md:text-base leading-relaxed text-muted-foreground max-w-sm">
            Step into the mystical world of tarot and uncover the secrets that the future holds. Let our experienced fortune teller guide you through the cards, revealing insights and wisdom tailored just for you.
          </p>
        </div>

        {/* Center carousel */}
        <div className="relative z-20 flex justify-center items-center">
          {/* Circle background */}
          <div className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] lg:w-[460px] lg:h-[460px] bg-hero-circle rounded-2xl overflow-hidden relative">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Tarot scene ${index + 1}`}
                width={800}
                height={1024}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                style={{ opacity: currentIndex === index ? 1 : 0 }}
                {...(index === 0 ? {} : { loading: "lazy" as const })}
              />
            ))}
          </div>

          {/* Jupiter planet */}
          <img
            src={jupiter}
            alt="Jupiter"
            width={80}
            height={80}
            className="absolute top-4 right-0 lg:-right-4 w-16 h-16 md:w-20 md:h-20 z-30"
            loading="lazy"
          />

          {/* Carousel dots */}
          <div className="absolute bottom-4 flex gap-2 z-30">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-accent w-6" : "bg-foreground/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right text */}
        <div className="relative z-10 lg:pl-0">
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

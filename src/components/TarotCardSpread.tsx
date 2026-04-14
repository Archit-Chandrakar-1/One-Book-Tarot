import { useState } from "react";

const tarotCards = [
  "The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor",
  "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit",
  "Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance",
  "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgement", "The World",
];

const zodiacSymbols = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];

const SPREAD_COUNT = 7;
const cardAngles = [-24, -16, -8, 0, 8, 16, 24];
const cardTranslateY = [30, 12, 2, 0, 2, 12, 30];

const TarotCardSpread = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [revealedCard, setRevealedCard] = useState<{ index: number; name: string } | null>(null);

  const handleCardHover = (index: number) => {
    setHoveredIndex(index);
    if (revealedCard?.index !== index) {
      const randomCard = tarotCards[Math.floor(Math.random() * tarotCards.length)];
      setRevealedCard({ index, name: randomCard });
    }
  };

  const handleCardLeave = () => {
    setHoveredIndex(null);
    setRevealedCard(null);
  };

  return (
    <section className="relative min-h-screen bg-hero-bg flex flex-col items-center justify-center overflow-hidden py-20">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg viewBox="0 0 1200 800" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="0.5">
          <circle cx="600" cy="400" r="350" />
          <circle cx="600" cy="400" r="300" />
          <circle cx="600" cy="400" r="250" />
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            return (
              <line key={i} x1={600 + 250 * Math.cos(angle)} y1={400 + 250 * Math.sin(angle)} x2={600 + 350 * Math.cos(angle)} y2={400 + 350 * Math.sin(angle)} />
            );
          })}
          {zodiacSymbols.map((s, i) => {
            const angle = (i * 30 - 90) * (Math.PI / 180);
            return (
              <text key={i} x={600 + 380 * Math.cos(angle)} y={400 + 380 * Math.sin(angle)} textAnchor="middle" dominantBaseline="central" fontSize="18" fill="currentColor" stroke="none" opacity="0.6">
                {s}
              </text>
            );
          })}
        </svg>
      </div>

      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 relative z-10 text-center">
        <em className="text-accent">Tarot</em>
      </h2>
      <p className="text-muted-foreground font-display tracking-[0.3em] uppercase text-sm mb-16 relative z-10">
        Discover your Future
      </p>

      {/* Card spread */}
      <div className="relative z-10 flex items-end justify-center h-[420px] w-full max-w-[800px]">
        {Array.from({ length: SPREAD_COUNT }).map((_, i) => {
          const isHovered = hoveredIndex === i;
          const isRevealed = revealedCard?.index === i;

          return (
            <div
              key={i}
              className="absolute transition-all duration-500 ease-out cursor-pointer"
              style={{
                transform: `rotate(${cardAngles[i]}deg) translateY(${isHovered ? cardTranslateY[i] - 40 : cardTranslateY[i]}px) ${isHovered ? "scale(1.08)" : "scale(1)"}`,
                zIndex: isHovered ? 20 : 10 - Math.abs(i - 3),
                left: `${50 + (i - 3) * 8}%`,
                transformOrigin: "bottom center",
                marginLeft: "-75px",
              }}
              onMouseEnter={() => handleCardHover(i)}
              onMouseLeave={handleCardLeave}
            >
              <div
                className={`relative w-[150px] h-[260px] md:w-[180px] md:h-[310px] rounded-lg border-2 transition-all duration-500 ${
                  isHovered
                    ? "border-accent shadow-[0_0_30px_rgba(196,162,101,0.4)]"
                    : "border-accent/30"
                } ${isRevealed ? "bg-foreground" : "bg-hero-bg"}`}
                style={{
                  perspective: "1000px",
                }}
              >
                {/* Inner border */}
                <div className={`absolute inset-2 rounded border transition-colors duration-500 ${isRevealed ? "border-accent/60" : "border-accent/20"}`}>
                  {/* Corner decorations */}
                  {[
                    "top-1 left-1", "top-1 right-1 rotate-90",
                    "bottom-1 left-1 -rotate-90", "bottom-1 right-1 rotate-180",
                  ].map((pos, idx) => (
                    <div key={idx} className={`absolute ${pos} w-4 h-4`}>
                      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1" className={`w-full h-full ${isRevealed ? "text-accent" : "text-accent/30"}`}>
                        <path d="M0 10 Q0 0 10 0" />
                      </svg>
                    </div>
                  ))}

                  {isRevealed ? (
                    /* Revealed card face */
                    <div className="flex flex-col items-center justify-center h-full text-center p-3 animate-fade-in">
                      <span className="text-accent text-3xl mb-2">✦</span>
                      <p className="font-display text-accent text-sm md:text-base tracking-wider leading-tight">
                        {revealedCard.name}
                      </p>
                      <div className="mt-3 w-8 h-px bg-accent/40" />
                      <span className="text-accent/60 text-xs mt-2 font-display">
                        {zodiacSymbols[Math.floor(Math.random() * zodiacSymbols.length)]}
                      </span>
                    </div>
                  ) : (
                    /* Card back design */
                    <div className="flex items-center justify-center h-full">
                      <div className="relative">
                        {/* Mandala-like pattern */}
                        <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-24 md:h-24 text-accent/30" fill="none" stroke="currentColor" strokeWidth="0.8">
                          <circle cx="50" cy="50" r="40" />
                          <circle cx="50" cy="50" r="30" />
                          <circle cx="50" cy="50" r="20" />
                          <circle cx="50" cy="50" r="8" />
                          {Array.from({ length: 8 }).map((_, j) => {
                            const a = (j * 45 * Math.PI) / 180;
                            return (
                              <g key={j}>
                                <line x1={50 + 20 * Math.cos(a)} y1={50 + 20 * Math.sin(a)} x2={50 + 40 * Math.cos(a)} y2={50 + 40 * Math.sin(a)} />
                                <circle cx={50 + 35 * Math.cos(a)} cy={50 + 35 * Math.sin(a)} r="3" />
                              </g>
                            );
                          })}
                          {Array.from({ length: 12 }).map((_, j) => {
                            const a = (j * 30 * Math.PI) / 180;
                            return <circle key={j} cx={50 + 25 * Math.cos(a)} cy={50 + 25 * Math.sin(a)} r="1.5" fill="currentColor" />;
                          })}
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Instruction text */}
      <p className="relative z-10 mt-12 text-muted-foreground/60 text-sm font-display tracking-widest animate-pulse">
        ✨ Hover & click a card to reveal your fate ✨
      </p>
    </section>
  );
};

export default TarotCardSpread;

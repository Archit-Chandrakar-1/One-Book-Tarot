// Arch-shaped SVG icons matching the reference design
function TarotIcon() {
  return (
    <svg viewBox="0 0 120 160" fill="none" className="w-full h-full">
      {/* Arch frame */}
      <path
        d="M10 160 L10 60 Q10 10 60 10 Q110 10 110 60 L110 160"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Cloud */}
      <ellipse cx="60" cy="45" rx="20" ry="10" stroke="currentColor" strokeWidth="1" fill="none" />
      <ellipse cx="50" cy="50" rx="12" ry="8" stroke="currentColor" strokeWidth="1" fill="none" />
      <ellipse cx="70" cy="50" rx="12" ry="8" stroke="currentColor" strokeWidth="1" fill="none" />
      {/* Moon with star */}
      <circle cx="60" cy="75" r="12" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M55 75 L60 65 L65 75 L60 85 Z" stroke="currentColor" strokeWidth="0.8" fill="currentColor" />
      {/* Hanging ornaments */}
      <line x1="45" y1="90" x2="45" y2="120" stroke="currentColor" strokeWidth="0.8" />
      <line x1="60" y1="90" x2="60" y2="130" stroke="currentColor" strokeWidth="0.8" />
      <line x1="75" y1="90" x2="75" y2="115" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="45" cy="105" r="3" stroke="currentColor" strokeWidth="0.8" fill="none" />
      <circle cx="45" cy="115" r="2" fill="currentColor" />
      <polygon points="60,115 55,125 60,135 65,125" stroke="currentColor" strokeWidth="0.8" fill="none" />
      <circle cx="75" cy="110" r="2" fill="currentColor" />
    </svg>
  )
}

function CrystalIcon() {
  return (
    <svg viewBox="0 0 120 160" fill="none" className="w-full h-full">
      {/* Arch frame */}
      <path
        d="M10 160 L10 60 Q10 10 60 10 Q110 10 110 60 L110 160"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Crystal cluster */}
      <polygon points="60,30 70,60 60,90 50,60" stroke="currentColor" strokeWidth="1" fill="none" />
      <polygon points="45,50 55,70 45,100 35,70" stroke="currentColor" strokeWidth="1" fill="none" />
      <polygon points="75,45 85,65 75,95 65,65" stroke="currentColor" strokeWidth="1" fill="none" />
      {/* Sparkles */}
      <line x1="30" y1="40" x2="40" y2="40" stroke="currentColor" strokeWidth="0.8" />
      <line x1="35" y1="35" x2="35" y2="45" stroke="currentColor" strokeWidth="0.8" />
      <line x1="85" y1="35" x2="95" y2="35" stroke="currentColor" strokeWidth="0.8" />
      <line x1="90" y1="30" x2="90" y2="40" stroke="currentColor" strokeWidth="0.8" />
      {/* Base */}
      <ellipse cx="60" cy="115" rx="30" ry="8" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  )
}

function RelationshipIcon() {
  return (
    <svg viewBox="0 0 120 160" fill="none" className="w-full h-full">
      {/* Arch frame */}
      <path
        d="M10 160 L10 60 Q10 10 60 10 Q110 10 110 60 L110 160"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Silhouette figure */}
      <ellipse cx="60" cy="95" rx="18" ry="35" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="60" cy="55" r="2" fill="currentColor" />
      <line x1="60" y1="60" x2="60" y2="75" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="60" cy="80" r="1.5" fill="currentColor" />
      {/* Moon and diamond above */}
      <path d="M55 25 Q45 35 55 45" stroke="currentColor" strokeWidth="1" fill="none" />
      <polygon points="70,25 75,35 70,45 65,35" stroke="currentColor" strokeWidth="0.8" fill="currentColor" />
      {/* Sparkles */}
      <circle cx="45" cy="30" r="1" fill="currentColor" />
      <circle cx="80" cy="28" r="1" fill="currentColor" />
      <line x1="85" y1="50" x2="92" y2="50" stroke="currentColor" strokeWidth="0.5" />
      <line x1="88" y1="47" x2="88" y2="53" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  )
}

function VedicIcon() {
  return (
    <svg viewBox="0 0 120 160" fill="none" className="w-full h-full">
      {/* Arch frame */}
      <path
        d="M10 160 L10 60 Q10 10 60 10 Q110 10 110 60 L110 160"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Sun center */}
      <circle cx="60" cy="70" r="15" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="60" cy="70" r="8" stroke="currentColor" strokeWidth="1" fill="none" />
      {/* Sun rays */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180
        const x1 = 60 + 20 * Math.cos(angle)
        const y1 = 70 + 20 * Math.sin(angle)
        const x2 = 60 + 35 * Math.cos(angle)
        const y2 = 70 + 35 * Math.sin(angle)
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="1"
          />
        )
      })}
      {/* Small dots at ray ends */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180
        const cx = 60 + 38 * Math.cos(angle)
        const cy = 70 + 38 * Math.sin(angle)
        return (
          <circle
            key={`dot-${i}`}
            cx={cx}
            cy={cy}
            r="1.5"
            fill="currentColor"
          />
        )
      })}
    </svg>
  )
}

const serviceHighlights = [
  {
    icon: TarotIcon,
    title: "Tarot Card Reading",
    description: "Explore current challenges and future possibilities through the symbolism of tarot.",
  },
  {
    icon: CrystalIcon,
    title: "Crystal Healing",
    description: "Harness the energy of crystals to restore balance and promote spiritual wellness.",
  },
  {
    icon: RelationshipIcon,
    title: "Love & Relationships",
    description: "Discover the dynamics of your relationships through astrological insights.",
  },
  {
    icon: VedicIcon,
    title: "Vedic Astrology",
    description: "Receive guidance and clarity on important decisions with ancient Vedic wisdom.",
  },
]

export function ServicesHighlight() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {serviceHighlights.map((service, index) => (
            <a
              key={index}
              href="#services"
              className="group flex flex-col items-center text-center"
            >
              <div className="w-28 h-36 md:w-32 md:h-44 mb-4 text-foreground/80 group-hover:text-foreground transition-colors">
                <service.icon />
              </div>
              <h3 className="font-serif text-base md:text-lg font-medium text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">
                {service.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

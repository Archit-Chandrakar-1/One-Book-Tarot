"use client";

import { useState, useCallback, useRef } from "react";

const TAROT_CARDS = [
  { name: "The Fool", number: "0", suit: "Major Arcana", symbol: "☀", keywords: "New beginnings, innocence, adventure" },
  { name: "The Magician", number: "I", suit: "Major Arcana", symbol: "∞", keywords: "Willpower, skill, manifestation" },
  { name: "The High Priestess", number: "II", suit: "Major Arcana", symbol: "☽", keywords: "Intuition, mystery, inner knowledge" },
  { name: "The Empress", number: "III", suit: "Major Arcana", symbol: "♀", keywords: "Fertility, nature, abundance" },
  { name: "The Emperor", number: "IV", suit: "Major Arcana", symbol: "♂", keywords: "Authority, structure, stability" },
  { name: "The Hierophant", number: "V", suit: "Major Arcana", symbol: "⛪", keywords: "Tradition, guidance, spiritual wisdom" },
  { name: "The Lovers", number: "VI", suit: "Major Arcana", symbol: "♡", keywords: "Love, choices, alignment" },
  { name: "The Chariot", number: "VII", suit: "Major Arcana", symbol: "⚔", keywords: "Determination, control, victory" },
  { name: "Strength", number: "VIII", suit: "Major Arcana", symbol: "♾", keywords: "Courage, patience, compassion" },
  { name: "The Hermit", number: "IX", suit: "Major Arcana", symbol: "⬡", keywords: "Introspection, solitude, guidance" },
  { name: "Wheel of Fortune", number: "X", suit: "Major Arcana", symbol: "⊕", keywords: "Fate, cycles, turning point" },
  { name: "Justice", number: "XI", suit: "Major Arcana", symbol: "⚖", keywords: "Truth, fairness, cause and effect" },
  { name: "The Hanged Man", number: "XII", suit: "Major Arcana", symbol: "⊗", keywords: "Sacrifice, perspective, waiting" },
  { name: "Death", number: "XIII", suit: "Major Arcana", symbol: "⚱", keywords: "Endings, transformation, transition" },
  { name: "Temperance", number: "XIV", suit: "Major Arcana", symbol: "△", keywords: "Balance, patience, moderation" },
  { name: "The Devil", number: "XV", suit: "Major Arcana", symbol: "⛓", keywords: "Bondage, materialism, shadow self" },
  { name: "The Tower", number: "XVI", suit: "Major Arcana", symbol: "⚡", keywords: "Sudden change, upheaval, revelation" },
  { name: "The Star", number: "XVII", suit: "Major Arcana", symbol: "★", keywords: "Hope, renewal, serenity" },
  { name: "The Moon", number: "XVIII", suit: "Major Arcana", symbol: "☾", keywords: "Illusion, fear, the unconscious" },
  { name: "The Sun", number: "XIX", suit: "Major Arcana", symbol: "☀", keywords: "Joy, success, vitality" },
  { name: "Judgement", number: "XX", suit: "Major Arcana", symbol: "☁", keywords: "Reflection, reckoning, absolution" },
  { name: "The World", number: "XXI", suit: "Major Arcana", symbol: "○", keywords: "Completion, integration, wholeness" },
  { name: "Ace of Wands", number: "Ace", suit: "Wands", symbol: "🔥", keywords: "Inspiration, new beginnings, potential" },
  { name: "Two of Wands", number: "II", suit: "Wands", symbol: "⊞", keywords: "Planning, future, vision" },
  { name: "Three of Wands", number: "III", suit: "Wands", symbol: "⊟", keywords: "Expansion, foresight, opportunity" },
  { name: "Four of Wands", number: "IV", suit: "Wands", symbol: "⊞", keywords: "Celebration, harmony, homecoming" },
  { name: "Five of Wands", number: "V", suit: "Wands", symbol: "✕", keywords: "Conflict, competition, tension" },
  { name: "Six of Wands", number: "VI", suit: "Wands", symbol: "★", keywords: "Victory, success, recognition" },
  { name: "Seven of Wands", number: "VII", suit: "Wands", symbol: "↑", keywords: "Perseverance, defense, challenge" },
  { name: "Eight of Wands", number: "VIII", suit: "Wands", symbol: "→", keywords: "Speed, progress, movement" },
  { name: "Nine of Wands", number: "IX", suit: "Wands", symbol: "⚔", keywords: "Resilience, persistence, boundaries" },
  { name: "Ten of Wands", number: "X", suit: "Wands", symbol: "⊕", keywords: "Burden, responsibility, hard work" },
  { name: "Page of Wands", number: "Page", suit: "Wands", symbol: "↗", keywords: "Enthusiasm, exploration, discovery" },
  { name: "Knight of Wands", number: "Knight", suit: "Wands", symbol: "⚡", keywords: "Energy, passion, adventure" },
  { name: "Queen of Wands", number: "Queen", suit: "Wands", symbol: "♛", keywords: "Confidence, independence, charisma" },
  { name: "King of Wands", number: "King", suit: "Wands", symbol: "♚", keywords: "Leadership, vision, entrepreneur" },
  { name: "Ace of Cups", number: "Ace", suit: "Cups", symbol: "⊂", keywords: "Love, emotion, intuition" },
  { name: "Two of Cups", number: "II", suit: "Cups", symbol: "♡", keywords: "Partnership, unity, attraction" },
  { name: "Three of Cups", number: "III", suit: "Cups", symbol: "⊆", keywords: "Celebration, friendship, community" },
  { name: "Four of Cups", number: "IV", suit: "Cups", symbol: "○", keywords: "Apathy, contemplation, disconnection" },
  { name: "Five of Cups", number: "V", suit: "Cups", symbol: "⊘", keywords: "Regret, loss, disappointment" },
  { name: "Six of Cups", number: "VI", suit: "Cups", symbol: "☆", keywords: "Nostalgia, joy, innocence" },
  { name: "Seven of Cups", number: "VII", suit: "Cups", symbol: "◈", keywords: "Fantasy, illusion, wishful thinking" },
  { name: "Eight of Cups", number: "VIII", suit: "Cups", symbol: "→", keywords: "Withdrawal, disappointment, letting go" },
  { name: "Nine of Cups", number: "IX", suit: "Cups", symbol: "★", keywords: "Contentment, satisfaction, gratitude" },
  { name: "Ten of Cups", number: "X", suit: "Cups", symbol: "♡", keywords: "Harmony, happiness, fulfillment" },
  { name: "Page of Cups", number: "Page", suit: "Cups", symbol: "☽", keywords: "Sensitivity, creativity, intuition" },
  { name: "Knight of Cups", number: "Knight", suit: "Cups", symbol: "♘", keywords: "Romance, charm, imagination" },
  { name: "Queen of Cups", number: "Queen", suit: "Cups", symbol: "♛", keywords: "Empathy, care, emotional security" },
  { name: "King of Cups", number: "King", suit: "Cups", symbol: "♚", keywords: "Emotional balance, compassion, wisdom" },
  { name: "Ace of Swords", number: "Ace", suit: "Swords", symbol: "†", keywords: "Truth, clarity, breakthrough" },
  { name: "Two of Swords", number: "II", suit: "Swords", symbol: "✕", keywords: "Indecision, stalemate, denial" },
  { name: "Three of Swords", number: "III", suit: "Swords", symbol: "♡", keywords: "Heartbreak, grief, sorrow" },
  { name: "Four of Swords", number: "IV", suit: "Swords", symbol: "◻", keywords: "Rest, recuperation, contemplation" },
  { name: "Five of Swords", number: "V", suit: "Swords", symbol: "↘", keywords: "Conflict, defeat, hollow victory" },
  { name: "Six of Swords", number: "VI", suit: "Swords", symbol: "→", keywords: "Transition, moving on, progress" },
  { name: "Seven of Swords", number: "VII", suit: "Swords", symbol: "◈", keywords: "Deception, strategy, cunning" },
  { name: "Eight of Swords", number: "VIII", suit: "Swords", symbol: "⊗", keywords: "Restriction, self-limiting beliefs" },
  { name: "Nine of Swords", number: "IX", suit: "Swords", symbol: "☁", keywords: "Anxiety, worry, nightmares" },
  { name: "Ten of Swords", number: "X", suit: "Swords", symbol: "⊕", keywords: "Endings, betrayal, rock bottom" },
  { name: "Page of Swords", number: "Page", suit: "Swords", symbol: "↑", keywords: "Curiosity, communication, vigilance" },
  { name: "Knight of Swords", number: "Knight", suit: "Swords", symbol: "⚔", keywords: "Ambition, action, drive" },
  { name: "Queen of Swords", number: "Queen", suit: "Swords", symbol: "♛", keywords: "Clarity, independence, direct communication" },
  { name: "King of Swords", number: "King", suit: "Swords", symbol: "♚", keywords: "Authority, truth, clear thinking" },
  { name: "Ace of Pentacles", number: "Ace", suit: "Pentacles", symbol: "⊕", keywords: "Prosperity, opportunity, new path" },
  { name: "Two of Pentacles", number: "II", suit: "Pentacles", symbol: "∞", keywords: "Balance, adaptability, juggling" },
  { name: "Three of Pentacles", number: "III", suit: "Pentacles", symbol: "△", keywords: "Teamwork, collaboration, learning" },
  { name: "Four of Pentacles", number: "IV", suit: "Pentacles", symbol: "◻", keywords: "Security, control, conservation" },
  { name: "Five of Pentacles", number: "V", suit: "Pentacles", symbol: "⊘", keywords: "Hardship, loss, isolation" },
  { name: "Six of Pentacles", number: "VI", suit: "Pentacles", symbol: "⊕", keywords: "Generosity, charity, receiving" },
  { name: "Seven of Pentacles", number: "VII", suit: "Pentacles", symbol: "○", keywords: "Patience, persistence, long-term vision" },
  { name: "Eight of Pentacles", number: "VIII", suit: "Pentacles", symbol: "◈", keywords: "Diligence, craftsmanship, mastery" },
  { name: "Nine of Pentacles", number: "IX", suit: "Pentacles", symbol: "★", keywords: "Abundance, luxury, self-sufficiency" },
  { name: "Ten of Pentacles", number: "X", suit: "Pentacles", symbol: "⊕", keywords: "Legacy, inheritance, long-term success" },
  { name: "Page of Pentacles", number: "Page", suit: "Pentacles", symbol: "◎", keywords: "Ambition, planning, studious nature" },
  { name: "Knight of Pentacles", number: "Knight", suit: "Pentacles", symbol: "♘", keywords: "Routine, efficiency, hard work" },
  { name: "Queen of Pentacles", number: "Queen", suit: "Pentacles", symbol: "♛", keywords: "Nurturing, practical, down-to-earth" },
  { name: "King of Pentacles", number: "King", suit: "Pentacles", symbol: "♚", keywords: "Wealth, business, security" },
];

const CARD_ROTATIONS = [-36, -22, -10, 2, 14, 28];
const CARD_OFFSETS = ["-26vw", "-13vw", "-2vw", "2vw", "13vw", "26vw"] as const;
const Z_ORDERS = [4, 5, 7, 7, 5, 4];

function getRandomCard(): (typeof TAROT_CARDS)[0] {
  return TAROT_CARDS[Math.floor(Math.random() * TAROT_CARDS.length)];
}

function getSuitColor(suit: string): string {
  switch (suit) {
    case "Major Arcana": return "#c8a96e";
    case "Wands": return "#d4844a";
    case "Cups": return "#7aa8c8";
    case "Swords": return "#a0b8a0";
    case "Pentacles": return "#c8b86e";
    default: return "#c8a96e";
  }
}

interface CardState {
  card: (typeof TAROT_CARDS)[0] | null;
  revealed: boolean;
}

export default function TarotSpread() {
  /* ── Desktop state ── */
  const [cards, setCards] = useState<CardState[]>(
    Array(6).fill(null).map(() => ({ card: null, revealed: false }))
  );

  /* ── Mobile state ── */
  const [mobileIndex, setMobileIndex] = useState(0);
  const [mobileCards, setMobileCards] = useState<CardState[]>(
    Array(6).fill(null).map(() => ({ card: null, revealed: false }))
  );

  const touchStartX = useRef(0);
  const didSwipe = useRef(false);

  /* ── Desktop handlers ── */
  const handleHover = useCallback((index: number) => {
    setCards(prev => {
      const next = [...prev];
      if (!next[index].revealed) next[index] = { card: getRandomCard(), revealed: true };
      return next;
    });
  }, []);

  const handleLeave = useCallback((index: number) => {
    setCards(prev => {
      const next = [...prev];
      next[index] = { card: null, revealed: false };
      return next;
    });
  }, []);

  /* ── Mobile handlers ── */
  const handleMobileTap = useCallback((index: number) => {
    setMobileCards(prev => {
      const next = [...prev];
      next[index] = next[index].revealed
        ? { card: null, revealed: false }
        : { card: getRandomCard(), revealed: true };
      return next;
    });
  }, []);

  const goNext = () => setMobileIndex(p => Math.min(p + 1, 5));
  const goPrev = () => setMobileIndex(p => Math.max(p - 1, 0));

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    didSwipe.current = false;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 40) {
      didSwipe.current = true;
      dx > 0 ? goNext() : goPrev();
    }
  };

  const onCardClick = () => {
    if (!didSwipe.current) handleMobileTap(mobileIndex);
  };

  const cur = mobileCards[mobileIndex];
  const mSuitColor = cur.card ? getSuitColor(cur.card.suit) : "#c8a96e";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap');

        /* ═══════════════════════════════════
           ROOT
        ═══════════════════════════════════ */
        .tarot-root {
          width: 99vw;
          background: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          font-family: 'Cormorant Garamond', serif;
        }

        .tarot-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 50% at 50% 100%, rgba(200,169,110,0.12) 0%, transparent 70%),
            radial-gradient(circle at 15% 40%, rgba(200,169,110,0.07) 0%, transparent 55%),
            radial-gradient(circle at 85% 35%, rgba(200,169,110,0.06) 0%, transparent 50%);
          pointer-events: none;
        }

        .moon-arc {
          position: absolute;
          bottom: -22vw;
          left: 50%;
          transform: translateX(-50%);
          width: 90vw;
          height: 45vw;
          border: 1px solid rgba(200,169,110,0.13);
          border-bottom: none;
          border-radius: 90vw 90vw 0 0;
          pointer-events: none;
          z-index: 0;
        }

        .star-deco {
          position: absolute;
          color: rgba(200,169,110,0.32);
          font-size: 18px;
          pointer-events: none;
          line-height: 1;
          z-index: 0;
        }

        /* ═══════════════════════════════════
           SHARED CARD PARTS
        ═══════════════════════════════════ */
        .card-revealed-border {
          position: absolute;
          inset: 6px;
          border: 1px solid rgba(200,169,110,0.28);
          border-radius: clamp(4px, 0.8vw, 12px);
          pointer-events: none;
        }

        .card-back-corner {
          position: absolute;
          width: 16px; height: 16px;
          border-color: rgba(200,169,110,0.55);
          border-style: solid; border-width: 0;
          z-index: 1;
        }
        .card-back-corner.tl { top:10px;    left:10px;  border-top-width:2px;    border-left-width:2px;  border-radius:3px 0 0 0; }
        .card-back-corner.tr { top:10px;    right:10px; border-top-width:2px;    border-right-width:2px; border-radius:0 3px 0 0; }
        .card-back-corner.bl { bottom:10px; left:10px;  border-bottom-width:2px; border-left-width:2px;  border-radius:0 0 0 3px; }
        .card-back-corner.br { bottom:10px; right:10px; border-bottom-width:2px; border-right-width:2px; border-radius:0 0 3px 0; }

        @keyframes revealCard {
          0%   { transform: rotateY(80deg) scale(0.85); opacity: 0; }
          100% { transform: rotateY(0deg)  scale(1);    opacity: 1; }
        }

        /* ═══════════════════════════════════
           MOBILE VIEW  (< 768 px)
        ═══════════════════════════════════ */
        .mobile-view {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: 100vh;
          position: relative;
          z-index: 2;
          gap: 20px;
          padding: 24px 0;
          box-sizing: border-box;
        }

        /* The card itself */
        .m-card-wrapper {
          width: 62vw;
          height: calc(62vw * 1.72);
          max-width: 260px;
          max-height: 447px;
          cursor: pointer;
          position: relative;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
        }

        .m-card-face {
          width: 100%;
          height: 100%;
          border-radius: clamp(8px, 2.5vw, 20px);
          position: relative;
          overflow: hidden;
          box-shadow:
            0 24px 64px rgba(100,75,30,0.22),
            0  4px 14px rgba(100,75,30,0.12);
        }

        .m-card-back {
          background-color: white;
          background-image: url('/decks/tarot-back.jpg');
          background-size: cover;
          background-position: center;
          border: 1.5px solid rgba(200,169,110,0.40);
        }

        .m-card-revealed {
          background: #0c0b10;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: clamp(14px, 4vw, 28px) clamp(10px, 3vw, 22px);
          animation: revealCard 0.42s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* Shared inner card text pieces reused on mobile */
        .card-number {
          font-family: 'Cinzel', serif;
          font-size: clamp(7px, 2.2vw, 13px);
          letter-spacing: 0.2em;
          color: rgba(200,169,110,0.55);
          align-self: flex-start;
          z-index: 1;
        }

        .card-symbol-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: clamp(4px, 1.2vw, 10px);
          flex: 1;
          justify-content: center;
          z-index: 1;
        }

        .card-symbol {
          font-size: clamp(28px, 8vw, 60px);
          line-height: 1;
        }

        .card-name {
          font-family: 'Cinzel', serif;
          font-size: clamp(8px, 2.2vw, 13px);
          letter-spacing: 0.14em;
          color: #e5d5b0;
          text-align: center;
          font-weight: 500;
          line-height: 1.4;
          text-transform: uppercase;
        }

        .card-suit-tag {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(7px, 1.8vw, 11px);
          letter-spacing: 0.1em;
          font-style: italic;
          text-align: center;
        }

        .m-keywords {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(9px, 2.5vw, 13px);
          color: rgba(200,169,110,0.6);
          font-style: italic;
          text-align: center;
          letter-spacing: 0.06em;
          line-height: 1.5;
          z-index: 1;
        }

        /* Navigation row */
        .m-nav {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .m-nav-btn {
          background: none;
          border: 1px solid rgba(200,169,110,0.38);
          color: rgba(200,169,110,0.85);
          width: 38px; height: 38px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Cormorant Garamond', serif;
          transition: border-color 0.2s, color 0.2s;
          line-height: 1;
          padding: 0;
        }
        .m-nav-btn:disabled { opacity: 0.25; cursor: default; }
        .m-nav-btn:not(:disabled):hover { border-color: rgba(200,169,110,0.75); color: rgba(200,169,110,1); }

        .m-dots {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .m-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: rgba(200,169,110,0.25);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: background 0.22s, transform 0.22s;
        }
        .m-dot.active {
          background: rgba(200,169,110,0.9);
          transform: scale(1.25);
        }

        .m-hint {
          font-family: 'Cormorant Garamond', serif;
          font-size: 12px;
          color: rgba(140,110,65,0.48);
          letter-spacing: 0.18em;
          font-style: italic;
          text-align: center;
          margin: 0;
        }

        /* ═══════════════════════════════════
           DESKTOP VIEW  (≥ 768 px)
        ═══════════════════════════════════ */
        .desktop-view {
          display: none;
          width: 100%;
          position: relative;
          z-index: 2;
          flex-direction: column;
          align-items: center;
        }

        @media (min-width: 768px) {
          .mobile-view  { display: none; }
          .desktop-view { display: flex; }

          /* Tighten the root so whitespace is minimal */
          .tarot-root {
            justify-content: center;
            padding: 2vh 0;
          }
        }

        /* Desktop spread title */
        .spread-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(9px, 1.4vw, 13px);
          letter-spacing: 0.4em;
          color: rgba(140,110,65,0.55);
          text-transform: uppercase;
          margin-bottom: clamp(8px, 1.5vw, 20px);
          font-weight: 400;
        }

        /*
         * Container height = card height + a little room for the hover lift.
         * Cards are absolute bottom:0, so they grow upward from here.
         */
        .cards-container {
          position: relative;
          width: 100%;
          height: clamp(220px, 28vw, 500px);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          /* no margin-bottom — parent padding handles spacing */
        }

        .card-wrapper {
          position: absolute;
          transform-origin: bottom center;
          bottom: 0;
          cursor: pointer;
        }
        .card-wrapper:hover { z-index: 50 !important; }
        .card-wrapper:hover .card-inner {
          transform: translateY(-8vw) scale(1.05);
        }

        .card-inner {
          transition: transform 0.38s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
        }

        .card-face {
          width:  clamp(60px, 13vw, 240px);
          height: clamp(102px, 22.1vw, 408px);
          border-radius: clamp(6px, 1vw, 16px);
          position: relative;
          overflow: hidden;
          box-shadow:
            0 16px 48px rgba(100,75,30,0.20),
            0  3px 10px rgba(100,75,30,0.10);
        }

        .card-back {
          background-color: white;
          background-image: url('/decks/tarot-back.jpg');
          background-size: cover;
          background-position: center;
          border: 1.5px solid rgba(200,169,110,0.40);
        }

        .card-revealed {
          background: #0c0b10;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: clamp(8px, 1.2vw, 20px) clamp(6px, 1vw, 16px);
          animation: revealCard 0.42s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* Override symbol/name sizes for desktop (smaller cards) */
        .card-face .card-symbol { font-size: clamp(18px, 2.8vw, 52px); }
        .card-face .card-name   { font-size: clamp(6px, 0.75vw, 12px); }
        .card-face .card-number { font-size: clamp(7px, 0.9vw, 13px); }
        .card-face .card-suit-tag { font-size: clamp(5px, 0.65vw, 10px); }

        /* Tooltip */
        .tooltip-outer {
          position: absolute;
          bottom: calc(100% + 14px);
          left: 50%;
          transform: translateX(-50%);
          pointer-events: none;
          z-index: 100;
          opacity: 0;
          transition: opacity 0.22s ease 0.14s;
          white-space: nowrap;
        }
        .card-wrapper:hover .tooltip-outer { opacity: 1; }

        .tooltip-inner {
          background: rgba(12,11,16,0.96);
          border: 1px solid rgba(200,169,110,0.38);
          border-radius: 8px;
          padding: 10px 14px;
          text-align: center;
        }
        .tooltip-title {
          font-family: 'Cinzel', serif;
          font-size: 11px;
          letter-spacing: 0.2em;
          color: #e8d9b8;
          font-weight: 500;
          margin-bottom: 4px;
          text-transform: uppercase;
        }
        .tooltip-keywords {
          font-family: 'Cormorant Garamond', serif;
          font-size: 12px;
          color: rgba(200,169,110,0.78);
          font-style: italic;
        }
        .tooltip-arrow {
          width: 0; height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 6px solid rgba(200,169,110,0.38);
          margin: 0 auto;
        }

        .bottom-text {
          padding: clamp(8px, 1.5vw, 18px) 0 clamp(8px, 1.5vw, 18px);
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(11px, 1.2vw, 16px);
          color: rgba(140,110,65,0.48);
          letter-spacing: 0.18em;
          font-style: italic;
          text-align: center;
          margin: 0;
        }
      `}</style>

      <div className="tarot-root">
        <div className="moon-arc" />

        {[
          { style: { top: "10%", left: "8%" } },
          { style: { top: "16%", right: "10%" } },
          { style: { top: "45%", left: "4%" } },
          { style: { top: "42%", right: "5%" } },
          { style: { bottom: "28%", left: "16%" } },
          { style: { bottom: "26%", right: "18%" } },
        ].map((s, i) => (
          <span key={i} className="star-deco" style={s.style}>✦</span>
        ))}

        {/* ── MOBILE SINGLE-CARD VIEW ── */}
        <div
          className="mobile-view"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="m-card-wrapper" onClick={onCardClick}>
            {cur.revealed && cur.card ? (
              <div className="m-card-face m-card-revealed">
                <div className="card-revealed-border" />
                <span className="card-number">{cur.card.number}</span>
                <div className="card-symbol-wrap">
                  <span className="card-symbol" style={{ color: mSuitColor }}>{cur.card.symbol}</span>
                  <span className="card-name">{cur.card.name}</span>
                  <span className="card-suit-tag" style={{ color: mSuitColor }}>{cur.card.suit}</span>
                </div>
                <div className="m-keywords">{cur.card.keywords}</div>
              </div>
            ) : (
              <div className="m-card-face m-card-back">
                <span className="card-back-corner tl" />
                <span className="card-back-corner tr" />
                <span className="card-back-corner bl" />
                <span className="card-back-corner br" />
              </div>
            )}
          </div>

          <div className="m-nav">
            <button className="m-nav-btn" onClick={goPrev} disabled={mobileIndex === 0}>‹</button>
            <div className="m-dots">
              {Array(6).fill(0).map((_, i) => (
                <button
                  key={i}
                  className={`m-dot${i === mobileIndex ? " active" : ""}`}
                  onClick={() => setMobileIndex(i)}
                />
              ))}
            </div>
            <button className="m-nav-btn" onClick={goNext} disabled={mobileIndex === 5}>›</button>
          </div>

          <p className="m-hint">
            {cur.revealed ? "Tap to flip back · Swipe to navigate" : "Tap to reveal · Swipe to navigate"}
          </p>
        </div>

        {/* ── DESKTOP / TABLET FAN SPREAD ── */}
        <div className="desktop-view">
          <div className="spread-title">Your Reading Awaits</div>

          <div className="cards-container">
            {CARD_ROTATIONS.map((rot, i) => {
              const state = cards[i];
              const suitColor = state.card ? getSuitColor(state.card.suit) : "#c8a96e";

              return (
                <div
                  key={i}
                  className="card-wrapper"
                  style={{
                    transform: `translateX(${CARD_OFFSETS[i]}) rotate(${rot}deg)`,
                    zIndex: Z_ORDERS[i],
                  }}
                  onMouseEnter={() => handleHover(i)}
                  onMouseLeave={() => handleLeave(i)}
                >
                  <div className="card-inner">
                    {state.revealed && state.card ? (
                      <div className="card-face card-revealed">
                        <div className="card-revealed-border" />
                        <span className="card-number">{state.card.number}</span>
                        <div className="card-symbol-wrap">
                          <span className="card-symbol" style={{ color: suitColor }}>{state.card.symbol}</span>
                          <span className="card-name">{state.card.name}</span>
                          <span className="card-suit-tag" style={{ color: suitColor }}>{state.card.suit}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="card-face card-back">
                        <span className="card-back-corner tl" />
                        <span className="card-back-corner tr" />
                        <span className="card-back-corner bl" />
                        <span className="card-back-corner br" />
                      </div>
                    )}

                    {state.revealed && state.card && (
                      <div className="tooltip-outer">
                        <div className="tooltip-inner">
                          <div className="tooltip-title">{state.card.name}</div>
                          <div className="tooltip-keywords">{state.card.keywords}</div>
                        </div>
                        <div className="tooltip-arrow" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="bottom-text">Hover to reveal your card</p>
        </div>
      </div>
    </>
  );
}
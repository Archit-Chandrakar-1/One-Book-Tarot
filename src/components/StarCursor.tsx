import { useEffect, useRef } from "react";

interface Sparkle {
  x: number;
  y: number;
  id: number;
  createdAt: number;
}

const StarCursor = () => {
  const sparklesRef = useRef<Sparkle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const sparkle: Sparkle = {
        x: e.clientX,
        y: e.clientY,
        id: idRef.current++,
        createdAt: Date.now(),
      };
      sparklesRef.current.push(sparkle);

      const el = document.createElement("div");
      el.className = "sparkle-trail";
      el.textContent = "⭐";
      el.style.left = `${sparkle.x}px`;
      el.style.top = `${sparkle.y}px`;
      containerRef.current?.appendChild(el);

      setTimeout(() => {
        el.remove();
        sparklesRef.current = sparklesRef.current.filter((s) => s.id !== sparkle.id);
      }, 600);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[9999]" />;
};

export default StarCursor;

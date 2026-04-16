import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Decks", path: "/decks" },
    { name: "Spreads", path: "/spreads" },
    { name: "About", path: "/about" },
  ];

  // WhatsApp configuration
  const whatsappNumber = "917489021356"; // Replace with your actual number
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi Meenakshi, I'd like to inquire about a Tarot session.`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/90 backdrop-blur-xl border-b border-white/10 overflow-hidden">
      {/* Sparkle Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="star w-1 h-1 top-4 left-1/4" style={{ animationDelay: '0s' }}></div>
        <div className="star w-1 h-1 top-10 left-1/2" style={{ animationDelay: '1s' }}></div>
        <div className="star w-1 h-1 top-2 left-3/4" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between h-20 relative z-10">

        {/* Branding Area */}
        <Link to="/" className="text-white flex items-center gap-3 group">
          <div className="w-8 h-8 flex items-center justify-center">
            <Sparkles className="text-purple-400 group-hover:rotate-12 transition-transform" />
          </div>
          <span className="text-xs md:text-sm tracking-widest uppercase font-light">
            One Book <span className="font-bold">Tarot</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-[10px] tracking-[0.2em] uppercase font-bold transition-all ${isActive ? "text-white border-b border-white pb-1" : "text-neutral-400 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          {/* WhatsApp Contact Link */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white text-[10px] tracking-[0.2em] uppercase font-bold transition-all"
          >
            Contact
          </a>
        </div>

        {/* CTA Button - Points to the booking page */}
        <div className="hidden md:block">
          <Link
            to="/book"
            className="px-6 py-2 bg-white text-black rounded-full text-[10px] font-black tracking-widest hover:bg-purple-100 transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          >
            BOOK CONSULTATION
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/10 p-6 space-y-4 flex flex-col items-center animate-in slide-in-from-top duration-300">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="text-white text-sm tracking-widest uppercase font-bold"
            >
              {item.name}
            </Link>
          ))}
          <a href={whatsappUrl} className="text-white text-sm tracking-widest uppercase font-bold">Contact</a>
          <Link
            to="/book"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-3 bg-white text-black rounded-xl text-xs font-black tracking-widest"
          >
            BOOK CONSULTATION
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
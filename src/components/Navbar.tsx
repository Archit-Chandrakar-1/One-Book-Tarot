import { NavLink } from "@/components/NavLink";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-sm border-b border-border/20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        <a href="/" className="font-display text-xl text-primary-foreground tracking-wider flex items-center gap-2">
          ✨ <span>Cosmic Tarot</span> ✨
        </a>
        <div className="hidden md:flex items-center gap-8">
          {["Home", "Readings", "About", "Contact"].map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-primary-foreground/70 hover:text-accent transition-colors text-sm tracking-[0.2em] uppercase font-display"
              activeClassName="text-accent"
            >
              {item}
            </NavLink>
          ))}
        </div>
        <a
          href="#book"
          className="hidden md:inline-flex px-5 py-2 bg-accent text-accent-foreground rounded-full text-sm font-display tracking-wider hover:bg-accent/90 transition-colors"
        >
          ✨ Book Reading
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

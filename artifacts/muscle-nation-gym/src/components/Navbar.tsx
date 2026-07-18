import { Link } from "wouter";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Plans", href: "#plans" },
    { name: "Trainers", href: "#trainers" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-border py-4 shadow-md"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <div className="flex flex-col cursor-pointer group">
            <span className="font-display text-3xl md:text-4xl text-foreground leading-none group-hover:text-primary transition-colors">
              THE MUSCLE NATION
            </span>
            <span className="font-condensed text-primary text-sm tracking-[0.3em] uppercase">
              Gym
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="font-condensed text-lg uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#plans"
            className="bg-primary text-primary-foreground px-6 py-2 font-condensed uppercase tracking-widest text-lg btn-glow hover:bg-primary/90 transition-colors cursor-pointer"
          >
            Join Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border py-4 px-4 flex flex-col gap-4 shadow-xl">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block font-condensed text-xl uppercase tracking-wider text-foreground hover:text-primary transition-colors py-2 border-b border-border/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#plans"
            className="w-full bg-primary text-primary-foreground px-6 py-3 font-condensed uppercase tracking-widest text-lg text-center mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Join Now
          </a>
        </div>
      )}
    </nav>
  );
}
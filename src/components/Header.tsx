import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Inicio", href: "#hero" },
    { label: "Servicios", href: "#servicios" },
    { label: "Precios", href: "#precios" },
    { label: "Calendario", href: "#calendario" },
    { label: "Aula Virtual", href: "#aula" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#hero"
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center neon-glow-cyan">
            <span className="font-display font-bold text-primary-foreground text-sm">AI</span>
          </div>
          <span className="font-display font-bold text-lg hidden sm:block">
            <span className="text-primary neon-text-cyan">AI</span>{" "}
            <span className="text-foreground">Data Academy</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.a
          href="#precios"
          className="hidden md:block cyber-button text-xs text-primary-foreground relative z-10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Comenzar</span>
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.nav
        className={`lg:hidden absolute top-full left-0 right-0 glass-card border-t border-border/50 ${
          isMenuOpen ? "block" : "hidden"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-muted-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#precios"
            className="cyber-button text-center text-sm text-primary-foreground mt-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="relative z-10">Comenzar</span>
          </a>
        </div>
      </motion.nav>
    </motion.header>
  );
};

export default Header;

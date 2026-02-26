import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const normalizeUrl = (url: string) => {
  // Asegura que siempre sea URL absoluta (evita que el router lo trate como ruta interna)
  if (!url) return "#";
  return url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
};

const Footer = () => {
  const socials = [
    // Cambia esto por tu Twitter real si corresponde:
    // { icon: Twitter, href: "https://twitter.com/TU_USUARIO", label: "Twitter" },
    { icon: Twitter, href: "https://angeltroncoso.github.io/business_analytics_pro/", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/angeltroncoso/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/AngelTroncoso", label: "GitHub" },
  ];

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground text-xs">AI</span>
            </div>
            <span className="font-display font-bold text-sm">
              <span className="text-primary">AI</span> Data Academy
            </span>
          </motion.div>

          {/* Copyright */}
          <motion.p
            className="text-muted-foreground text-sm flex items-center gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Hecho con <Heart className="w-4 h-4 text-red-500" /> en Chile © {new Date().getFullYear()}
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {socials.map((social) => (
              <a
                key={social.label}
                href={normalizeUrl(social.href)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:neon-glow-cyan transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

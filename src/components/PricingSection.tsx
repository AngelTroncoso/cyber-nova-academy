import { motion } from "framer-motion";
import { Check, Rocket, Shield, Clock } from "lucide-react";

const features = [
  "Clase 1:1 en vivo",
  "Material personalizado",
  "Grabación de la sesión",
  "Soporte entre clases",
  "Ejercicios prácticos",
  "Certificado de avance",
];

const PricingSection = () => {
  return (
    <section id="precios" className="relative py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-secondary font-display text-sm uppercase tracking-widest">
            Inversión en tu Futuro
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mt-4 mb-6">
            <span className="text-secondary neon-text-violet">Precio</span> Transparente
          </h2>
          <p className="text-muted-foreground">
            Sin suscripciones complicadas. Paga solo por las sesiones que necesitas.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="glass-card p-8 lg:p-10 relative overflow-hidden neon-glow-violet">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary/20 px-3 py-1 rounded-full mb-6">
              <Rocket className="w-4 h-4 text-secondary" />
              <span className="text-sm text-secondary font-medium">Más Popular</span>
            </div>

            {/* Title */}
            <h3 className="font-display font-bold text-2xl mb-2">Sesión Individual</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Una hora de mentoría personalizada
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-8">
              <span className="font-display font-bold text-5xl lg:text-6xl text-primary neon-text-cyan">
                $15.000
              </span>
              <span className="text-muted-foreground">CLP / hora</span>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground/90">{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.button
              className="w-full cyber-button text-primary-foreground flex items-center justify-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-3 font-display">
                <Rocket className="w-5 h-5 group-hover:animate-pulse" />
                Pagar Sesión
              </span>
            </motion.button>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 mt-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4" />
                Pago Seguro
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                Agenda Flexible
              </div>
            </div>

            <p className="text-center text-xs text-muted-foreground mt-4">
              Integrado con Stripe y Mercado Pago
            </p>
          </div>
        </motion.div>

        {/* Package offers */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="glass-card px-6 py-3 rounded-full text-sm">
            <span className="text-muted-foreground">Pack 5 sesiones: </span>
            <span className="text-primary font-semibold">$67.500 CLP</span>
            <span className="text-secondary ml-2 text-xs">(10% OFF)</span>
          </div>
          <div className="glass-card px-6 py-3 rounded-full text-sm">
            <span className="text-muted-foreground">Pack 10 sesiones: </span>
            <span className="text-primary font-semibold">$120.000 CLP</span>
            <span className="text-secondary ml-2 text-xs">(20% OFF)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;

import { motion } from "framer-motion";
import { Database, Brain, Wand2, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Análisis de Datos con Python",
    description:
      "Domina Pandas, NumPy, y visualización de datos. Aprende a extraer insights valiosos de cualquier dataset.",
    features: ["Python & Pandas", "SQL Avanzado", "Power BI / Tableau", "ETL & Pipelines"],
    gradient: "from-primary to-accent",
    glowClass: "neon-glow-cyan",
  },
  {
    icon: Brain,
    title: "Machine Learning Avanzado",
    description:
      "Desde regresión hasta redes neuronales. Construye modelos predictivos que resuelvan problemas reales.",
    features: ["Scikit-learn", "TensorFlow", "Modelos Predictivos", "Feature Engineering"],
    gradient: "from-secondary to-neon-pink",
    glowClass: "neon-glow-violet",
  },
  {
    icon: Wand2,
    title: "IA Generativa",
    description:
      "Aprende a usar y construir aplicaciones con LLMs, prompts avanzados y APIs de IA de última generación.",
    features: ["ChatGPT & Claude", "LangChain", "Prompt Engineering", "APIs de OpenAI"],
    gradient: "from-accent to-secondary",
    glowClass: "neon-glow-cyan",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="relative py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-display text-sm uppercase tracking-widest">
            Programas de Formación
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mt-4 mb-6">
            Elige tu <span className="text-primary neon-text-cyan">Camino</span>
          </h2>
          <p className="text-muted-foreground">
            Tres rutas especializadas para convertirte en un profesional de datos
            e inteligencia artificial.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`glass-card p-6 lg:p-8 group hover:${service.glowClass} transition-all duration-500 cursor-pointer`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-xl mb-3 flex items-center gap-2 group-hover:text-primary transition-colors">
                {service.title}
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-foreground/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <div
                  className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br ${service.gradient} blur-xl opacity-50`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

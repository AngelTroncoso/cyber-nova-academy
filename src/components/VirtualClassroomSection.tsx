import { motion } from "framer-motion";
import { Video, Code2, Monitor, MessageSquare, Folder, Cpu } from "lucide-react";

const tools = [
  {
    icon: Video,
    name: "Google Meet",
    description: "Videollamadas en alta definición para clases interactivas",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
  },
  {
    icon: Monitor,
    name: "Zoom",
    description: "Compartir pantalla y grabación de sesiones",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    icon: Code2,
    name: "VS Code Live Share",
    description: "Programación colaborativa en tiempo real",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
  },
  {
    icon: MessageSquare,
    name: "Discord",
    description: "Comunidad y soporte entre sesiones",
    color: "text-indigo-400",
    bgColor: "bg-indigo-400/10",
  },
  {
    icon: Folder,
    name: "Google Drive",
    description: "Material de estudio y recursos compartidos",
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
  },
  {
    icon: Cpu,
    name: "Google Colab",
    description: "Notebooks en la nube con GPU gratuita",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
  },
];

const VirtualClassroomSection = () => {
  return (
    <section id="aula" className="relative py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-secondary font-display text-sm uppercase tracking-widest">
            Herramientas Profesionales
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mt-4 mb-6">
            <span className="text-secondary neon-text-violet">Aula</span> Virtual
          </h2>
          <p className="text-muted-foreground">
            Utilizamos las mejores herramientas del mercado para una experiencia
            de aprendizaje inmersiva y efectiva.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              className="glass-card p-6 group hover:neon-glow-cyan transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div
                className={`w-12 h-12 rounded-xl ${tool.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <tool.icon className={`w-6 h-6 ${tool.color}`} />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{tool.name}</h3>
              <p className="text-muted-foreground text-sm">{tool.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="glass-card inline-flex items-center gap-4 px-6 py-4 rounded-full">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold text-primary-foreground">
                🐍
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-neon-pink flex items-center justify-center text-xs font-bold text-secondary-foreground">
                🤖
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                📊
              </div>
            </div>
            <span className="text-muted-foreground text-sm">
              Python • TensorFlow • Pandas • y más
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VirtualClassroomSection;

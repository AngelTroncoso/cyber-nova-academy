import { motion } from "framer-motion";
import { Calendar, Clock, Video, ExternalLink } from "lucide-react";

const timeSlots = [
  { day: "Lunes", hours: "10:00 - 20:00" },
  { day: "Martes", hours: "10:00 - 20:00" },
  { day: "Miércoles", hours: "10:00 - 20:00" },
  { day: "Jueves", hours: "10:00 - 20:00" },
  { day: "Viernes", hours: "10:00 - 18:00" },
  { day: "Sábado", hours: "10:00 - 14:00" },
];

const CalendarSection = () => {
  const calendlyLink = "https://calendly.com"; // Placeholder - user will update

  return (
    <section id="calendario" className="relative py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-display text-sm uppercase tracking-widest">
            Agenda tu Sesión
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mt-4 mb-6">
            <span className="text-primary neon-text-cyan">Calendario</span> de Disponibilidad
          </h2>
          <p className="text-muted-foreground">
            Elige el horario que mejor se adapte a ti. Todas las sesiones son en vivo
            vía videollamada.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Availability Grid */}
          <motion.div
            className="glass-card p-6 lg:p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-primary" />
              <h3 className="font-display font-bold text-xl">Horarios Disponibles</h3>
            </div>

            <div className="space-y-3">
              {timeSlots.map((slot, index) => (
                <motion.div
                  key={slot.day}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <span className="font-medium">{slot.day}</span>
                  <span className="text-muted-foreground text-sm">{slot.hours}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground mt-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Horarios en zona horaria de Chile (CLT)
            </p>
          </motion.div>

          {/* Calendly CTA */}
          <motion.div
            className="glass-card p-6 lg:p-8 flex flex-col justify-center items-center text-center neon-glow-cyan"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 pulse-glow">
              <Calendar className="w-10 h-10 text-primary-foreground" />
            </div>

            <h3 className="font-display font-bold text-2xl mb-3">
              Reserva Ahora
            </h3>
            <p className="text-muted-foreground mb-8 max-w-sm">
              Usa nuestro sistema de agendamiento para elegir el día y hora perfectos
              para tu sesión.
            </p>

            <motion.a
              href={calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button text-primary-foreground flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Abrir Calendly
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </motion.a>

            <div className="flex items-center gap-2 mt-6 text-sm text-muted-foreground">
              <Video className="w-4 h-4" />
              <span>Sesiones vía Google Meet o Zoom</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;

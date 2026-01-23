import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "56931393819";
  const message = encodeURIComponent(
    "¡Hola! Me interesa saber más sobre las clases de AI Data Academy 🚀"
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 hologram-button"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/30">
        <MessageCircle className="w-7 h-7 text-white" />
        
        {/* Hologram ring effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-green-400/50"
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 glass-card px-3 py-2 rounded-lg opacity-0 hover:opacity-100 pointer-events-none whitespace-nowrap">
          <span className="text-sm">Escríbeme por WhatsApp</span>
        </div>
      </div>

      {/* Notification dot */}
      <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-red-500 flex items-center justify-center">
        <span className="text-xs text-white font-bold">1</span>
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;

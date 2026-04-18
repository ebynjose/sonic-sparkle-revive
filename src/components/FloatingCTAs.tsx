import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const PHONE = "971525162572";

const FloatingCTAs = () => {
  return (
    <div className="fixed bottom-5 right-5 z-[90] flex flex-col gap-3">
      <motion.a
        href={`https://wa.me/${PHONE}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.3 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      >
        <MessageCircle className="w-5 h-5" />
      </motion.a>
      <motion.a
        href={`tel:+${PHONE}`}
        aria-label="Call us"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.75, duration: 0.3 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      >
        <Phone className="w-5 h-5" />
      </motion.a>
    </div>
  );
};

export default FloatingCTAs;

"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.a
        href="https://wa.me/917010788702"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-xl hover:bg-green-600 transition-colors"
        whileHover={{ scale: 1.1 }}
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: [
            "0 0 0 rgba(34, 197, 94, 0.4)",
            "0 0 20px rgba(34, 197, 94, 0.6)",
            "0 0 0 rgba(34, 197, 94, 0.4)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut" as const,
        }}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={28} />
      </motion.a>
    </div>
  );
}

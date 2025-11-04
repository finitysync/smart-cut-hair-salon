import { motion } from 'motion/react';

export function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="size-14 rounded-full border-4 border-white/10 border-t-[#D4AF37] animate-spin" />
        <div
          className="text-white tracking-wide"
          style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem' }}
        >
          Smart Cut
        </div>
      </motion.div>
    </motion.div>
  );
}

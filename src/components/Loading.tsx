"use client";

import { motion } from "motion/react";

export default function Loading() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1c1c22]"
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.6, ease: "backOut" }}
    >
      <div className="loader"></div>
    </motion.div>
  );
}

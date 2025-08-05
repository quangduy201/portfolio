"use client";

import { motion } from "motion/react";

export default function BioCard({
  title,
  bio,
}: {
  title: string;
  bio: string[];
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.2, ease: "easeOut", delay: 0.4 }}
        className="relative h-full rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-md"
      >
        <h2 className="mb-4 text-center text-xl font-bold text-accent">
          {title}
        </h2>
        {bio.map(
          (item, index) =>
            item.length > 0 && (
              <p
                key={index}
                className="mt-2 text-xs font-light text-white/90 lg:text-sm"
              >
                <span className="font-black text-accent">{"-> "}</span>
                {item}
              </p>
            ),
        )}
      </motion.div>
    </>
  );
}

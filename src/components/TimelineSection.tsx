"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";

interface TimelineSectionProps {
  id: string;
  title: string;
  items: ReactNode[];
}

export default function TimelineSection({
  id,
  title,
  items,
}: TimelineSectionProps) {
  return (
    <section id={id} className="flex w-full flex-col items-center pt-24">
      <h1 className="text-accent after:bg-accent relative text-xl font-semibold after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:content-[''] lg:text-3xl">
        {title}
      </h1>

      <div className="border-accent/30 relative mt-4 ml-4 flex flex-col gap-4 self-stretch border-l-2 pr-2 pl-6 md:w-2/3 md:self-center lg:w-4/5">
        {items.map((item, index) => (
          <div key={index}>
            {/* Dot */}
            <motion.div
              initial={{ scale: 0, translateX: -1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              className="border-background bg-accent absolute left-0 flex h-5 w-5 -translate-x-1/2 items-center justify-center overflow-hidden rounded-full border-4"
            ></motion.div>

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.1, delay: index * 0.1 }}
              className="relative w-full rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-md"
            >
              {item}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

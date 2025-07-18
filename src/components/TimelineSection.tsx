"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface TimelineSectionProps<T> {
  id: string;
  title: string;
  items: T[];
  renderItem: (item: T) => ReactNode;
}

export default function TimelineSection<T>({
  id,
  title,
  items,
  renderItem,
}: TimelineSectionProps<T>) {
  return (
    <section id={id} className="flex w-full flex-col items-center pt-24">
      <h1 className="relative text-xl font-semibold text-accent after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-accent after:content-[''] lg:text-3xl">
        {title}
      </h1>

      <div className="relative ml-4 mt-4 flex flex-col gap-4 border-l-2 border-accent/30 pl-6 pr-2 md:w-2/3 lg:w-4/5 xl:w-3/5">
        {items.map((item, index) => (
          <div key={index}>
            {/* Dot */}
            <motion.div
              initial={{ scale: 0, translateX: -11 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              className="border-background absolute left-0 flex h-5 w-5 -translate-x-1/2 items-center justify-center overflow-hidden rounded-full border-4 bg-accent"
            ></motion.div>

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.1, delay: index * 0.1 }}
              className="relative rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-md"
            >
              {renderItem(item)}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

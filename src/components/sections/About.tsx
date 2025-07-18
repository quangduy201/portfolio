"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { portfolioConfig } from "@/config/portfolio.config";

const experiences = portfolioConfig.experience;

export default function About() {
  return (
    <div className="relative my-5 ml-4 border-2 border-accent/30 lg:w-1/2">
      {experiences.map((experience, index) => (
        <div key={index}>
          {/* Dot */}
          <div className="border-background absolute flex h-5 w-5 -translate-x-1/2 items-center justify-center overflow-hidden rounded-full border-4 bg-accent"></div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
            className="relative mb-4"
          >
            <div className="relative ml-6 mr-2 rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-md">
              <Image
                src={experience.logo}
                alt={`${experience.title} - ${experience.organization}`}
                width={80}
                height={80}
                className={"top 2 absolute right-2 h-auto"}
              />
              <h2 className="text-xl font-semibold text-white">
                {experience.title}
              </h2>
              <p className="text-base text-accent">{experience.organization}</p>
              <p className="text-sm text-white/70">{experience.location}</p>
              <p className="text-sm text-accent">{`${experience.startDate} - ${experience.endDate}`}</p>
              {experience.descriptions.map((desc, idx) => (
                <p key={idx} className="mt-2 text-xs text-white/90">
                  <span className="text-accent">{"-> "}</span>
                  {desc}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { portfolioConfig } from "@/config/portfolio.config";

const about = portfolioConfig.about;

function calculateAge(dob: Date): number {
  const today = new Date();
  const yearsDifference = today.getFullYear() - dob.getFullYear();

  const isBeforeBirthday =
    today.getMonth() < dob.getMonth() ||
    (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate());

  return isBeforeBirthday ? yearsDifference - 1 : yearsDifference;
}

export default function AboutMe() {
  const age = calculateAge(about.personal.dob);

  return (
    <section id={"about"} className={"flex w-full flex-col items-center pt-24"}>
      <h1>About Me</h1>

      <div className="mt-4 flex flex-col items-center justify-between gap-4 lg:flex-row lg:items-stretch lg:justify-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="flex aspect-[3/4] items-center justify-between rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-md lg:h-auto lg:w-4/12"
        >
          <div className="relative aspect-[3/4] h-60 overflow-hidden lg:h-full">
            <Image
              src={"/assets/about_image.jpg"}
              alt={"avatar"}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl"
            />
          </div>
        </motion.div>

        <div className="flex w-full flex-col items-center justify-center gap-4 px-4 lg:w-5/12">
          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.2 }}
            className="relative grid grid-cols-2 gap-4 rounded-xl border border-white/10 bg-white/5 p-6 text-sm shadow-lg backdrop-blur-md lg:mt-0 [&>p>span]:font-extrabold [&>p>span]:text-accent"
          >
            <p className="col-span-2">
              <span>Name: </span>
              {about.personal.fullName}
            </p>
            <p className="col-span-1">
              <span>Age: </span>
              {age}
            </p>
            <p className="col-span-2">
              <span>Location: </span>
              {about.personal.location}
            </p>
            <p className="col-span-1">
              <span>Gender: </span>
              {about.personal.gender}
            </p>
            <p className="col-span-3">
              <span>Hobbies: </span>
              {about.personal.hobbies.join(", ")}
            </p>
          </motion.div>

          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.4 }}
            className="relative h-full rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-md"
          >
            <h2 className="mb-4 text-center text-xl font-bold text-accent">
              {about.title}
            </h2>
            {about.bio.map(
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
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "motion/react";

import { Personal } from "@/lib/types";

function calculateAge(dob: Date): number {
  const today = new Date();
  const yearsDifference = today.getFullYear() - dob.getFullYear();

  const isBeforeBirthday =
    today.getMonth() < dob.getMonth() ||
    (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate());

  return isBeforeBirthday ? yearsDifference - 1 : yearsDifference;
}

export default function SummaryCard({ personal }: { personal: Personal }) {
  const age = calculateAge(personal.dob);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.2, ease: "easeOut", delay: 0.2 }}
        className="relative grid grid-cols-2 gap-4 rounded-xl border border-white/10 bg-white/5 p-6 text-sm shadow-lg backdrop-blur-md lg:mt-0 [&>p>span]:font-extrabold [&>p>span]:text-accent"
      >
        <p className="col-span-2">
          <span>Name: </span>
          {personal.fullName}
        </p>
        <p className="col-span-1">
          <span>Age: </span>
          {age}
        </p>
        <p className="col-span-2">
          <span>Location: </span>
          {personal.location}
        </p>
        <p className="col-span-1">
          <span>Gender: </span>
          {personal.gender}
        </p>
        <p className="col-span-3">
          <span>Hobbies: </span>
          {personal.hobbies.join(", ")}
        </p>
      </motion.div>
    </>
  );
}

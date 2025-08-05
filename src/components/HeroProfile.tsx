"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaIcons } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import { Button } from "@/components/shadcnui/button";
import SocialIcon from "@/components/ui/social-icon";
import { Info, Social } from "@/lib/types";
import { smoothScroll } from "@/lib/utils";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Profile({info, socials}: {info: Info, socials: Social[]}) {
  return (
    <>
      {/* profile */}
      <motion.div
        className={"text-center lg:text-left"}
        variants={containerVariants}
        initial={"hidden"}
        animate={"show"}
      >
        <motion.span
          className={"text-md md:text-2xl"}
          variants={itemVariants}
        >
          {info.position}
        </motion.span>

        <motion.h1
          className={"mb-4 w-full text-3xl font-semibold md:text-5xl"}
          variants={itemVariants}
        >
          Hello I&apos;m <br />
          <span className={"text-accent"}>{info.name}</span>
        </motion.h1>

        <motion.p
          className={"mb-6 text-sm text-white/80"}
          variants={itemVariants}
        >
          {info.description}
        </motion.p>

        {/* socials and buttons */}
        <motion.div
          className={"flex flex-col items-center gap-4"}
          variants={itemVariants}
        >
          <motion.div className={"flex gap-2"} variants={itemVariants}>
            {socials.map((item, index) => (
              <Button asChild key={index} variant={"outline"} size={"icon"}>
                <Link href={item.link} target="_blank">
                  <SocialIcon
                    iconName={item.icon as keyof typeof FaIcons}
                  />
                </Link>
              </Button>
            ))}
          </motion.div>

          <motion.div
            className={"flex justify-center gap-2"}
            variants={itemVariants}
          >
            <Button
              variant={"outline"}
              size={"lg"}
              className={"w-44"}
              onClick={() => smoothScroll("contact")}
            >
              <span>Contact me</span>
            </Button>
            <Button asChild size={"lg"} className={"flex w-44 gap-2"}>
              <Link href={info.cvUrl} target="_blank">
                <span>View CV</span>
                <FiExternalLink className={"text-xl"} />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import { Button } from "@/components/shadcnui/button";
import { smoothScroll } from "@/lib/utils";
import { portfolioConfig } from "@/config/portfolio.config";
import SocialIcon from "@/components/ui/social-icon";

const info = portfolioConfig.info;
const socials = portfolioConfig.socials;

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

export default function Home() {
  return (
    <section
      id={"home"}
      className={"flex min-h-screen items-center pt-24 lg:pt-0"}
    >
      <div className={"container mx-auto h-full lg:self-center"}>
        <div
          className={
            "flex flex-col-reverse items-center justify-around lg:flex-row"
          }
        >
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

          {/* photo */}
          <div className={"relative -z-10 h-full"}>
            {/* image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.4, ease: "easeIn" },
              }}
            >
              <div className={"absolute h-40 w-40 lg:h-80 lg:w-80"}>
                <Image
                  src={"/assets/facebook.jpg"}
                  // src={"/assets/profile.png"}
                  // src={"/assets/illustrated.png"}
                  alt={"profile image"}
                  priority
                  quality={100}
                  fill
                  className={"rounded-full object-contain p-2 lg:p-3"}
                />
              </div>
            </motion.div>

            {/* circle */}
            <motion.svg
              className={"h-40 w-40 lg:h-80 lg:w-80"}
              fill={"transparent"}
              viewBox={"0 0 506 506"}
              xmlns={"http://www.w3.org/2000/svg"}
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.4,
                },
              }}
            >
              <motion.circle
                cx={253}
                cy={253}
                r={250}
                stroke={"#00ff99"}
                strokeWidth={4}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                initial={{ strokeDasharray: "24 10 0 0" }}
                animate={{
                  strokeDasharray: [
                    "15 120 25 25",
                    "16 25 92 72",
                    "4 250 22 22",
                  ],
                  rotate: [120, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              />
            </motion.svg>
          </div>
        </div>
      </div>
    </section>
  );
}

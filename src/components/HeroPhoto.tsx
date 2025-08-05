"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";

import { Skeleton } from "@/components/shadcnui/skeleton";

export default function HeroPhoto({ url }: { url: string }) {
  const [imageError, setImageError] = useState<boolean>(false);

  return (
    <>
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
            {imageError ? (
              <Skeleton className="h-full w-full" />
            ) : (
              <Image
                src={url}
                alt={"profile image"}
                priority
                quality={100}
                fill
                className={"rounded-full object-contain p-2 lg:p-3"}
                onError={() => setImageError(true)}
              />
            )}
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
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
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
    </>
  );
}

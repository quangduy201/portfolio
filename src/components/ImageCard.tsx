"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";

import { Skeleton } from "@/components/shadcnui/skeleton";

export default function ImageCard({ url }: { url: string }) {
  const [imageError, setImageError] = useState<boolean>(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="flex aspect-[3/4] items-center justify-between rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-md lg:h-auto lg:w-4/12"
      >
        <div className="relative aspect-[3/4] h-60 overflow-hidden lg:h-full">
          {imageError ? (
            <Skeleton className="h-full w-full" />
          ) : (
            <Image
              src={url}
              alt={"avatar"}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl"
              onError={() => setImageError(true)}
            />
          )}
        </div>
      </motion.div>
    </>
  );
}

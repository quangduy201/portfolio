"use client";

import { useEffect, useState } from "react";
import { useScroll } from "motion/react";

export default function useIsAtBottom(offset: number = 0): boolean {
  const { scrollY } = useScroll();
  const [isAtBottom, setIsAtBottom] = useState<boolean>(
    typeof window === undefined
      ? false
      : scrollY.get() + window.innerHeight >=
          document.documentElement.scrollHeight - offset,
  );

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (y) => {
      const scrollHeight = document.documentElement.scrollHeight;
      const innerHeight = window.innerHeight;

      setIsAtBottom(y + innerHeight >= scrollHeight - offset);
    });

    return () => unsubscribe();
  }, [offset, scrollY]);

  return isAtBottom;
}

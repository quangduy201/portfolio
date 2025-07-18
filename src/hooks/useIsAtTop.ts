"use client";

import { useEffect, useState } from "react";
import { useScroll } from "motion/react";

export default function useIsAtTop(offset: number = 0): boolean {
  const { scrollY } = useScroll();
  const [isAtTop, setIsAtTop] = useState<boolean>(scrollY.get() === 0);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (y) => {
      setIsAtTop(y <= offset);
    });

    return () => unsubscribe();
  }, [offset, scrollY]);

  return isAtTop;
};

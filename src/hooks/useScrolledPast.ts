"use client";

import { useEffect, useState } from "react";
import useIsAtBottom from "./useIsAtBottom";

export default function useScrolledPast(elementIds: string[]): string {
  const isAtBottom = useIsAtBottom(96);
  const [scrolledPast, setScrolledPast] = useState<string>(elementIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      if (isAtBottom) {
        setScrolledPast(elementIds[elementIds.length - 1]);
        return;
      }

      elementIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= rect.height / 4) {
            setScrolledPast(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementIds, isAtBottom]);

  return scrolledPast;
}

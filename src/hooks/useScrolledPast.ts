"use client";

import { useEffect, useState } from "react";
import useIsAtBottom from "./useIsAtBottom";
import useIsAtTop from "./useIsAtTop";

export default function useScrolledPast(elementIds: string[]): string {
  const isAtTop = useIsAtTop();
  const isAtBottom = useIsAtBottom(96);
  const [scrolledPast, setScrolledPast] = useState<string>(elementIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      if (isAtTop) {
        setScrolledPast(elementIds[0]);
        return;
      }
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

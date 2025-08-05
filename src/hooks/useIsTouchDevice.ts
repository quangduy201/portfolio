"use client";

import { useEffect, useState } from "react";

export default function useIsTouchDevice(): boolean {
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(
    typeof window === "undefined" || window.matchMedia("(hover: none)").matches,
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(hover: none)");

    const handleChange = (event: MediaQueryListEvent) => {
      setIsTouchDevice(event.matches);
    };

    setIsTouchDevice(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isTouchDevice;
}

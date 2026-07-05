"use client";

import { useEffect, useState } from "react";

export default function useIsWaitingForMotion(): boolean {
  const [isWaiting, setIsWaiting] = useState<boolean>(true);

  useEffect(() => {
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    const load = async () => {
      try {
        await import("motion/react");
      } catch (err) {
        console.error("Failed to load Motion:", err);
      } finally {
        timer = setTimeout(() => {
          if (!cancelled) {
            setIsWaiting(false);
          }
        }, 2500);
      }
    };

    load();

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  return isWaiting;
}

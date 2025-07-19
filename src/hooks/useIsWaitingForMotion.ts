"use client";

import { useEffect, useState } from "react";

export default function useIsWaitingForMotion(): boolean {
  const [isWaiting, setIsWaiting] = useState<boolean>(true);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      await import("motion/react");

      setTimeout(() => {
        if (!cancelled) setIsWaiting(false);
      }, 3000);
    };

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  return isWaiting;
}

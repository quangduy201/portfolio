"use client";

import { useEffect, useState } from "react";

export default function useIsWaitingForMotion(): boolean {
  const [isWaiting, setIsWaiting] = useState<boolean>(true);

  useEffect(() => {
    let cancelled = false;

    import("motion/react").then(() => {
      if (!cancelled) setIsWaiting(false);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return isWaiting;
}

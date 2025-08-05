"use client";

import { ReactNode, useEffect } from "react";
import { Portal } from "@radix-ui/react-portal";

import Loading from "@/components/Loading";
import { SmoothCursor } from "@/components/magicui/smooth-cursor";
import { Toaster } from "@/components/shadcnui/sonner";
import { TooltipProvider } from "@/components/shadcnui/tooltip";
import useIsTouchDevice from "@/hooks/useIsTouchDevice";
import useIsWaitingForMotion from "@/hooks/useIsWaitingForMotion";
import { hideCursor } from "@/lib/utils";

export default function ClientLayoutWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const isWaitingForMotion = useIsWaitingForMotion();
  const isTouchDevice = useIsTouchDevice();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isWaitingForMotion) return <Loading />;

  hideCursor();

  return (
    <>
      {!isTouchDevice && (
        <SmoothCursor
          springConfig={{
            damping: 100,
            stiffness: 2000,
            mass: 0.5,
            restDelta: 0,
          }}
        />
      )}
      <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
      <Portal className="fixed z-[60]">
        <Toaster richColors position="bottom-right" />
      </Portal>
    </>
  );
}

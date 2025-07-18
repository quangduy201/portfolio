"use client";

import { ReactNode } from "react";

import Loading from "@/components/Loading";
import { SmoothCursor } from "@/components/magicui/smooth-cursor";
import { Toaster } from "@/components/shadcnui/sonner";
import { TooltipProvider } from "@/components/shadcnui/tooltip";
import useIsTouchDevice from "@/hooks/useIsTouchDevice";
import useIsWaitingForMotion from "@/hooks/useIsWaitingForMotion";
import { hideCursor } from "@/lib/utils";
import { Portal } from "@radix-ui/react-portal";

export default function ClientLayoutWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const isWaitingForMotion = useIsWaitingForMotion();
  const isTouchDevice = useIsTouchDevice();

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

"use client";

import * as React from "react";
import { HTMLAttributes } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";
import useIsTouchDevice from "@/hooks/useIsTouchDevice";

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

function Tooltip({
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  const isTouchDevice = useIsTouchDevice();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!isTouchDevice || !open) return;

    const closeTooltip = () => setOpen(false);

    document.addEventListener("touchstart", closeTooltip, true);
    document.addEventListener("mousedown", closeTooltip, true);
    window.addEventListener("scroll", closeTooltip, true);

    return () => {
      document.removeEventListener("touchstart", closeTooltip, true);
      document.removeEventListener("mousedown", closeTooltip, true);
      window.removeEventListener("scroll", closeTooltip, true);
    };
  }, [isTouchDevice, open]);

  return (
    <TooltipPrimitive.Root
      open={isTouchDevice ? open : undefined}
      onOpenChange={setOpen}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && isTouchDevice) {
          type ChildElement = React.ReactElement<
            HTMLAttributes<HTMLElement>,
            string | React.JSXElementConstructor<any>
          >;

          const typedChild = child as ChildElement;

          return React.cloneElement(typedChild, {
            onClick: (event: React.MouseEvent<HTMLElement>) => {
              event.stopPropagation();
              setOpen((prev) => !prev);
              typedChild.props.onClick?.(event);
            },
          });
        }

        return child;
      })}
    </TooltipPrimitive.Root>
  );
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      data-slot="tooltip-content"
      sideOffset={sideOffset}
      className={cn(
        "z-50 origin-[--radix-tooltip-content-transform-origin] overflow-hidden rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-950 shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
        className,
      )}
      {...props}
    />
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };

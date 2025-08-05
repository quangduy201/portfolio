"use client";

import {
  TooltipContentProps,
  TooltipProps,
  TooltipTriggerProps,
  TooltipProviderProps,
} from "@radix-ui/react-tooltip";
import {
  PopoverContentProps,
  PopoverProps,
  PopoverTriggerProps,
} from "@radix-ui/react-popover";

import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/shadcnui/tooltip";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/shadcnui/popover";

import useIsTouchDevice from "@/hooks/useIsTouchDevice";

export const HybridTooltipProvider = ({
  children,
  ...props
}: TooltipProviderProps) => {
  return <TooltipProvider {...props}>{children}</TooltipProvider>;
};

export const HybridTooltip = (props: TooltipProps & PopoverProps) => {
  const isTouchDevice = useIsTouchDevice();
  console.log(`isTouchDevice (HybridTooltip): ${isTouchDevice}`);

  return isTouchDevice ? (
    <Popover key={"touch"} {...props} />
  ) : (
    <Tooltip key={"mouse"} {...props} />
  );
};

export const HybridTooltipTrigger = (
  props: TooltipTriggerProps & PopoverTriggerProps,
) => {
  const isTouchDevice = useIsTouchDevice();
  console.log(`isTouchDevice (HybridTooltiTrigger): ${isTouchDevice}`);

  return isTouchDevice ? (
    <PopoverTrigger key={"touch"} {...props} />
  ) : (
    <TooltipTrigger key={"mouse"} {...props} />
  );
};

export const HybridTooltipContent = (
  props: TooltipContentProps & PopoverContentProps,
) => {
  const isTouchDevice = useIsTouchDevice();
  console.log(`isTouchDevice (HybridTooltiContent): ${isTouchDevice}`);

  return isTouchDevice ? (
    <PopoverContent key={"touch"} {...props} />
  ) : (
    <TooltipContent key={"mouse"} {...props} />
  );
};

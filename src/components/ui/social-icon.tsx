import * as React from "react";
import type { IconType } from "react-icons";
import * as FaIcons from "react-icons/fa";

import { cn } from "@/lib/utils";

export interface SocialIconProps extends React.HTMLAttributes<SVGElement> {
  iconName: keyof typeof FaIcons;
  size?: number | string;
}

const SocialIcon = React.forwardRef<SVGSVGElement, SocialIconProps>(
  ({ iconName, className, size = 20, ...props }, ref) => {
    const IconComponent = FaIcons[iconName] as IconType;

    if (!IconComponent) {
      console.warn(`Icon "${iconName}" not found in react-icons/fa`);
      return null;
    }

    return (
      <IconComponent
        size={size}
        className={cn("shrink-0", className)}
        {...props}
      />
    );
  },
);

SocialIcon.displayName = "Icon";

export default SocialIcon;

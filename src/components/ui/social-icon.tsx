import * as React from "react";
import type { IconType } from "react-icons";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as CgIcons from "react-icons/cg";
import * as CiIcons from "react-icons/ci";
import * as DiIcons from "react-icons/di";
import * as FaIcons from "react-icons/fa6";
import * as FcIcons from "react-icons/fc";
import * as FiIcons from "react-icons/fi";
import * as GiIcons from "react-icons/gi";
import * as GoIcons from "react-icons/go";
import * as GrIcons from "react-icons/gr";
import * as HiIcons from "react-icons/hi2";
import * as ImIcons from "react-icons/im";
import * as IoIcons from "react-icons/io5";
import * as LiaIcons from "react-icons/lia";
import * as LuIcons from "react-icons/lu";
import * as MdIcons from "react-icons/md";
import * as PiIcons from "react-icons/pi";
import * as RiIcons from "react-icons/ri";
import * as RxIcons from "react-icons/rx";
import * as SiIcons from "react-icons/si";
import * as SlIcons from "react-icons/sl";
import * as TbIcons from "react-icons/tb";
import * as TfiIcons from "react-icons/tfi";
import * as TiIcons from "react-icons/ti";
import * as VscIcons from "react-icons/vsc";
import * as WiIcons from "react-icons/wi";

import { cn } from "@/lib/utils";

export interface SocialIconProps extends React.HTMLAttributes<SVGElement> {
  iconName: string;
  size?: number | string;
}

const SocialIcon = React.forwardRef<SVGSVGElement, SocialIconProps>(
  ({ iconName, className, size = 20, ...props }, ref) => {
    let IconComponent: IconType | null;

    if (iconName.startsWith("Ai")) {
      IconComponent = AiIcons[iconName as keyof typeof AiIcons];
    } else if (iconName.startsWith("Bi")) {
      IconComponent = BiIcons[iconName as keyof typeof BiIcons];
    } else if (iconName.startsWith("Bs")) {
      IconComponent = BsIcons[iconName as keyof typeof BsIcons];
    } else if (iconName.startsWith("Cg")) {
      IconComponent = CgIcons[iconName as keyof typeof CgIcons];
    } else if (iconName.startsWith("Ci")) {
      IconComponent = CiIcons[iconName as keyof typeof CiIcons];
    } else if (iconName.startsWith("Di")) {
      IconComponent = DiIcons[iconName as keyof typeof DiIcons];
    } else if (iconName.startsWith("Fa")) {
      IconComponent = FaIcons[iconName as keyof typeof FaIcons];
    } else if (iconName.startsWith("Fc")) {
      IconComponent = FcIcons[iconName as keyof typeof FcIcons];
    } else if (iconName.startsWith("Fi")) {
      IconComponent = FiIcons[iconName as keyof typeof FiIcons];
    } else if (iconName.startsWith("Gi")) {
      IconComponent = GiIcons[iconName as keyof typeof GiIcons];
    } else if (iconName.startsWith("Go")) {
      IconComponent = GoIcons[iconName as keyof typeof GoIcons];
    } else if (iconName.startsWith("Gr")) {
      IconComponent = GrIcons[iconName as keyof typeof GrIcons];
    } else if (iconName.startsWith("Hi")) {
      IconComponent = HiIcons[iconName as keyof typeof HiIcons];
    } else if (iconName.startsWith("Im")) {
      IconComponent = ImIcons[iconName as keyof typeof ImIcons];
    } else if (iconName.startsWith("Io")) {
      IconComponent = IoIcons[iconName as keyof typeof IoIcons];
    } else if (iconName.startsWith("Lia")) {
      IconComponent = LiaIcons[iconName as keyof typeof LiaIcons];
    } else if (iconName.startsWith("Lu")) {
      IconComponent = LuIcons[iconName as keyof typeof LuIcons];
    } else if (iconName.startsWith("Md")) {
      IconComponent = MdIcons[iconName as keyof typeof MdIcons];
    } else if (iconName.startsWith("Pi")) {
      IconComponent = PiIcons[iconName as keyof typeof PiIcons];
    } else if (iconName.startsWith("Ri")) {
      IconComponent = RiIcons[iconName as keyof typeof RiIcons];
    } else if (iconName.startsWith("Rx")) {
      IconComponent = RxIcons[iconName as keyof typeof RxIcons];
    } else if (iconName.startsWith("Si")) {
      IconComponent = SiIcons[iconName as keyof typeof SiIcons];
    } else if (iconName.startsWith("Sl")) {
      IconComponent = SlIcons[iconName as keyof typeof SlIcons];
    } else if (iconName.startsWith("Tb")) {
      IconComponent = TbIcons[iconName as keyof typeof TbIcons];
    } else if (iconName.startsWith("Tfi")) {
      IconComponent = TfiIcons[iconName as keyof typeof TfiIcons];
    } else if (iconName.startsWith("Ti")) {
      IconComponent = TiIcons[iconName as keyof typeof TiIcons];
    } else if (iconName.startsWith("Vsc")) {
      IconComponent = VscIcons[iconName as keyof typeof VscIcons];
    } else if (iconName.startsWith("Wi")) {
      IconComponent = WiIcons[iconName as keyof typeof WiIcons];
    } else {
      IconComponent = null;
    }

    if (!IconComponent) {
      console.warn(`Icon "${iconName}" not found in react-icons`);
      return null;
    }

    return (
      <IconComponent
        size={size}
        className={cn("", className)}
        {...props}
      />
    );
  },
);

SocialIcon.displayName = "Icon";

export default SocialIcon;

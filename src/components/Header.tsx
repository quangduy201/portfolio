"use client";

import { Nanum_Pen_Script } from "next/font/google";
import Link from "next/link";

import { NavBar, NavBarMobile } from "@/components/NavBar";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import useIsAtTop from "@/hooks/useIsAtTop";

const nanumPenScript = Nanum_Pen_Script({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  adjustFontFallback: false,
});

export default function Header() {
  const isAtTop = useIsAtTop();

  return (
    <header
      className={`fixed top-0 z-50 w-full duration-300 ease-in-out ${isAtTop ? "bg-transparent py-8" : "bg-[#1a1a1a] py-5"}`}
    >
      <div className={"container mx-auto flex items-center justify-between"}>
        {/* logo */}
        <Link href={"/"}>
          <h1 className={"text-4xl font-semibold"} style={nanumPenScript.style}>
            Quang Duy
          </h1>
        </Link>

        {/* desktop navigation */}
        <div className={"hidden items-center gap-8 lg:flex"}>
          <NavBar />
        </div>

        {/* mobile navigation */}
        <div className={"lg:hidden"}>
          <NavBarMobile />
        </div>
      </div>

      <ScrollProgress className="top-20" />
    </header>
  );
}

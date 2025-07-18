"use client";

import Link from "next/link";
import { Nanum_Pen_Script } from "next/font/google";

import { NavBar, NavBarMobile } from "@/components/NavBar";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import useIsAtTop from "@/hooks/useIsAtTop";

const nanumPenScript = Nanum_Pen_Script({ subsets: ["latin"], weight: "400" });

export default function Header() {
  const isAtTop = useIsAtTop();

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full duration-300 ease-in-out ${isAtTop ? "bg-transparent py-8" : "bg-[#1a1a1a] py-5"}`}
    >
      <div className={"container mx-auto flex items-center justify-between"}>
        {/* logo */}
        <Link href={"/"}>
          <h1 className={"text-4xl font-semibold"} style={nanumPenScript.style}>
            Quang<span className={"text-accent"}>.</span>Duy
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

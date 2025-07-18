"use client";

import { useState } from "react";

import useScrolledPast from "@/hooks/useScrolledPast";
import { smoothScroll } from "@/lib/utils";
import { MenuItem } from "@/lib/types";

const menu: MenuItem[] = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "education", title: "Education" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

export function NavBar() {
  const scrolledPastElement = useScrolledPast(menu.map((item) => item.id));

  return (
    <nav>
      <ul className={"flex gap-8"}>
        {menu.map((item, index) => (
          <li
            key={index}
            className={`relative after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-0 after:-translate-x-1/2 after:bg-accent after:duration-200 after:content-[''] hover:after:w-full hover:after:bg-accent ${scrolledPastElement === item.id ? "after:w-full" : ""}`}
            data-cursor={"pointer"}
            onClick={() => smoothScroll(item.id)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function NavBarMobile() {
  const scrolledPastElement = useScrolledPast(menu.map((item) => item.id));
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <nav className={"flex"}>
        {/* hamburger nav */}
        <div
          className={"z-50 flex h-6 w-8 flex-col justify-between"}
          data-cursor={"pointer"}
          onClick={() => setIsOpened((prevState) => !prevState)}
        >
          <div
            className={`h-1 rounded duration-300 ${isOpened ? "translate-y-2.5 rotate-45 bg-accent ease-in-out" : "w-full bg-amber-50"}`}
          ></div>
          <div
            className={`h-1 rounded duration-300 ${isOpened ? "w-0 translate-x-1/2 bg-accent ease-in-out" : "w-full bg-amber-50"}`}
          ></div>
          <div
            className={`h-1 rounded duration-300 ${isOpened ? "-translate-y-2.5 -rotate-45 bg-accent ease-in-out" : "w-full bg-amber-50"}`}
          ></div>
        </div>
      </nav>
      <div
        className={`display-[unset] absolute right-0 top-0 z-40 rounded-bl-2xl bg-[#1c1c22] pb-3 pt-24 duration-300 ease-in-out ${isOpened ? "w-2/5" : "w-0"}`}
      >
        <ul className={"flex flex-col items-center gap-1"}>
          {menu.map((item, index) => (
            <li
              key={index}
              className={`w-full text-center duration-300 hover:bg-accent hover:text-black ${scrolledPastElement === item.id ? "bg-accent-hover text-black" : ""}`}
              data-cursor={"pointer"}
              onClick={() => {
                smoothScroll(item.id);
                setIsOpened(false);
              }}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`display-[unset] absolute right-0 top-0 z-10 bg-[#00000080] ${isOpened ? "h-screen w-screen" : "h-0 w-0"}`}
        onClick={() => setIsOpened(false)}
        onTouchMove={() => setIsOpened(false)}
        onScrollCapture={() => setIsOpened(false)}
      ></div>
    </>
  );
}

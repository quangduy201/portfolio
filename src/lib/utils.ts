import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { MenuId } from "@/lib/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function hideCursor() {
  if (document.getElementById("hide-cursor-style") != null) {
    return;
  }
  const style = document.createElement("style");
  style.id = "hide-cursor-style";
  style.innerHTML = `* { cursor: none !important; }`;
  document.head.appendChild(style);
}

export function smoothScroll(elementId: MenuId) {
  document
    .querySelector(`#${elementId}`)
    ?.scrollIntoView({ behavior: "smooth" });
}

export function checkIsTouchDevice(): boolean {
  if (typeof window !== "undefined") {
    return window.matchMedia("(hover: none)").matches;
  }
  return false;
}

export const monthYearFormatter = new Intl.DateTimeFormat("en-US", {
  month: "2-digit",
  year: "numeric",
});

export type MenuId = "home" | "about" | "projects" | "contact" | "experience" | "education" | "skills";

export interface MenuItem {
  id: MenuId;
  title: string;
}

const menu: MenuItem[] = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];
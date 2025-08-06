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

export interface Info {
  name: string;
  position: string;
  description: string;
  cvUrl: string;
  image: string;
}

export interface Assets {
  url: string;
  exp: string;
  edu: string;
  skills: string;
  projects: string;
}

export interface Social {
  name: string;
  link: string;
  icon: string;
}

export interface Personal {
  fullName: string;
  dob: Date | string;
  gender: string;
  location: string;
  hobbies: string[];
}

export interface About {
  title: string;
  bio: string[];
  personal: Personal;
  image: string;
}

export interface Experience {
  title: string;
  organization: string;
  location: string;
  startDate: Date | string;
  endDate: Date | string;
  descriptions: string[];
  logo: string;
}

export interface Education {
  title: string;
  organization: string;
  location: string;
  startDate: Date | string;
  endDate: Date | string;
  descriptions: string[];
  logo: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export type Image = {
  platform: string;
  url: string;
};

export type Source = {
  title: string;
  url: string;
};

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  startDate: Date | string;
  endDate: Date | string;
  links: {
    image: Image;
    sources: Source[];
    demo: string;
  };
}

export interface Contact {
  email: string;
  phone: string;
  location: string;
}

export interface Seo {
  title: string;
  description: string;
  ogImage: string;
  url: string;
  keywords: string[];
}

export interface PortfolioConfig {
  info: Info;
  assets: Assets;
  socials: Social[];
  about: About;
  experience: Experience[];
  education: Education[];
  skills: SkillGroup[];
  projects: Project[];
  contact: Contact;
  seo: Seo;
}

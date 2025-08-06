import { PortfolioConfig } from "@/lib/types";

const fallbackConfig: PortfolioConfig = {
  info: {
    name: "Dinh Quang Duy",
    position: "Full Stack Developer",
    description: "A passionate developer crafting digital experiences",
    cvUrl:
      "https://drive.google.com/file/d/1Btq3Y3_9wFom4rKIQRLY0w0zQVKpGVqf/view",
    image: "/assets/home.jpg",
  },
  assets: {
    url: "https://zs02s7gizl0we3kb.public.blob.vercel-storage.com",
    exp: "experience",
    edu: "education",
    skills: "skills",
    projects: "projects",
  },
  socials: [
    {
      name: "GitHub",
      link: "https://github.com/quangduy201",
      icon: "FaGithub",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/quangduy201/",
      icon: "FaLinkedin",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/quangduy201/",
      icon: "FaInstagram",
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/quangduy201",
      icon: "FaFacebook",
    },
    {
      name: "YouTube",
      link: "https://www.youtube.com/@quangduy201",
      icon: "FaYoutube",
    },
    {
      name: "Google Developers",
      link: "https://g.dev/quangduy201",
      icon: "FaGoogle",
    },
  ],
  about: {
    title: "Dinh Quang Duy - A full stack developer",
    bio: [
      "I'm a final-year Software Engineering student who loves turning ideas into real apps, whether it's a smooth mobile experience with Flutter or a responsive web app with Next.js.",
      "I love learning new technologies, optimizing performance, and writing clean, maintainable code.",
      "Beyond just code, I'm someone who enjoys solving real-world problems, learning continuously, and bringing creative ideas to life.",
      "In the near future, I aim to join a team where I can grow as a full stack engineer and contribute to building meaningful products that people love to use.",
      "I believe great software starts with empathy — and a lot of coffee ☕",
    ],
    personal: {
      fullName: "Dinh Quang Duy",
      dob: "2003-01-20",
      gender: "Male",
      location: "Ho Chi Minh City, Vietnam",
      hobbies: [
        "Listening to podcasts",
        "Origami / Paper craft",
        "Playing puzzle games / board games",
      ],
    },
    image: "/assets/about.jpg",
  },
  experience: [
    {
      title: "Frontend Intern",
      organization: "GugoTech Joint Stock Company",
      location: "Ho Chi Minh City, Vietnam",
      startDate: "2024-09-18",
      endDate: "2025-01-17",
      descriptions: [
        "Worked on internal tools and assisted in frontend development using Next.js and Tailwind CSS.",
        "Read and analyzed existing source code to understand component structures and workflows.",
        "Fixed minor UI and logic bugs under the guidance of senior developers.",
        "Participated in code reviews and applied best practices in writing clean, reusable code.",
      ],
      logo: "/assets/gugotech.png",
    },
  ],
  education: [
    {
      title: "Software Engineering",
      organization: "Saigon University",
      location: "Ho Chi Minh City, Vietnam",
      startDate: "2021-09-05",
      endDate: "2026-01-01",
      descriptions: [
        "Acquired a strong understanding of data structures, algorithms, databases, and OOP.",
        "Developed problem-solving and critical thinking skills through hands-on coursework.",
        "Designed and implemented full-stack web and mobile applications.",
        "Utilized Git and GitHub for version control and collaborative development.",
      ],
      logo: "/assets/sgu.png",
    },
  ],
  skills: [
    {
      title: "Languages 🌐👨‍💻",
      skills: [
        {
          name: "Java",
          icon: "/assets/java.svg",
        },
        {
          name: "Kotlin",
          icon: "/assets/kotlin.svg",
        },
        {
          name: "Python",
          icon: "/assets/python.svg",
        },
        {
          name: "Dart",
          icon: "/assets/dart.svg",
        },
        {
          name: "JavaScript",
          icon: "/assets/javascript.svg",
        },
        {
          name: "TypeScript",
          icon: "/assets/typescript.svg",
        },
        {
          name: "HTML 5",
          icon: "/assets/html5.svg",
        },
        {
          name: "CSS 3",
          icon: "/assets/css3.svg",
        },
        {
          name: "C#",
          icon: "/assets/c_sharp.svg",
        },
        {
          name: "C++",
          icon: "/assets/c_plus_plus.svg",
        },
        {
          name: "C",
          icon: "/assets/c.svg",
        },
      ],
    },
    {
      title: "Frontend Skills 🖥️📱",
      skills: [
        {
          name: "React.js",
          icon: "/assets/react.svg",
        },
        {
          name: "Next.js",
          icon: "/assets/nextjs.svg",
        },
        {
          name: "Flutter",
          icon: "/assets/flutter.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "/assets/tailwindcss.svg",
        },
        {
          name: "shadcn/ui",
          icon: "/assets/shadcn_ui.svg",
        },
        {
          name: "Sass",
          icon: "/assets/sass.svg",
        },
        {
          name: "Framer Motion",
          icon: "/assets/framer_motion.svg",
        },
        {
          name: "Bootstrap",
          icon: "/assets/bootstrap.svg",
        },
        {
          name: "Redux",
          icon: "/assets/redux.svg",
        },
        {
          name: "jQuery",
          icon: "/assets/jquery.svg",
        },
        {
          name: "Material UI",
          icon: "/assets/material_ui.svg",
        },
        {
          name: "Vite",
          icon: "/assets/vite.svg",
        },
      ],
    },
    {
      title: "Backend Skills ⚙️🗄️",
      skills: [
        {
          name: "Spring",
          icon: "/assets/spring.svg",
        },
        {
          name: "PyTorch",
          icon: "/assets/pytorch.svg",
        },
        {
          name: "Flask",
          icon: "/assets/flask.svg",
        },
        {
          name: "FastAPI",
          icon: "/assets/fastapi.svg",
        },
        {
          name: "Node.js",
          icon: "/assets/nodejs.svg",
        },
        {
          name: "Hibernate",
          icon: "/assets/hibernate.svg",
        },
        {
          name: "OpenCV",
          icon: "/assets/opencv.svg",
        },
        {
          name: "Firebase",
          icon: "/assets/firebase.svg",
        },
        {
          name: "Docker",
          icon: "/assets/docker.svg",
        },
        {
          name: "Google Cloud",
          icon: "/assets/google_cloud.svg",
        },
        {
          name: "Redis",
          icon: "/assets/redis.svg",
        },
        {
          name: "MongoDB",
          icon: "/assets/mongodb.svg",
        },
        {
          name: "Maven",
          icon: "/assets/maven.svg",
        },
        {
          name: "PostgreSQL",
          icon: "/assets/postgresql.svg",
        },
        {
          name: "MySQL",
          icon: "/assets/mysql.svg",
        },
      ],
    },
    {
      title: "Others 🔧🛠️",
      skills: [
        {
          name: "Git",
          icon: "/assets/git.svg",
        },
        {
          name: "GitHub",
          icon: "/assets/github.svg",
        },
        {
          name: "Postman",
          icon: "/assets/postman.svg",
        },
        {
          name: "Figma",
          icon: "/assets/figma.svg",
        },
        {
          name: "Vim",
          icon: "/assets/vim.svg",
        },
        {
          name: "IntelliJ",
          icon: "/assets/intellij.svg",
        },
        {
          name: "VSCode",
          icon: "/assets/vscode.svg",
        },
        {
          name: "Vercel",
          icon: "/assets/vercel.svg",
        },
        {
          name: "Render",
          icon: "/assets/render.svg",
        },
        {
          name: "Kaggle",
          icon: "/assets/kaggle.svg",
        },
        {
          name: "Jira",
          icon: "/assets/jira.svg",
        },
        {
          name: "Trello",
          icon: "/assets/trello.svg",
        },
      ],
    },
  ],
  projects: [
    {
      title: "Study Loop",
      description: "An English Vocabulary & News App",
      technologies: [
        "Flutter",
        "Flask",
        "PyTorch",
        "Firebase Auth",
        "Firestore",
        "Gemini API",
        "Redis Cloud",
        "RSS Feeds",
      ],
      startDate: "2025-03-05",
      endDate: "2025-05-20",
      links: {
        image: {
          platform: "mobile",
          url: "/assets/studyloop.gif",
        },
        sources: [
          {
            title: "Frontend",
            url: "https://github.com/quangduy201/studyloop_frontend_mobile",
          },
          {
            title: "Backend",
            url: "https://github.com/quangduy201/studyloop_ai",
          },
        ],
        demo: "",
      },
    },
    {
      title: "G Weather Forecast",
      description: "A Weather Forecast Web App",
      technologies: [
        "Spring Boot",
        "React.js",
        "Docker",
        "Redis Cloud",
        "PostgreSQL",
        "WeatherAPI",
      ],
      startDate: "2024-08-21",
      endDate: "2024-08-24",
      links: {
        image: {
          platform: "desktop",
          url: "/assets/g_weather_forecast.gif",
        },
        sources: [
          {
            title: "",
            url: "https://github.com/quangduy201/g-weather-forecast",
          },
        ],
        demo: "https://g-weather-forecast-app.vercel.app/",
      },
    },
    {
      title: "TechBeats",
      description: "An E-commerce Platform",
      technologies: [
        "Spring Boot",
        "Spring Security",
        "React.js",
        "Firebase Storage",
        "Firebase Auth",
        "JWT",
        "VNPAY",
      ],
      startDate: "2024-03-05",
      endDate: "2024-05-21",
      links: {
        image: {
          platform: "desktop",
          url: "/assets/techbeats.gif",
        },
        sources: [
          {
            title: "Backend",
            url: "https://github.com/quangduy201/laptop-ecommerce-backend",
          },
          {
            title: "Frontend",
            url: "https://github.com/ngtdungdev/laptop-ecommerce-frontend",
          },
        ],
        demo: "",
      },
    },
    {
      title: "Captionify",
      description: "An AI Caption Generator",
      technologies: [
        "Python",
        "CNN",
        "RNN",
        "PyTorch",
        "Torchvision",
        "FastAPI",
        "Kaggle",
        "Vite",
      ],
      startDate: "2024-04-28",
      endDate: "2024-05-24",
      links: {
        image: {
          platform: "desktop",
          url: "/assets/captionify.gif",
        },
        sources: [
          {
            title: "",
            url: "https://github.com/quangduy201/captionify",
          },
        ],
        demo: "https://captionify-app.vercel.app",
      },
    },
    {
      title: "Instar",
      description: "An Instagram-like Mobile App",
      technologies: [
        "Spring Boot",
        "Kotlin",
        "MongoDB",
        "Cloudinary",
        "Docker",
        "Firebase Realtime Database",
        "Google Cloud Vision API",
      ],
      startDate: "2024-01-21",
      endDate: "2024-05-14",
      links: {
        image: {
          platform: "desktop",
          url: "/assets/instar.gif",
        },
        sources: [
          {
            title: "Frontend",
            url: "https://github.com/ngtdungdev/instar-frontend-android",
          },
          {
            title: "Backend",
            url: "https://github.com/BTH-IT/Social_BE",
          },
        ],
        demo: "",
      },
    },
  ],
  contact: {
    email: "dinhduy2012003@gmail.com",
    phone: "093****523",
    location: "Ho Chi Minh City, Vietnam",
  },
  seo: {
    title: "Quang Duy | Portfolio",
    description: "Personal portfolio website of Quang Duy - A passionate developer crafting digital experiences",
    ogImage: "opengraph-image.jpeg",
    url: "https://quangduy.id.vn",
    keywords: [
      "dinh",
      "Dinh",
      "DINH",
      "quang",
      "Quang",
      "QUANG",
      "duy",
      "Duy",
      "DUY",
      "dinh quang duy",
      "Dinh Quang Duy",
      "DINH QUANG DUY",
      "quang duy",
      "Quang Duy",
      "QUANG DUY",
      "quangduy",
      "QUANGDUY",
      "quangduy201",
      "QUANGDUY201",
      "@quangduy201",
      "portfolio",
      "dev",
      "developer",
      "fullstack dev",
      "fullstack developer",
    ],
  },
};

const JSON_SILO_URL = process.env.JSON_SILO_URL;
const JSON_SILO_KEY = process.env.JSON_SILO_KEY;

export async function fetchPortfolioConfig(): Promise<PortfolioConfig> {
  if (!JSON_SILO_URL || !JSON_SILO_KEY) {
    console.warn(
      "Missing JSON_SILO_URL or JSON_SILO_KEY. Using fallback config.",
    );
    return fallbackConfig;
  }

  try {
    const res = await fetch(JSON_SILO_URL, {
      headers: {
        "X-SILO-KEY": JSON_SILO_KEY,
      },
      cache: "default",
    });

    if (!res.ok) {
      console.warn("Failed to fetch portfolio config, status:", res.status);
      return fallbackConfig;
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching portfolio config:", error);
    return fallbackConfig;
  }
}

export const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT!;

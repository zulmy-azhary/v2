import { Project } from "@/types";

export const mainProjects: Project[] = [
  {
    title: "Rest Countries",
    src: "/assets/projects/rest-countries.jpg",
    techList: ["Typescript", "NextJs", "Styled Components"],
    repoUrl: "https://github.com/zulmy-azhary/rest-countries",
    liveUrl: "https://zoel-restcountries.vercel.app/",
  },
  {
    title: "Countdown Timer",
    src: "/assets/projects/countdown-timer.jpg",
    techList: ["Typescript", "Svelte"],
    repoUrl: "https://github.com/zulmy-azhary/countdown-timer",
    liveUrl: "https://zoel-countdowntimer.vercel.app/",
  },
  {
    title: "Interactive Credit Card",
    src: "/assets/projects/cc-interactive.jpg",
    techList: ["Typescript", "VueJs", "Vuelidate"],
    repoUrl: "https://github.com/zulmy-azhary/cc-interactive",
    liveUrl: "https://cc-interactive.vercel.app/",
  },
  {
    title: "Multistep Form",
    src: "/assets/projects/multistep-form.jpg",
    techList: ["Typescript", "ReactJs", "Styled Components", "React Hook Form"],
    repoUrl: "https://github.com/zulmy-azhary/multistep-form",
    liveUrl: "https://react-multistepform.vercel.app/",
  },
  {
    title: "Space Tourism",
    src: "/assets/projects/space-tourism.jpg",
    techList: ["Typescript", "NextJs", "Styled Components", "Framer Motion"],
    repoUrl: "https://github.com/zulmy-azhary/space-tourism",
    liveUrl: "https://zoel-space-tourism.vercel.app/",
  },
  {
    title: "Fake Store",
    src: "/assets/projects/fake-store.jpg",
    techList: ["Typescript", "ReactJs", "Material UI", "React Router DOM"],
    repoUrl: "https://github.com/zulmy-azhary/fake-store",
    liveUrl: "https://fake-store-demo.vercel.app/store",
  },
];

// Coming Soon
const otherProjects: Project[] = []

export const allProjects: Project[] = [
  ...mainProjects,
  ...otherProjects
];
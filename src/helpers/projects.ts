import type { Project } from "@/types";

const mainProjects: Project[] = [
  {
    id: 1,
    title: "Rest Countries",
    src: "/assets/projects/rest-countries.jpg",
    techList: ["Typescript", "NextJs", "Styled Components"],
    repoUrl: "https://github.com/zulmy-azhary/rest-countries",
    liveUrl: "https://zoel-restcountries.vercel.app/",
    type: "main"
  },
  {
    id: 2,
    title: "Countdown Timer",
    src: "/assets/projects/countdown-timer.jpg",
    techList: ["Typescript", "Svelte"],
    repoUrl: "https://github.com/zulmy-azhary/countdown-timer",
    liveUrl: "https://zoel-countdowntimer.vercel.app/",
    type: "main"
  },
  {
    id: 3,
    title: "Interactive Credit Card",
    src: "/assets/projects/cc-interactive.jpg",
    techList: ["Typescript", "VueJs", "Vuelidate"],
    repoUrl: "https://github.com/zulmy-azhary/cc-interactive",
    liveUrl: "https://cc-interactive.vercel.app/",
    type: "main"
  },
  {
    id: 4,
    title: "Multistep Form",
    src: "/assets/projects/multistep-form.jpg",
    techList: ["Typescript", "ReactJs", "Styled Components", "React Hook Form"],
    repoUrl: "https://github.com/zulmy-azhary/multistep-form",
    liveUrl: "https://react-multistepform.vercel.app/",
    type: "main"
  },
  {
    id: 5,
    title: "Space Tourism",
    src: "/assets/projects/space-tourism.jpg",
    techList: ["Typescript", "NextJs", "Styled Components", "Framer Motion"],
    repoUrl: "https://github.com/zulmy-azhary/space-tourism",
    liveUrl: "https://zoel-space-tourism.vercel.app/",
    type: "main"
  },
  {
    id: 6,
    title: "Fake Store",
    src: "/assets/projects/fake-store.jpg",
    techList: ["Typescript", "ReactJs", "Material UI", "React Router DOM"],
    repoUrl: "https://github.com/zulmy-azhary/fake-store",
    liveUrl: "https://fake-store-demo.vercel.app/store",
    type: "main"
  }
];

const unfinishedProjects: Project[] = [
  {
    id: 1,
    title: "MERN App",
    techList: ["Typecript", "MongoDB", "ExpressJs", "ReactJs", "NodeJs", "Mongoose", "TailwindCSS", "Nodemon", "Vite"],
    repoUrl: "https://github.com/zulmy-azhary/mern-app",
    type: "unfinished"
  }
];

const otherProjects: Project[] = [
  {
    id: 1,
    title: "Easybank Landingpage",
    src: "/assets/projects/easybank.jpg",
    techList: ["Javascript", "ReactJs"],
    repoUrl: "https://github.com/zulmy-azhary/easybank-landingpage",
    liveUrl: "https://ezbank.vercel.app/",
    type: "others"
  },
  {
    id: 2,
    title: "Rock Paper Scissors",
    src: "/assets/projects/rock-paper-scissors.jpg",
    techList: ["Typescript", "ReactJs", "Styled Components", "Framer Motion", "Vite"],
    repoUrl: "https://github.com/zulmy-azhary/roshambo",
    liveUrl: "https://roshambo-minigame.vercel.app/",
    type: "others"
  },
  {
    id: 3,
    title: "Sunnyside Landingpage",
    src: "/assets/projects/sunnyside.jpg",
    techList: ["Typescript", "Vue", "TailwindCSS"],
    repoUrl: "https://github.com/zulmy-azhary/sunnyside-landingpage",
    liveUrl: "https://zoel-sunnyside.vercel.app/",
    type: "others"
  },
  {
    id: 4,
    title: "Krypto Landingpage",
    techList: ["Typescript", "NextJs", "Styled Components"],
    repoUrl: "https://github.com/zulmy-azhary/krypto-landingpage",
    type: "others"
  },
  {
    id: 5,
    title: "Todo React TS",
    techList: ["Typescript", "ReactJs", "Material UI", "Vite"],
    repoUrl: "https://github.com/zulmy-azhary/todo-react-ts",
    liveUrl: "https://todo-reactts.vercel.app/",
    type: "others"
  },
  {
    id: 6,
    title: "React Notes",
    techList: ["Javascript", "ReactJs"],
    repoUrl: "https://github.com/zulmy-azhary/react-notes",
    type: "others"
  },
  {
    id: 7,
    title: "Calculator App",
    src: "/assets/projects/calculator-app.jpg",
    techList: ["Typescript", "Svelte"],
    repoUrl: "https://github.com/zulmy-azhary/calculator-app",
    liveUrl: "https://zoel-calculator.vercel.app/",
    type: "others"
  },
  {
    id: 8,
    title: "Loopstudios Landingpage",
    src: "/assets/projects/loopstudios.jpg",
    techList: ["Typescript", "Svelte", "TailwindCSS"],
    repoUrl: "https://github.com/zulmy-azhary/loopstudios",
    liveUrl: "https://zoel-loopstudios.vercel.app/",
    type: "others"
  },
  {
    id: 9,
    title: "Gerai Design",
    src: "/assets/projects/gerai-design.jpg",
    techList: ["Typescript", "ReactJs", "TailwindCSS"],
    repoUrl: "https://github.com/zulmy-azhary/gerai-design",
    liveUrl: "https://gerai-design.vercel.app/",
    type: "others"
  },
  {
    id: 10,
    title: "Realtime Chat App",
    techList: ["Javascript", "NextJs", "Firebase", "Chakra UI"],
    repoUrl: "https://github.com/zulmy-azhary/realtime-chat-app",
    liveUrl: "https://next-chatapp.vercel.app/",
    type: "others"
  }
];

export const allProjects: Project[] = [...mainProjects, ...unfinishedProjects, ...otherProjects];

import type { Project } from "@/types";
import {
  chakraUI,
  express,
  firebase,
  framerMotion,
  javascript,
  jwt,
  materialUI,
  mongoDB,
  mongoose,
  next,
  node,
  nodemon,
  react,
  reactHookForm,
  reactQuery,
  reactRouterDOM,
  solid,
  styledComponents,
  svelte,
  tailwindCSS,
  typescript,
  vite,
  vue,
  vuelidate
} from "@/data/icons";

const mainProjects: Project[] = [
  {
    title: "Rest Countries",
    src: "/assets/projects/rest-countries.jpg",
    description: "A website that contains a list of countries around the world.",
    techs: [typescript, next, styledComponents],
    repoUrl: "https://github.com/zulmy-azhary/rest-countries",
    liveUrl: "https://zoel-restcountries.vercel.app/",
    type: "main"
  },
  {
    title: "Countdown Timer",
    src: "/assets/projects/countdown-timer.jpg",
    description: "Launch countdown timer with flip card animation built with Svelte",
    techs: [typescript, svelte],
    repoUrl: "https://github.com/zulmy-azhary/countdown-timer",
    liveUrl: "https://zoel-countdowntimer.vercel.app/",
    type: "main"
  },
  {
    title: "Interactive Credit Card",
    src: "/assets/projects/cc-interactive.jpg",
    description: "An interactive credit card with card animation and form validation",
    techs: [typescript, vue, vuelidate],
    repoUrl: "https://github.com/zulmy-azhary/cc-interactive",
    liveUrl: "https://cc-interactive.vercel.app/",
    type: "main"
  },
  {
    title: "Multistep Form",
    src: "/assets/projects/multistep-form.jpg",
    techs: [typescript, react, styledComponents, reactHookForm],
    repoUrl: "https://github.com/zulmy-azhary/multistep-form",
    liveUrl: "https://react-multistepform.vercel.app/",
    type: "main"
  },
  {
    title: "Space Tourism",
    src: "/assets/projects/space-tourism.jpg",
    techs: [typescript, next, styledComponents, framerMotion],
    repoUrl: "https://github.com/zulmy-azhary/space-tourism",
    liveUrl: "https://zoel-space-tourism.vercel.app/",
    type: "main"
  },
  {
    title: "Fake Store",
    src: "/assets/projects/fake-store.jpg",
    techs: [typescript, react, materialUI, reactRouterDOM],
    repoUrl: "https://github.com/zulmy-azhary/fake-store",
    liveUrl: "https://fake-store-demo.vercel.app/store",
    type: "main"
  }
];

const unfinishedProjects: Project[] = [
  {
    title: "Tools Leadtime",
    description: "Leadtime management system web app at PT. Kalla Toyota Urip",
    techs: [typescript, mongoDB, express, react, node, mongoose, tailwindCSS, nodemon, reactQuery, jwt],
    repoUrl: "https://github.com/zulmy-azhary/mern-app",
    liveUrl: "https://kalla-leadtime.vercel.app",
    type: "unfinished"
  }
];

const otherProjects: Project[] = [
  {
    title: "Easybank Landingpage",
    src: "/assets/projects/easybank.jpg",
    techs: [javascript, react],
    repoUrl: "https://github.com/zulmy-azhary/easybank-landingpage",
    liveUrl: "https://ezbank.vercel.app/",
    type: "others"
  },
  {
    title: "Rock Paper Scissors",
    src: "/assets/projects/rock-paper-scissors.jpg",
    techs: [typescript, react, styledComponents, framerMotion, vite],
    repoUrl: "https://github.com/zulmy-azhary/roshambo",
    liveUrl: "https://roshambo-minigame.vercel.app/",
    type: "others"
  },
  {
    title: "Sunnyside Landingpage",
    src: "/assets/projects/sunnyside.jpg",
    techs: [typescript, vue, tailwindCSS],
    repoUrl: "https://github.com/zulmy-azhary/sunnyside-landingpage",
    liveUrl: "https://zoel-sunnyside.vercel.app/",
    type: "others"
  },
  {
    title: "Krypto Landingpage",
    techs: [typescript, next, styledComponents],
    repoUrl: "https://github.com/zulmy-azhary/krypto-landingpage",
    type: "others"
  },
  {
    title: "Todo React TS",
    techs: [typescript, react, materialUI, vite],
    repoUrl: "https://github.com/zulmy-azhary/todo-react-ts",
    liveUrl: "https://todo-reactts.vercel.app/",
    type: "others"
  },
  {
    title: "React Notes",
    techs: [javascript, react],
    repoUrl: "https://github.com/zulmy-azhary/react-notes",
    type: "others"
  },
  {
    title: "Calculator App",
    src: "/assets/projects/calculator-app.jpg",
    techs: [typescript, svelte],
    repoUrl: "https://github.com/zulmy-azhary/calculator-app",
    liveUrl: "https://zoel-calculator.vercel.app/",
    type: "others"
  },
  {
    title: "Loopstudios Landingpage",
    src: "/assets/projects/loopstudios.jpg",
    techs: [typescript, svelte, tailwindCSS],
    repoUrl: "https://github.com/zulmy-azhary/loopstudios",
    liveUrl: "https://zoel-loopstudios.vercel.app/",
    type: "others"
  },
  {
    title: "Gerai Design",
    src: "/assets/projects/gerai-design.jpg",
    techs: [typescript, react, tailwindCSS],
    repoUrl: "https://github.com/zulmy-azhary/gerai-design",
    liveUrl: "https://gerai-design.vercel.app/",
    type: "others"
  },
  {
    title: "Realtime Chat App",
    techs: [javascript, next, firebase, chakraUI],
    repoUrl: "https://github.com/zulmy-azhary/realtime-chat-app",
    liveUrl: "https://next-chatapp.vercel.app/",
    type: "others"
  },
  {
    title: "Bookmark Landingpage",
    src: "/assets/projects/bookmark.jpg",
    techs: [typescript, solid, tailwindCSS],
    repoUrl: "https://github.com/zulmy-azhary/bookmark-landingpage",
    liveUrl: "https://zoel-bookmark.vercel.app",
    type: "others"
  }
];

export const allProjects: Project[] = [...mainProjects, ...unfinishedProjects, ...otherProjects];

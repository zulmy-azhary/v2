import {
  chakraUI,
  express,
  figma,
  firebase,
  framerMotion,
  javascript,
  materialUI,
  mongoDB,
  next,
  node,
  postgreSQL,
  prisma,
  react,
  remix,
  shadCN,
  solid,
  styledComponents,
  svelte,
  tailwindCSS,
  typescript,
  vite,
  vue,
  zod
} from "@/data/icons";

export const languages = [javascript, typescript];
export const uiFrameworkOrComponents = [tailwindCSS, styledComponents, chakraUI, materialUI, shadCN];
export const frameworkOrLibraries = [react, next, remix, vue, svelte, solid, node, express];
export const databases = [postgreSQL, firebase, mongoDB];
export const others = [prisma, figma, framerMotion, vite, zod];

export const allSkills = [...languages, ...uiFrameworkOrComponents, ...frameworkOrLibraries, ...databases, ...others];

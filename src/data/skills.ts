import {
  bootstrap,
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
  react,
  solid,
  styledComponents,
  svelte,
  tailwindCSS,
  typescript,
  vite,
  vsCode,
  vue
} from "@/data/icons";

export const languages = [javascript, typescript];
export const uiFrameworkOrComponents = [tailwindCSS, styledComponents, chakraUI, materialUI, bootstrap];
export const frameworkOrLibraries = [react, next, vue, svelte, solid, node, express];
export const databases = [firebase, mongoDB];
export const others = [figma, vsCode, framerMotion, vite];

export const allSkills = [...languages, ...uiFrameworkOrComponents, ...frameworkOrLibraries, ...databases, ...others];

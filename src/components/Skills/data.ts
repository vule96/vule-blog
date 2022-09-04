import {
  mdiAccountGroupOutline,
  mdiGit,
  mdiLanguageCss3,
  mdiLanguageHtml5,
  mdiLanguageJavascript,
  mdiLanguageTypescript,
  mdiLeaf,
  mdiMaterialDesign,
  mdiNodejs,
  mdiPaletteSwatchOutline,
  mdiPuzzleOutline,
  mdiReact,
  mdiTailwind,
} from '@mdi/js';
import { nextJs } from '../Icons';

export interface SkillProps {
  name: string;
  iconPath: string;
  color: string;
  hide?: boolean;
}

export const skills: SkillProps[] = [
  { name: 'JavaScript', iconPath: mdiLanguageJavascript, color: '#f7df1e' },
  { name: 'TypeScript', iconPath: mdiLanguageTypescript, color: '#3178c6' },
  { name: 'HTML5', iconPath: mdiLanguageHtml5, color: '#e34f26' },
  { name: 'CSS3', iconPath: mdiLanguageCss3, color: '#3572b5' },
  { name: 'React', iconPath: mdiReact, color: '#00c2e6' },
  { name: 'NextJS', iconPath: nextJs, color: '#0070f3' },
  {
    name: 'Styled Components',
    iconPath: mdiPaletteSwatchOutline,
    color: '#c43bad',
  },
  { name: 'Tailwind', iconPath: mdiTailwind, color: '#06b6d4', hide: true },
  { name: 'Node JS', iconPath: mdiNodejs, color: '#61af43' },
  { name: 'Mongo DB', iconPath: mdiLeaf, color: '#69a14a' },
  { name: 'Express', iconPath: mdiPuzzleOutline, color: '#888888' },
  { name: 'Git', iconPath: mdiGit, color: '#fc6d26' },
  { name: 'Material Design', iconPath: mdiMaterialDesign, color: '#888888' },
  {
    name: 'Community',
    iconPath: mdiAccountGroupOutline,
    color: '#888888',
    hide: true,
  },
];

const skillsKeys = [...skills.map((it) => it.name.toLowerCase())] as const;
export type SkillKey = typeof skillsKeys[number];

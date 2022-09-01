import {
  HomeIcon,
  NotesIcon,
  ProjectsIcon,
  ContactIcon,
} from 'src/components/Icons';
import type { MenuItemProps } from 'src/components/Menu';

export const menuItems: MenuItemProps[] = [
  {
    icon: HomeIcon,
    text: 'Home',
    href: '/',
  },
  {
    icon: NotesIcon,
    text: 'Notes',
    href: '/notes',
  },
  {
    icon: ProjectsIcon,
    text: 'Projects',
    href: '/projects',
  },
  {
    icon: ContactIcon,
    text: 'Contact',
    href: '/contact',
  },
];

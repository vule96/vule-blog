// Icons from various packs, imported directly from the package's SVG files instead of their exports so they're all
// processed consistently via svgr/webpack into React components.
// NOTE: each package's path inside ./node_modules *must* be listed in svgr's webpack config in next.config.js.

// feather icons: https://feathericons.com/
export { default as ContactIcon } from 'feather-icons/dist/icons/mail.svg';
export { default as DateIcon } from 'feather-icons/dist/icons/calendar.svg';
export { default as EditIcon } from 'feather-icons/dist/icons/edit.svg';
export { default as HomeIcon } from 'feather-icons/dist/icons/home.svg';
export { default as LinkIcon } from 'feather-icons/dist/icons/link.svg';
export { default as NotesIcon } from 'feather-icons/dist/icons/edit-3.svg';
export { default as ProjectsIcon } from 'feather-icons/dist/icons/code.svg';
export { default as TagIcon } from 'feather-icons/dist/icons/tag.svg';
export { default as ViewsIcon } from 'feather-icons/dist/icons/eye.svg';

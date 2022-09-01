// do not convert to ESM and/or TS -- this needs to be imported in CJS files like next.config.js too
module.exports = {
  // Site info
  siteName: 'Aloha',
  siteDomain: 'localhost:3000',
  siteLocale: 'vi_VN',
  timeZone: 'Asia/Bangkok', // https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List
  baseUrl: process.env.BASE_URL || '', // see next.config.js
  onionDomain: '',
  shortDescription: 'Front-End Web Developer in NT city, VN',
  longDescription:
    "Hi there! I'm a frontend web developer based in NT, Massachusetts specializing in the modern JavaScript frameworks.",
  copyrightYearStart: 2022,
  githubRepo: 'vule96/vule-blog',

  // Me info
  authorName: 'Vu Le',
  authorEmail: 'vuledev2905@gmail.com',
  authorSocial: {
    github: 'vule96',
    twitter: 'VuLH08',
    facebook: 'vule290596',
    // keybase: 'jakejarvis',
    // medium: 'jakejarvis',
    linkedin: 'huy-vũ-lê-592bb3221',
    // instagram: 'jakejarvis',
  },
};

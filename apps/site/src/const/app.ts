const APP = {
  name: "Indonesia API",
  link: {
    site: "https://indonesia-api.netlify.app",
    github: "https://github.com/indonesia-api/indonesia-api",
  },
};

function getTitle(prefix?: string, suffix?: string) {
  let title = APP.name;
  if (typeof prefix === "string") title = `${prefix} | ${title}`;
  if (typeof suffix === "string") title = `${title} | ${suffix}`;
  return title.trim();
}

export { APP, getTitle };

module.exports = [
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  {
    name: "strapi::session",
    config: {
      key: "session",
      rolling: true,
      renew: true,
      rolling: true,
      maxAge: "session",
    },
  },
  "strapi::favicon",
  "strapi::public",
];

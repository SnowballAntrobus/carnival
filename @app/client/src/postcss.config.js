const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: ["./pages/**/*.js"],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];

module.exports = {
  plugins: [
    "tailwindcss",
    "autoprefixer",
    process.env.NODE_ENV === "production" ? purgecss : null,
  ].filter(Boolean),
};

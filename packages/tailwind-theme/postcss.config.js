const tailwindcss = require(`tailwindcss`);
const path = require('path');

const tailwindCSSPath=path.join(__dirname,`tailwind.config.js`)
module.exports = {
  plugins: [
    tailwindcss(tailwindCSSPath),
    require(`autoprefixer`),
    require(`cssnano`)({
      preset: `default`
    })
  ]
};

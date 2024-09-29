const { nextui } = require("@nextui-org/react");
const flowbite = require("flowbite-react/tailwind");
const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    flowbite.content(),
    "./index.html",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        backgroundImage: {
          "hero-pattern": "url('/img/hero-pattern.svg')",
          "footer-texture": "url('/img/footer-texture.png')",
          rog: "url('/assets/1590510974402.webp')",
        },
      },

      backgroundColors: {},
      colors: {
        primary: "#0072f5",
        secondary: "#241e26",
        minSecondary: "#a696c2",
        brandYellow: "#fdc62e",
        brandGreen: "#2dcc6f",
        brandBlue: "#1476f4",
        brandWhite: "#eeeeee",
        dark: "#111111",
      },
      container: {
        // you can configure the container to be centered
        center: true,

        // or have default horizontal padding
        padding: {
          DEFAULT: '1rem',  // پدینگ پیش‌فرض برای همه سایزها
          sm: '2rem',       // پدینگ برای سایزهای بزرگتر از 640px
          md: '3rem',       // پدینگ برای سایزهای بزرگتر از 768px
          lg: '4rem',       // پدینگ برای سایزهای بزرگتر از 1024px
          xl: '5rem',       // پدینگ برای سایزهای بزرگتر از 1280px
          '2xl': '5rem',    // پدینگ برای سایزهای بزرگتر از 1536px
        },

        // default breakpoints but with 40px removed
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("daisyui"),
    flowbite.plugin(),
    require("preline/plugin"),
  ],
});

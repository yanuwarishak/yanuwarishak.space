const { fontFamily, screens } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "475px",
      ...screens,
    },
    extend: {
      screens: {
        "2lg": "1120px",
      },
      fontFamily: {
        sans: ["IBM Plex Sans", ...fontFamily.sans],
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-40px)", opacity: 0 },
          "100%": { transform: "translateY(0px)", opacity: 1 },
        },
        zoom: {
          transform: "scale(1.5)",
        },
      },
      animation: {
        slideDown: "slideDown 0.25s ease-in-out",
        zoom: "zoom 0.25s ease-in-out",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontSize: "1rem",
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.purple.400"),
              "&:hover": {
                color: theme("colors.purple.600"),
              },
              code: { color: theme("colors.purple.400") },
            },
            blockquote: {
              borderLeftColor: theme("colors.gray.700"),
              color: theme("colors.gray.200"),
            },
            "h1,h2,h3,h4": {
              color: theme("colors.gray.100"),
            },
            hr: { borderColor: theme("colors.gray.700") },
            ol: {
              li: {
                "&:before": { color: theme("colors.gray.500") },
              },
            },
            ul: {
              li: {
                "&:before": { backgroundColor: theme("colors.gray.500") },
              },
            },
            strong: { color: theme("colors.gray.100") },
            thead: {
              color: theme("colors.gray.100"),
              borderBottomColor: theme("colors.gray.600"),
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.gray.700"),
              },
            },
            code: { color: theme("colors.pink.500") },
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};

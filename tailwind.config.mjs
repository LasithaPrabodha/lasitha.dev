/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            ":not(pre) > code": {
              backgroundColor: theme("colors.neutral.200"),
              border: "1px solid",
              borderColor: theme("colors.zinc.300"),
              padding: "0.250rem 0.4rem",
              borderRadius: "0.250rem",
              fontWeight: "400",
            },
          },
        },
        invert: {
          css: {
            ":not(pre) > code": {
              backgroundColor: theme("colors.neutral.800"),
              borderColor: theme("colors.zinc.700"),
            },
          },
        },
      }),
    },
  },
  plugins: [],
};

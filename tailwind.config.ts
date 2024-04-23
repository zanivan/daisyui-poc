import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          ".btn-contained": {
            "color": "#fff",
            "text-shadow": "0 1px 1px hsla(210, 100%, 0%, 0.6)",
            "background-color": "#0073E6",
            "background-image": "linear-gradient(180deg, hsla(210, 100%, 60%, 0.2) 0%, hsla(210, 100%, 42%, 0.2) 100%)",
            "box-shadow": "#3399FF 0 2px 0 inset, #0061C2 0 -2px 0 inset, rgba(0, 0, 0, 0.1) 0 2px 4px 0",
            "border-width": "0",
          },
          ".btn-contained:hover": {
            "background-color": "#0061C2",
            "box-shadow": "none",
          },
          ".btn-outlined": {
            "color": "#006BD6",
            "background-color": "hsla(210, 100%, 96%, 0.2)",
            "border-color": "hsl(210, 100%, 90%)",
            "box-shadow": "hsla(210, 100%, 96%, 0.8) 0 2px 0 inset, hsla(210, 100%, 90%, 0.4) 0 -2px 0 inset, hsla(210, 100%, 90%, 0.5) 0 1px 2px 0",
          },
          ".btn-outlined:hover": {
            "background-color": "hsl(210, 100%, 96%)",
            "border-color": "hsl(210, 100%, 80%)",
            "box-shadow": "none",
          },
          ".btn-text": {
            "color": "#006BD6",
            "background-color": "transparent",
            "border": "none",
            "box-shadow": "none",
            
          },
          ".btn-text:hover": {
            "background-color": "#EAEDF1",
          },
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          ".btn-outlined": {
            "color": "#99CCFF",
            "background-color": "hsla(210, 100%, 23%, 0.2)",
            "border-color": "hsla(210, 100%, 23%, 0.7)",
            "box-shadow": "hsla(210, 100%, 23%, 0.2) 0 2px 0 inset, hsl(210, 0%, 0%) 0 -2px 0 inset, hsl(210, 0%, 0%) 0 1px 2px 0",
            
          },
          ".btn-outlined:hover": {
            "background-color": "#003A75",
            "border-color": "#0061C2",
            "box-shadow": "none",
          },
          ".btn-text": {
            "color": "#66B2FF",
            "background-color": "transparent",
            "border": "none",
            "box-shadow": "none",
            
          },
          ".btn-text:hover": {
            "background-color": "#1F262E",
          },
        },
      },
      "nord",
    ],
  },
  plugins: [require("daisyui")],
};
export default config;

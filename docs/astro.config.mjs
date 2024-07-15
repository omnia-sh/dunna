import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Dunna",
      social: {
        github: "https://github.com/alimehasin/dunna",
      },

      customCss: ["./src/styles/globals.css"],

      expressiveCode: {
        styleOverrides: { borderRadius: "0.25rem" },
      },

      sidebar: [
        {
          label: "Get Started",
          link: "/get-started",
        },
        {
          label: "Modules",
          autogenerate: {
            directory: "modules",
          },
        },
        {
          label: "Database",
          autogenerate: {
            directory: "database",
          },
        },
      ],
    }),
  ],
});

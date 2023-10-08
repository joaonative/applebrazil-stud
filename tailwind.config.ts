import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        1: "url('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-15-pro-202309?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1692910040844')",
        2: "url('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-15-202309?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1692719973220')",
        3: "url('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watch-s9-202309_GEO_BR?wid=400&hei=500&fmt=jpeg&qlt=95&.v=1693501298681')",
      },
      colors: {
        offwhite: "#F5F5F7",
        sectitle: "rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};
export default config;

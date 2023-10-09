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
        bg1: "url('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-15-pro-202309?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1692910040844')",
        bg2: "url('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-15-202309?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1692719973220')",
        bg3: "url('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watch-s9-202309_GEO_BR?wid=400&hei=500&fmt=jpeg&qlt=95&.v=1693501298681')",
        help1:
          "url('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-specialist-help-202305?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1684946879038')",
        help2:
          "url('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-25-apps-202108?wid=480&hei=240&fmt=p-jpg&qlt=95&.v=1626223748000')",
        help3:
          "url('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-25-genius-202108?wid=480&hei=240&fmt=p-jpg&qlt=95&.v=1626384443000')",
        promotional1:
          "url('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-education-202108_GEO_BR?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1627664704000')",
        promotional2:
          "url('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-business-202209_GEO_BR?wid=400&hei=500&fmt=jpeg&qlt=95&.v=1661285669367')",
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

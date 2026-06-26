export default function manifest() {
  return {
    name: "JS2Photo",
    short_name: "JS2Photo",
    description:
      "Hack Club YSWS for making p5.js sketches into physical prints.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f3e7",
    theme_color: "#ec3750",
    icons: [
      {
        src: "/assets/icon-square.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

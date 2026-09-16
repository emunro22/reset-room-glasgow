/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./content/**/*.js", "./lib/**/*.js"],
  theme: {
    extend: {
      colors: {
        // Sampled from Jodi's mockups, then nudged to pass WCAG contrast (see docs/site-audit.md, "Colour contrast").
        ink: "#173A31",            // deep forest green — headings, dark sections, primary buttons (11.1:1 on surface)
        "ink-deep": "#12302A",     // footer
        "ink-soft": "#3F5A52",     // body text (6.7:1 on surface, 5.9:1 on surface-2)
        "ink-faint": "#56675F",    // captions (was #7A8C85 — 3.2:1, failed)
        surface: "#F6F1EA",        // warm cream
        "surface-2": "#DDE6DD",    // sage mist
        border: "#E3DCD1",
        highlight: "#A8735D",      // clay — large italic heading words only (3.5:1 cream, 3.1:1 sage). Mockup #B9826B was 2.9:1.
        "highlight-soft": "#B9826B", // decoration only (gradients, rules) — never text
        "highlight-light": "#D4A48F", // clay on dark green (5.6:1)
        "highlight-deep": "#8A5645", // text links on light backgrounds (5.3:1 cream, 4.7:1 sage)
        star: "#9C7A3A",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: { prose: "46rem" },
    },
  },
  plugins: [],
};

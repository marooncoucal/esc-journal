// /** @type {import('tailwindcss').Config} */ было до подключения шрифтов
// module.exports = {
//     content: [
//       "./app/**/*.{js,ts,jsx,tsx}",
//       "./components/**/*.{js,ts,jsx,tsx}",
//       "./pages/**/*.{js,ts,jsx,tsx}",
//     ],
//     theme: {
//       extend: {
//         fontFamily: {
//           inter: ['Inter', 'sans-serif'],
//           helvetica: ['Helvetica Neue', 'sans-serif'],
//           heading: ['Heading Now Trial', 'sans-serif'],
//         },
//       },
//     },
//     plugins: [],
    
//   }
  /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        helvetica: ['Helvetica Neue', 'sans-serif'],
        heading: ['Heading Now Trial', 'sans-serif'],

        // Подключённые локальные шрифты:
        menu: ['var(--font-yffra-hyper)', 'sans-serif'],        // YFFRARETRIAL-HyperMedium
        label: ['var(--font-yffra-giga)', 'sans-serif'],        // YFFRARETRIAL-GigaMedium
        title: ['var(--font-yffra-ecto)', 'sans-serif'],        // YFFRARETRIAL-EctoBold
        text: ['var(--font-lato-semibold)', 'sans-serif'],      // Lato SemiBold — основной текст
        bold: ['var(--font-lato-bold)', 'sans-serif'],          // Lato Bold — выделения
        italic: ['var(--font-lato-italic)', 'sans-serif'],      // LatoMediumItalic — цитаты
      },
    },
  },
  plugins: [],
};

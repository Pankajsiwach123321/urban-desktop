/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'Inter': ['Inter', 'sans-serif'],
      'LibreFranklin': ['Libre Franklin', 'sans-serif'],
    },
    backgroundImage: {
      "browngradiant": ['linear-gradient(152deg, #FFC881 -19.27%, #DA8517 109.91%)'],
      "brownlightgr": ['linear-gradient(90deg, rgba(238, 169, 80, 0.27) 2.77%, rgba(238, 169, 80, 0.00) 109.06%)'],
    },
    extend: {
      boxShadow: {
        'buttonmy': '6px 4px 25px 0px rgba(229, 156, 62, 0.34) ',
        'carditems': ' 0px 0px 1px 0px rgba(0, 0, 0, 0.04), 0px 0px 2px 0px rgba(0, 0, 0, 0.06), 0px 4px 8px 0px rgba(0, 0, 0, 0.04);',
        'Aside': 'box-shadow: 1px 4px 34px 0px rgba(255, 255, 255, 0.25);',
      }
    },
  },
  plugins: [],
}


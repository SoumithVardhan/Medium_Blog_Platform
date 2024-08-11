/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'medium':['gt-super, Georgia, Cambria, "Times New Roman", Times, serif'],
      'medium2':['sohne, "Helvetica Neue", Helvetica, Arial, sans-serif'],
      'medium3':['ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"']
    },
    extend: {
      colors:{
        'primary':'#F7F4ED',
        'secondary':'#fff8e7',
        'tertiary':'#FFB613',
      },
      height:{
        '55':'35.7rem',
        '69': '40rem',
        '50': '50rem',
        '15': '63px',
        '21': '30.8rem'
      },
      width:{
        '69':'30rem',
        '60':'62rem',
        "40":'40rem',
        '50':'50rem',
        '31':'20rem'
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        quantico: ["Quantico", "serif"],
        jersey: ["'Jersey 10'", "serif"],
        jersey25: ["'Jersey 25'", "serif"],
        roboto: ["Roboto", "serif"],
        khdam: ["'Kdam Thmor Pro'", "serif"],
        inter: ["'Inter Tight'", "serif"],
        montserrat: ["Montserrat", "serif"],
        interBold: ["Inter", "serif"],
      }, colors: {
        textmuc : ["#EF7E00"],
        btnmuc : ["#FF8F12"],
        wdctxt :["#F1591C"],
        wdcbtn :["#F1591C"],
        ctfbtn :["#1E398E"],
        ctftxt :["#1B378F"],
        semnascl :["#4AABFF"],
        sponcl: ["#1D0073"],
        sponbg : ["#68E111"],
        spbtn : ["#009723"],
        faqbg : ["#009723"],
        anstxt :["#2D678C"],

      
        
    },
  },
  plugins: [],
}
}


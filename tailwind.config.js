/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem"
    },
    extend: {
      colors: {
        "primary": "#00aaaa",
        "secondary": "#bbbbbb",
        "dimmed": "#eee"
      },
      keyframes: {
        "kf-blink": {
          "from": {color: "transparent"},
          "to": {color: "transparent"},
          "50%": {color: "#00aaaa"}
        },
      },
      animation: {
        "blink": "1s kf-blink step-end infinite"
      }
    },
  },
  plugins: [
    function ({addComponents}) {
      addComponents({
        ".pixelated": {
          "image-rendering": "pixelated",
        },
      })
    }
  ],
}


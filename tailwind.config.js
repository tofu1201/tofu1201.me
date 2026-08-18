/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        notebook: {
          desk: '#2C2824',       // Wood Desk Surface
          cover: '#3D3833',      // Leather Cover Edge
          page: '#FAF7F0',       // Warm Cream Notebook Page
          grid: '#E6E1D5',       // Faint Paper Grid / Lines
          ink: '#23201D',        // Dark Fountain Pen Ink
          subtle: '#6B655C',     // Muted Pen Ink
          border: '#D8D2C4',     // Paper Edge Border
        },
        stickyNote: {
          yellow: '#FEF08A',     // Classic Yellow Post-it
          pink: '#FCE7F3',       // Pastel Pink Post-it
          blue: '#E0F2FE',       // Pastel Sky Blue Post-it
          mint: '#D1FAE5',       // Pastel Mint Post-it
          peach: '#FFEDD5',      // Soft Peach Post-it
        }
      },
      fontFamily: {
        heading: ['Marcellus', 'serif'],
        body: ['Josefin Sans', 'sans-serif'],
      },
      boxShadow: {
        'page-shadow': '-10px 0 20px rgba(0,0,0,0.15), 10px 15px 30px rgba(0,0,0,0.12)',
        'sticky': '3px 6px 14px rgba(44, 40, 36, 0.1)',
        'sticky-hover': '5px 12px 22px rgba(44, 40, 36, 0.16)',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    black: '#050505',
                    graphite: '#121212',
                    steel: '#888C8D',
                    gold: '#B89947',
                    light_steel: '#D1D5DB'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
            },
            backgroundImage: {
                'spotlight-gradient': 'radial-gradient(ellipse at 50% 50%, rgba(184,153,71,0.15) 0%, transparent 60%)',
            },
            animation: {
                'slow-drift': 'drift 15s ease-in-out infinite alternate',
            },
            keyframes: {
                drift: {
                    '0%': { transform: 'translate(-2%, -3%) scale(1)' },
                    '50%': { transform: 'translate(2%, 4%) scale(1.05)' },
                    '100%': { transform: 'translate(-4%, 2%) scale(1.1)' },
                }
            }
        },
    },
    plugins: [],
}

/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    content: [
        './src/**/*.{html,js,svelte,ts}',
        './index.html',
    ],
    theme: {
        extend: {
            colors: {
                background: '#1E1E1E',
                primary: '#18F2B2',
                light: '#F0EBD8',
                secondary: '#595959',
                secodaryLight: '#8B9EB7',
                btnPrimary: '#252633',
                btnBorder: '#595959',
                textWhite: '#FAFAFA',
                textDark: '#A8ADB2',
                logo: "#C5C5C5",
                border: "#282828",
                go: '#1CCAD8',
                svelte: '#FF3E00',
            },
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            screens: {
                '3xl': '1700px'
            }
        },
    },
    plugins: [
    ],
}


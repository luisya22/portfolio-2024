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
                background: '#1D1E2C',
                primary: '#18F2B2',
                light: '#F0EBD8',
                secondary: '#595959',
                secodaryLight: '#8B9EB7',
                btnPrimary: '#252633',
                btnBorder: '#595959',
                textWhite: '#FAFAFA',
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


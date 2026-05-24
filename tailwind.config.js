/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        sans: ['Inter', '-apple-system', 'system-ui', 'sans-serif'],
      },
      colors: {
        // ĐÃ SỬA: Đổi từ xanh lá sang dải màu xanh LinkedIn
        primary: {
          50: '#f0f8fb',
          100: '#dceef6',
          200: '#bae1ef',
          300: '#89cbe3',
          400: '#52abd4',
          500: '#0077B5', // Màu chính
          600: '#025f92',
          700: '#034c76',
          800: '#054061',
          900: '#093551',
          950: '#062236',
          DEFAULT: '#0077B5', // Màu mặc định
        },
        accent: {
          500: '#FFB800',
          700: '#FF9500',
          DEFAULT: '#FFB800',
        },
        neutral: {
          50: '#F5F7FA',
          100: '#E8EDF2',
          200: '#C5CDD3',
          300: '#A2ADB6',
          400: '#7A8894',
          500: '#5A6873',
          600: '#2D3841',
          700: '#1E272E',
          800: '#141B20',
          900: '#0A0E11',
          950: '#000000',
        },
        bg: {
          page: '#000000',
          surface: '#0A0E11',
          elevated: '#141B20',
        },
      },
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        6: '24px',
        8: '32px',
        12: '48px',
        16: '64px',
        24: '96px',
        32: '128px',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        DEFAULT: '8px',
      },
      boxShadow: {
        // ĐÃ SỬA: Đổi rgba của bóng đổ (shadow) sang rgba của #0077B5 (0, 119, 181)
        sm: '0 1px 2px rgba(0, 119, 181, 0.05)',
        card: '0 4px 16px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 32px rgba(0, 0, 0, 0.5)',
        modal: '0 24px 48px rgba(0, 0, 0, 0.7)',
        glow: '0 0 16px rgba(0, 119, 181, 0.3)',
      },
      keyframes: {
        'typewriter': {
          from: { width: '0' },
          to: { width: '100%' },
        },
        'blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        'glitch': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      animation: {
        'typewriter': 'typewriter 2s steps(40, end)',
        'blink': 'blink 1s infinite',
        'glitch': 'glitch 0.3s ease-in-out',
        'scanline': 'scanline 8s linear infinite',
      },
    },
  },
  plugins: [],
}
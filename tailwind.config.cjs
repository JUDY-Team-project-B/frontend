/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,scss}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard-Regular', 'sans-serif'],
      },
      screens: {
        sm: '465px',
        md: '768px',
        lg: '1024px',
        xl: '1640px',
      },
    },
  },
};

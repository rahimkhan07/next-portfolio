
module.exports = {
  content: [
    // your paths
  ],
  theme: {
    extend: {
      keyframes: {
        dropIn: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        dropIn: 'dropIn 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};

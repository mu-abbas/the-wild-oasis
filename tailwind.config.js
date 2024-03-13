/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      mono: ['Sono', 'monospace'],
    },
    colors: {
      /* Main */
      'brand-50': '#eef2ff',
      'brand-100': '#e0e7ff',
      'brand-200': '#c7d2fe',
      'brand-500': '#6366f1',
      'brand-600': '#4f46e5',
      'brand-700': '#4338ca',
      'brand-800': '#3730a3',
      'brand-900': '#312e81',

      /* Grey */
      'grey-0': '#fff',
      'grey-50': '#f9fafb',
      'grey-100': '#f3f4f6',
      'grey-200': '#e5e7eb',
      'grey-300': '#d1d5db',
      'grey-400': '#9ca3af',
      'grey-500': '#6b7280',
      'grey-600': '#4b5563',
      'grey-700': '#374151',
      'grey-800': '#1f2937',
      'grey-900': '#111827',

      /* Secondary */
      'blue-100': '#e0f2fe',
      'blue-700': '#0369a1',
      'green-100': '#dcfce7',
      'green-700': '#15803d',
      'yellow-100': '#fef9c3',
      'yellow-700': '#a16207',
      'silver-100': '#e5e7eb',
      'silver-700': '#374151',
      'indigo-100': '#e0e7ff',
      'indigo-700': '#4338ca',

      /* Tertiary */
      'red-100': '#fee2e2',
      'red-700': '#b91c1c',
      'red-800': '#991b1b',

      /* Backdrop */
      backdrop: 'rgba(255, 255, 255, 0.1)',
    },
    extend: {
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};

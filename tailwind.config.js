/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ============================================================
        // DESIGN 1 — Dark Portfolio (Mostafa Yehia — Dark Version)
        // ============================================================
        dark: {
          // --- الخلفيات ---
          'bg-primary': '#0A0E1A', // الخلفية الرئيسية (أسود داكن)
          'bg-card': '#2D3449', // خلفية الـ cards - Toolkit - cta
          'bg-section': '#131B2E',

          // --- الـ Accent ---
          teal: '#44E2CD', // اللون الأساسي — Yehia، Toolkit، Works
          green: '#34D399', // شريط Problem Solved
          blue: '#1000A9  ', // زرار CTA الأزرق
          mouve: '#C0C1FF', // اللينير التاني
          // --- النصوص ---
          'text-primary': '#C7C4D7', // النص  الرئيسي
          'text-secondary': '#908FA0', // النصوص الثانوية (الوصف)
          'text-muted': '#64748B', // النصوص الأصغر والـ muted
          'button-text': '#DAE2FD',

          // --- الـ Borders والـ Tags ---
          'border-card': '#1E3A5F', // حدود الـ cards
          'btn-blue': '#1D4ED8', // زرار View My Work
          'tag-bg': '#374151', // خلفية الـ tags (React, Next.js...)
          'nav-border': '#818CF8',
        },

        // ============================================================
        // DESIGN 2 — Light Portfolio (Mostafa Yehia — Light Version)
        // ============================================================
        light: {
          // --- الخلفيات ---
          'bg-primary': '#FFFFFF', // الخلفية الرئيسية (أبيض)
          'bg-secondery': '#F7F9FB',
          'bg-card': '#FFFFFF', // خلفية الـ cards
          'bg-toolkit': '#EEEEF5', // خلفية قسم الـ Toolkit
          'bg-cta': '#3730C8', // خلفية قسم الـ CTA (بنفسجي داكن)
          // --- الـ Accent ---
          purple: '#3B3BC8', // بنفسجي — عناوين الـ Hero
          teal: '#17B8A6', // Teal — Accent
          green: '#34D399', // شريط Problem Solved
          blue: '#2563EB', // زرار CTA الأزرق

          // --- النصوص ---
          'text-primary': '#111827', // النص الأسود الرئيسي
          'text-secondary': '#464554', // النصوص الثانوية (الوصف)
          'text-muted': '#9CA3AF', // النصوص الأصغر والـ muted
          'nav-Color': '#475569', // لون النص في الـ Navbar عندما يكون active

          // --- الـ Borders والـ Tags ---
          'border-card': '#D1D5DB', // حدود الـ cards
          'tag-bg': '#E5E7EB', // خلفية الـ tags
        },

        // ============================================================
        // SHARED — ألوان مشتركة بين الـ Dark والـ Light
        // ============================================================
        shared: {
          purple: '#3B3BC8', // بنفسجي — عناوين الـ Hero (الاتنين)
          'teal-dark': '#2DD4BF', // Teal في الـ Dark Mode
          'teal-light': '#17B8A6', // Teal في الـ Light Mode
          green: '#34D399', // أخضر Problem Solved (الاتنين)
          'blue-cta': '#2563EB', // أزرق زرار CTA (الاتنين)
        },
      },
    },
    fontFamily: {
      sans: ['var(--font-plus-jakarta-sans)', 'sans-serif'],
      mono: ['var(--font-inter)', 'monospace'],
    },
    fontSize: {
      12: '0.75rem', // 12px
      14: '0.875rem', // 14px
      16: '1rem', // 16px
      18: '1.125rem', // 18px
      20: '1.25rem', // 20px
      24: '1.5rem', // 24px
      28: '1.75rem', // 28px
      35: '2.1875rem', // 35px
      40: '2.5rem', //40px
    },
  },
  plugins: [],
};

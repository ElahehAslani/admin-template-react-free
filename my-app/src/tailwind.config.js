module.exports = {
  theme: {
    extend: {
      spacing: {
        '9': '2.25rem',
        '18': '4.5rem',
        '30': '7.5rem',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
        '120': '30rem',
        // '144': '36rem',
        '168': '42rem',
      },
      colors: {
        'brand-1': '#00b0a1',
        'brand-2': '#22cc85',
        'brand-3': '#ff8800',
        'brand-4': '#e4e4e4',
        'brand-5': '#0e3537',
        'brand-6': '#4a4a4a',
        'brand-7': '#cbf3e3',
        'brand-8': '#caf5ee',
        'brand-9': '#9B9B9B',
        'brand-10': '#F8E71C',
        'brand-11': '#231F20',
        'brand-12': '#f5f9fb',
      },
      borderRadius: {
        '3': '3px',
        '20': '20px',
        '26': '26px',
      },
      fontSize: {
        size1: '.555rem', // 10px
        size2: '.666rem', // 12px
        size3: '.777rem', // 14px
        size4: '.888rem', // 16px
        size5: '1rem', // 18px
        size6: '1.111rem', // 20px
        size7: '1.222rem', // 22px
        size8: '1.333rem', // 24px
      },
      zIndex: {
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '60': 60,
        '70': 70,
        '80': 80,
        '90': 90,
        '100': 100,
        '101': 101,
        '102': 102,
        '103': 103,
        '104': 104,
        '105': 105,
        '106': 106,
        '107': 107,
        '108': 108,
        '109': 109,
        '110': 110,
        '120': 120,
        '130': 130,
        '140': 140,
        '150': 150,
      },
    },
    fontFamily: {
      body: ['IRANSans'],
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
};

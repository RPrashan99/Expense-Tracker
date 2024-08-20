/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
    'node_modules/flowbite-react/lib/esm/**/*.js',],
  theme: {
    extend: {
      colors: {
        //incomeBC: '#62956A',
        incomeBC: '#00DDA2',
        incomeHover: '#00E7B1',
        incomeAmount: '#048320',
        //incomeHover: '#5fad5f',
        focusColor:'#767575',
        //incomeBC: '#73B285',
        //incomeBC:'#98E0AC',
        //expenseBC: '#C4896F',
        expenseBC: '#334050',
        expenseHover: '#28323e',
        expenseAmount: '#CC0909',
        blurBC: '#E0FFEF',
        //expenseHover: '#da997d',
        //golden: '#CDA618'
        // golden: '#B5710A',
        // goldenHover: '#bc8736',
        golden: '#B5C6C5',
        goldenHover: '#BDCDCC',
        textColor:'#FFFFF',
        subText: '#454545',
        error: '#ef4444'
      },
      backgroundImage: {
        'credit-card': "url('/images/creditCard.png')",
        'voucher': "url('/images/voucherNew.png')",
        'bgExpenses': "url('/images/bgExpenses-01.jpeg')",
        'bgIncome': "url('/images/bgIncome.jpeg')"
      },
      backdropBlur: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      
    },
  },
  plugins: [],
}


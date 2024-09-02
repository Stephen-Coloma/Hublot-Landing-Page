//importing fonts
import { Montserrat, Libre_Baskerville } from 'next/font/google'

export const montserrat = Montserrat({
    variable: '--font-montserrat',
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

export const libre_baskerville = Libre_Baskerville({
    variable: '--font-libre-baskerville',
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

import './globals.css' 

export const metadata = {
  title: "Hublot Watches",
  description: "Static page inspired by the Official Hublot Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${libre_baskerville.variable}`}>
      <body>{children}</body>
    </html>
  );
}
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: {
    template: '%s | Fruitlandcyprus',
    default: 'Premium Fruits from Cyprus',
  },
  description: 'Family-owned fruit farm providing fresh avocadoes, mangoes, oranges, tangerines, and other citrus varieties directly from our Cyprus orchards to your table since 2003.',
  metadataBase: new URL('https://fruitlandcyprus.com'),
  openGraph: {
    title: 'Fruitlandcyprus - Premium Fruits',
    description: 'Fresh, sun-ripened fruits grown in Cyprus and delivered direct from our family farm.',
    type: 'website',
    locale: 'en_US',
    url: 'https://fruitlandcyprus.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

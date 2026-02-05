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
    template: '%s | Fruitland Cyprus',
    default: 'Premium Citrus Fruits - Farm Direct from Cyprus',
  },
  description: 'Family-owned citrus farm providing fresh oranges, lemons, and grapefruits directly from our Cyprus orchards to your table since 1985.',
  metadataBase: new URL('https://fruitland-cy.com'),
  openGraph: {
    title: 'Fruitland Cyprus - Premium Citrus Fruits',
    description: 'Fresh, sun-ripened citrus fruits grown in Cyprus and delivered direct from our family farm.',
    type: 'website',
    locale: 'en_US',
    url: 'https://fruitland-cy.com',
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

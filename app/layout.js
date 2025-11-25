import { Poppins, Inter, Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Menu from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NavbarWrapper from "@/components/layout/NavbarWrapper";
import FooterWrapper from "@/components/layout/FooterWrapper";
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata = {
  title: "Jono Shato Foundation",
  description: "Official website of Jono Shato Foundation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${poppins.variable} 
          ${inter.variable} 
          ${montserrat.variable} 
          ${openSans.variable} 
          antialiased
        `}
      >
        <NavbarWrapper />
        <main>{children}</main>
        <FooterWrapper />
      </body>
    </html>
  );
}

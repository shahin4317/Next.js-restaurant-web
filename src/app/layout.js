import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import NavbarPage from "@/components/Navbar/page";
import FooterPage from "@/components/Footer/page";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Leaf & Plate",
  description: "Modern Restaurant Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${playfair.variable} font-sans min-h-full flex flex-col`}>
        
        <NavbarPage />

        <main className="flex-1">
          {children}
        </main>

        <FooterPage />

      </body>
    </html>
  );
}
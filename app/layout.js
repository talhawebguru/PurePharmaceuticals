import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pure Pharmaceuticals",
  description: "Created By M.Talha Rehman",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><Header/>{children}<Footer/></body>
    </html>
  );
}

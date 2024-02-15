import { Courgette } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const inter = Courgette({ subsets: ["latin"], weight: ['400'] });

export const metadata = {
  title: "Omookunrin",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
      <div className="min-h-screen">

        {children}
      </div>
      <Footer />
      </body>
  </html>
);
}
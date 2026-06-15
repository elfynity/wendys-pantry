import { Inter } from "next/font/google";
import "./style.css";
import './responsive.css';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight:["300", "600"],
  preload: false 
});

export const metadata = {
  title: "Wendy's Pantry",
  description: "Freshly Cooked Home Cooked Meal deliveries in Westville, Durban",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
       <Header />
        <div className="site">
          
          {children}
          
        </div>

        <Footer />
      </body>
    </html>
  );
}

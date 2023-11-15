import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fairo Web App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} max-w-[1440px] mx-auto h-[926px] md:h-[900px] bg-_bgSlateColor`}
      >
        {children}
      </body>
    </html>
  );
}

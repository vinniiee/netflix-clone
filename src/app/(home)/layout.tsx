import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../ui.css";
import "../globals.css";
import Navbar from "./Navbar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Netflix Clone",
  description: "Netflix Clone - made with Next.js 14",
  icons:{
    icon:'/icon.ico'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <Navbar classes="fixed top-0" />
        {children}
      </body>
    </html>
  );
}

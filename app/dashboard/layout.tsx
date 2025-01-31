import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import Sider from "./static/Sider/Sider";

const inter: NextFont = Inter({ subsets: ["latin"] });
// const inter: NextFont = Inter({
//   weight: "300",
//   style: "normal",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Library Management",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full md:flex">
          <div className="hidden md:flex md:fixed z-20">
            <Sider />
          </div>
          <div className="w-full flex justify-end items-center">
            <div className="w-full md:w-[calc(100vw-230px)] bg-black transition-all duration-500">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";
import ActiveSectionContextProvider from "@/context-api/active-section-context";
import { Toaster } from "react-hot-toast";
import favicon from "./favicon.ico";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/buttons/theme-switch";
import ThemeSwitchContext from "@/context-api/theme-switch-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anas | Personal Porfolio",
  description:
    "Anas is Software Engineer. Mainly expert in Frontend Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="icon" href="/app/favicon-profile" />
      </head>

      <body
        className={`${inter.className} bg-gray-50 text-gray-950 dark:bg-[#030637] dark:text-gray-50 relative pt-28 sm:pt-10`}
      >
        <ActiveSectionContextProvider>
          <ThemeSwitchContext>
            <div className="dark:bg-[#3C0753] bg-[#c3f3f7] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
            <div className="bg-[#f4e0ed] dark:bg-[#4f1d42] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "></div>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ThemeSwitchContext>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}

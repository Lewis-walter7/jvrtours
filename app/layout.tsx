import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import  ThemeProvider  from "./context/ThemeContext";
import Header from "./components/header";
import ActiveSectionContextProvider, { ActiveSectionContext } from "./context/active-section-context";
import Navbar from "./components/navbar";
import ThemeSwitch from "./components/theme-switch";
import Footer from "./components/footer";
import { Toaster } from "react-hot-toast";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home - JVR Tours Company",
  description: "Jvr Tours Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.add(theme);
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <ActiveSectionContextProvider>
            <Navbar />
            <Header />
          <main>{children}</main>
          <Toaster/>
          <Footer />
          <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Horizontal from "@/components/Horizontal";
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

import { ToastContainer } from "react-toastify";
import NavBar from "@/components/Header";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import StoreProvider from "./providers/StoreProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StoreProvider>
          <MantineProvider>
            <NavBar />
            <Horizontal />

            <Layout>
              {children}
              <ToastContainer />
            </Layout>

            <Horizontal />
            <Footer />
          </MantineProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
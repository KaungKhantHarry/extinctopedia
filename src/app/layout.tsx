import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "../context/AuthContext";
import NavBar from "../components/app/layout/NavBar/NavBar";
import Footer from "@/components/app/layout/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Extinctopedia",
  description: "Discover extinct and endangered species across the world.",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "icon", url: "/web-app-manifest-512x512.png" }, 
    { rel: "apple-touch-icon", url: "/apple-icon.png", sizes: "180x180" }, 
  ],
  manifest: "/manifest.json", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
          <AuthProvider>
            <NavBar />
            <div className="pt-[70px] md:pt-[105px]">
                {children}
            </div>
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";

export const metadata = {
  title: "Jobpost",
  description: "A website of Jobpost made using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-between min-h-screen bg-gradient-conic from-slate-500 via-slate-400 to-slate-100">
        <Navbar />
        <div className="flex flex-row h-full">
          <Sidebar />
          {children}
        </div>
        <div className=""><Footer /></div>
      </body>
    </html>
  );
}

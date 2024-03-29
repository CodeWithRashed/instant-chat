"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/component/Sidebar";
import { usePathname } from "next/navigation";
import { DataContextProvider } from "@/context/DataContext";
import { ToastContainer } from "react-toastify";
import { SocketContextProvider } from "@/context/SocketContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathNames = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        <DataContextProvider>
          <SocketContextProvider>
            <div className="app">
              {children}
            </div>
          </SocketContextProvider>
        </DataContextProvider>
        <ToastContainer></ToastContainer>
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import CustomNav from "./Component/CustomNav";
import CustomFoot from "./Component/CustomFoot";
import ContextProvider from "@/Context/CartContext";
import UserProvider from "@/Context/UserContext";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shop - T-Shirts Store",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <ContextProvider>
            <CustomNav />
            {children}
            <CustomFoot />
          </ContextProvider>
        </UserProvider>
      </body>
    </html>
  );
}

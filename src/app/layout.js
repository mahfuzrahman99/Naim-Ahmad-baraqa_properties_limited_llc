import { PhotoProvider } from "@/components/ui/PhotoView";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./provider/AuthProvider";
import SearchTextProvider from "./provider/SearchTextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Baraqa Properties Limited LLC",
  description:
    "Baraqa Properties Limited LLC offers comprehensive real estate services, specializing in personalized solutions to meet your unique needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className + " bg-[#f2f2f2] text-[#141414]"}>
        <PhotoProvider>
          <SearchTextProvider>
            <AuthProvider>{children}</AuthProvider>
          </SearchTextProvider>
        </PhotoProvider>
      </body>
    </html>
  );
}

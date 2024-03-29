import Navbar from "../components/NavBar";
import { fonts } from "@/utils/fonts";
import { Providers } from "./providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formula 1 App",
  description: "Formula 1 App by m1rels - Mirel Korajac",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fonts.nunito.variable}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}

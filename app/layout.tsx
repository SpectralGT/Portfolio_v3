import type { Metadata } from "next";
import "./globals.css";
import FluidOverlay from "./components/fluid_overlay";

export const metadata: Metadata = {
  title: "Atharv Singh Portfolio",
  description: "Atharv Singh Portfolio",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FluidOverlay>
          {children}
        </FluidOverlay>
      </body>
    </html>
  );
}

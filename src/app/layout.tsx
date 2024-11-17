// import bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css'
// import bootstrap
import 'bootstrap/dist/css/bootstrap.css'
// import aos (animation of scroll)
import 'aos/dist/aos.css'


import type { Metadata } from "next";
import {EB_Garamond} from "next/font/google";
import "./variables.css";
import "./globals.css";


const ebGaramond = EB_Garamond({subsets: ['latin']});

export const metadata: Metadata = {
  title: "Digital App",
  description: "Made by Arkopravo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ebGaramond.className}>
        {children}
      </body>
    </html>
  );
}

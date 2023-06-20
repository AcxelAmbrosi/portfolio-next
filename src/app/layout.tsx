import NavBar from "@/components/NavBar";
import "./globals.css";
import { Poppins } from "@next/font/google";
import { Foot } from "@/components/Foot";
export const metadata = {
  title: "Acxel Ambrosi | Portfolio",
  description: "Generated by Next.js",

};
const poppins = Poppins({
  weight: ["400", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <link rel='icon' href='/icons/favicon.ico' />
      </head>
      <body>
        <header>
          <NavBar />
        </header>
        <main>{children}</main>
        <footer>
          <Foot />
        </footer>
      </body>
    </html>
  );
}

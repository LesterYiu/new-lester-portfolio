import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: `Lester Yiu - Developer`,
  description: `This is a portfolio website made by Lester Yiu`,
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <section className="min-h-screen">
          <main>{children}</main>
        </section>
      </body>
    </html>
  );
}

import { draftMode } from "next/headers";
import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { getHeader } from "@/lib/api";

export const metadata = {
  title: `Lester Yiu - Developer`,
  description: `This is a portfolio website made by Lester Yiu`,
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

	const { isEnabled } = draftMode();
	const results = await getHeader( isEnabled );
	const headerCollection = results.headers[ 0 ];

	return (
		<html lang="en" className={inter.variable}>
			<body>
				<Header 
					{
						...{
							...headerCollection
						}
					}
				/>
				<section className="min-h-screen">
					<main>{children}</main>
				</section>
			</body>
		</html>
	);
}

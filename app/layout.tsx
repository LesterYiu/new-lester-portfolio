import { draftMode } from 'next/headers';
import './globals.css';
import { getPageData } from '@/lib/api';

export const metadata = {
  title: `Lester Yiu - Developer`,
  description: `This is a portfolio website made by Lester Yiu`,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

	const { isEnabled } = draftMode();
	const results = await getPageData( isEnabled, '/' );

	return (
		<html lang='en'>
			<head>
				<link 
					{
						...{
							rel : 'preconnect',
							href : 'https://fonts.googleapis.com'
						}
					}
				/>
				<link 
					{
						...{
							rel : 'preconnect',
							href : 'https://fonts.gstatic.com',
							crossOrigin : 'anonymous'
						}
					}
				/>
				<link 
					{
						...{
							href : 'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Outfit:wght@100..900&display=swap',
							rel : 'stylesheet'
						}
					}
				/>
			</head>
			<body>
				<section className='min-h-screen'>
					<main>
						{ children }
					</main>
				</section>
			</body>
		</html>
	);
}

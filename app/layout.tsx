import Loader from './components/Loader';
import './globals.css';

export const metadata = {
  title: `Lester Yiu - Developer`,
  description: `This is a portfolio website made by Lester Yiu`,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

	return (
		<html lang='en' className='scroll-smooth' suppressHydrationWarning>
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
			<body className='dark-bg'>
				<main>
					<Loader />
					{ children }
				</main>
			</body>
		</html>
	);
}

import Loader from './components/Loader';
import './globals.css';

export const metadata = {
	title: 'Lester Yiu - Portfolio',
	description: 'This is a portfolio website made by Lester Yiu',
	openGraph: {
		type: 'website',
		url: 'https://lesteryiu.com/',
		title: 'Lester Yiu - Portfolio',
		description: 'This is a portfolio website made by Lester Yiu',
		images: [
			{
				url: 'https://lester-portfolio-prod.netlify.app/social-card.png',
				alt: "Lester Yiu's Social Card"
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		title: "Lester Yiu - Portfolio",
		description: 'This is a portfolio website made by Lester Yiu',
		images: [
			'https://lester-portfolio-prod.netlify.app/social-card.png'
		]
	}
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
				<link
					{
						...{
							rel: 'shortcut icon',
							href: 'https://lester-portfolio-prod.netlify.app/favicon-16x16.png',
							type: 'image/x-icon'
						}
					}
				/>
				<link
					{
						...{
							rel: 'icon',
							type: 'image/png',
							sizes: '16x16',
							href: 'https://lester-portfolio-prod.netlify.app/favicon-16x16.png'
						}
					}
				/>
				<link
					{
						...{
							rel: 'icon',
							type: 'image/png',
							sizes: '32x32',
							href: 'https://lester-portfolio-prod.netlify.app/favicon-32x32.png'
						}
					}
				/>
				<link
					{
						...{
							rel: 'icon',
							type: 'image/png',
							sizes: '96x96',
							href: 'https://lester-portfolio-prod.netlify.app/favicon-96x96.png'
						}
					}
				/>
				<link
					{
						...{
							rel: 'icon',
							type: 'image/png',
							sizes: '192x192',
							href: 'https://lester-portfolio-prod.netlify.app/favicon-192x192.png'
						}
					}
				/>
				<link
					{
						...{
							rel: 'apple-touch-icon',
							sizes: '57x57',
							href: 'https://lester-portfolio-prod.netlify.app/favicon-57x57.png'
						}
					}
				/>
				<link
					{
						...{
							rel: 'apple-touch-icon',
							sizes: '60x60',
							href: 'https://lester-portfolio-prod.netlify.app/favicon-60x60.png'
						}
					}
				/>
				<link
					{
						...{
							rel: 'apple-touch-icon',
							sizes: '72x72',
							href: 'https://lester-portfolio-prod.netlify.app/favicon-72x72.png'
						}
					}
				/>
				<link
					{
						...{
							rel: 'apple-touch-icon',
							sizes: '76x76',
							href: 'https://lester-portfolio-prod.netlify.app/favicon-76x76.png'
						}
					}
				/>
				<link
					{
						...{
							rel: 'apple-touch-icon',
							sizes: '114x114',
							href: 'https://lester-portfolio-prod.netlify.app/favicon-114x114.png'
						}
					}
				/>
				<link
					{
						...{
							rel: 'apple-touch-icon',
							sizes: '120x120',
							href: 'https://lester-portfolio-prod.netlify.app/favicon-120x120.png'
						}
					}
				/>
				<link
					{
						...{
							rel: 'apple-touch-icon',
							sizes: '144x144',
							href: 'https://lester-portfolio-prod.netlify.app/favicon-144x144.png'
						}
					}
				/>
				<link
					{
						...{
							rel: 'apple-touch-icon',
							sizes: '152x152',
							href: 'https://lester-portfolio-prod.netlify.app/favicon-152x152.png'
						}
					}
				/>
				<link
					{
						...{
							rel: 'apple-touch-icon',
							sizes: '180x180',
							href: 'https://lester-portfolio-prod.netlify.app/favicon-180x180.png'
						}
					}
				/>
			</head>
			<body className='dark-bg'>
				<a 
					{
						...{
							href : '#main',
							className : 'reduce-motion:transition-none w-full bg-white display flex items-center justify-center fixed -top-20 h-20 text-black text-base focus:top-0 z-[9999] transition-all duration-300 font-jost'
						}
					}
				>
					Skip To Main Content
				</a>
				<main>
					<Loader />
					{ children }
				</main>
			</body>
		</html>
	);
}

import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/navbar';
import { hankenGrotesk, hostGrotesk, libreCaslonText } from './fonts';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
	title: 'Home',
	description: 'Promoto Landing Page',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={` antialiased relative w-screen min-h-screen ${hankenGrotesk.variable} ${libreCaslonText.variable} ${hostGrotesk.variable} flex flex-col items-center`}
			>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}

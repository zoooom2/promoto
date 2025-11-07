import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/navbar';
import Sidebar from '@/components/layout/sidebar';
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
				className={` antialiased relative min-w-screen min-h-screen ${hankenGrotesk.variable} ${libreCaslonText.variable} ${hostGrotesk.variable}`}
			>
				<Navbar />
				{/* <Sidebar /> */}
				{children}
				<Footer />
			</body>
		</html>
	);
}

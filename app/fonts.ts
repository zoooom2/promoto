import {
	Hanken_Grotesk,
	Libre_Caslon_Text,
	Host_Grotesk,
} from 'next/font/google';

export const hankenGrotesk = Hanken_Grotesk({
	variable: '--font-hanken-grotesk',
	subsets: ['latin'],
});

export const libreCaslonText = Libre_Caslon_Text({
	variable: '--font-libre-caslon-text',
	weight: ['400', '700'],
	subsets: ['latin'],
	fallback: ['serif'],
	style: ['italic', 'normal'],
});

export const hostGrotesk = Host_Grotesk({
	variable: '--font-host-grotesk',
	fallback: ['sans-serif'],
	subsets: ['latin'],
});

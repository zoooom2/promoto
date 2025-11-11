import yamalLookalike from '@/public/assets/guyThumbnail.webp';
import tThumbnail from '@/public/assets/tThumbnail.svg';
import secondGuyThumbnail from '@/public/assets/guy2Thumbnail.webp';
import mThumbnail from '@/public/assets/mThumbnail.svg';
import FortyPlusThumbnail from '@/public/assets/40+Thumbnail.webp';

export const navLinks = [
	{ name: 'Home', link: '/', id: 1 },
	{ name: 'Features', link: '/features', id: 2 },
	{ name: 'About', link: '/about', id: 3 },
	{ name: 'Pricing', link: '#', id: 4 },
	{ name: 'Blog', link: '#', id: 5 },
];

export const socials = [
	{ name: 'yamalLookalike', img: yamalLookalike },
	{ name: 'tThumbnail', img: tThumbnail },
	{ name: 'secondGuy', img: secondGuyThumbnail },
	{ name: 'mThumbnail', img: mThumbnail },
	{ name: '40+Thumbnail', img: FortyPlusThumbnail },
];

export const homeFAQArray = [
	{
		question: 'Do i need credit card to sign up',
		answer:
			'No credit card is required to start with free plan. You can upgrade as your need grow',
	},
	{
		question: 'Is there a free plan available?',
		answer: `Yes! We offer a Free plan that's perfect for getting started. You can explore core features, test the platform, and see how automation works before upgrading.`,
	},
	{
		question: 'Can I change or cancel my plan anytime',
		answer: `Yes, Promoto integrates with a wide range of popular tools including CRMs, analytics platforms, data warehouses, and ad networks. Plus, you can connect via APIs or webhooks for even more flexibility.`,
	},
	{
		question: 'Do you integrate it with other tools I already use?',
		answer:
			'Yes, Promoto integrates with a wide range of popular tools including CRMs, analytics platforms, data warehouses, and ad networks. Plus, you can connect via APIs or webhooks for even more flexibility.',
	},
	{
		question: 'What kind of support do you provide?',
		answer: `We provide 24/7 email support, a detailed knowledge base, and onboarding resources. On higher-tier plans, you'll also have access to priority support and dedicated success managers.`,
	},
	{
		question: 'Is promoto secure for handlind sensitive business data?',
		answer: `Absolutely. Promoto uses industry- standard encryption protocols, secure API authentication, and regular audits to ensure your data stays protected. We're compliant with major data privacy regulations like GDPR and CCPA, so you can automate with confidence.`,
	},
];

export const featuresFAQArray = [
	{
		question: 'What types of campaigns can I create with Promoto?',
		answer:
			'Promoto lets you create email, SMS, push, and in-app campaigns. You can design promotional campaigns, onboarding flows, transactional messages, and automated drip sequences.',
	},
	{
		question: 'How do I track campaign performance?',
		answer: `Promoto provides real-time analytics dashboards, detailed reports, and engagement metrics so you can monitor the success of every campaign and optimize for better results.`,
	},
	{
		question:
			'Is it possible to automate multi-channel messaging (email, SMS, push, in-app)?',
		answer: `Absolutely. Promoto allows you to set up automated workflows that trigger messages across multiple channels based on user actions, events, or profile attributes.`,
	},
	{
		question: 'Does Promoto support A/B testing for campaigns?',
		answer:
			'Yes. You can run A/B tests on subject lines, content, and timing to see which versions perform best and optimize future campaigns for higher engagement.',
	},
	{
		question: 'How secure is my data on Promoto?',
		answer: `Promoto prioritizes security with encryption, access controls, and regular audits. Your data is protected in compliance with GDPR and other standard privacy regulations.`,
	},
	{
		question: 'Can I segment audiences for targeted campaigns?',
		answer: `Yes! You can segment contacts based on behavior, demographics, events, or lifecycle stage to ensure the right message reaches the right audience.`,
	},
];

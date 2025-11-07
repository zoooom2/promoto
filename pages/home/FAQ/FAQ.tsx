import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
	const FAQArray = [
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
	const QandA = FAQArray.map((item, index) => (
		<Accordion
			type='single'
			collapsible
			className='w-full py-2 border-b border-b-[rgba(0,27,16,0.05)]'
			key={index}
		>
			<AccordionItem value='item-1'>
				<AccordionTrigger className='font-hanken text-[20px] items-center cursor-pointer [&>svg]:text-[black]!'>
					{item.question}
				</AccordionTrigger>
				<AccordionContent className='font-hanken text-[16px] text-[rgba(0,27,16,0.7)]'>
					{item.answer}
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	));
	return (
		<section className='w-full flex flex-col items-center py-20 px-5  max-w-300 overflow-clip content-center flex-nowrap gap-2.5'>
			<div className='w-full flex flex-col items-center content-center flex-nowrap gap-6'>
				<div className='w-full flex justify-center items-center overflow-clip content-center  flex-nowrap  gap-2.5 '>
					<h5 className='flex-1 whitespace-pre-wrap text-wrap wrap-break-word  text-[#001b10] text-center leading-[1.2] font-hanken font-semibold text-[24px] tracking-[-0.04em]'>
						Frequently Asked Questions
					</h5>
				</div>
				<div className='w-[350px] flex flex-col items-center max-w-[744px] content-center flex-nowrap '>
					{QandA}
				</div>
			</div>
		</section>
	);
};

export default FAQ;

// width: 100%;
// height: min-content;
// display: flex;
// flex-direction: column;
// justify-content: flex-start;
// align-items: center;
// max-width: 744px;
// overflow: visible;
// padding: 0px;
// align-content: center;
// flex-wrap: nowrap;
// gap: 0px;
// position: absolute;
// border-radius: 0px 0px 0px 0px;

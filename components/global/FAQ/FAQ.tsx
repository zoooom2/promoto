import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = ({ arr = [] }: { arr: { question: string; answer: string }[] }) => {
	const QandA = arr.map((item, index) => (
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
		<section className='w-full flex flex-col items-center py-20 md:py-25 xl:py-36 px-5 md:px-10 xl:px-20  max-w-300 overflow-clip content-center flex-nowrap gap-2.5'>
			<div className='w-full flex flex-col items-center content-center flex-nowrap gap-6 md:gap-10 xl:gap-12'>
				<div className='w-full flex justify-center items-center overflow-clip content-center  flex-nowrap  gap-2.5 '>
					<h5 className='flex-1 whitespace-pre-wrap text-wrap wrap-break-word  text-promoto-dark text-center leading-[1.2] font-hanken font-semibold text-[24px] md:text-[28px] xl:text-[32px] tracking-[-0.04em]'>
						Frequently Asked Questions
					</h5>
				</div>
				<div className='w-[280px] min-[400px]:w-[360px] sm:w-7/10 lg:w-full flex flex-col items-center max-w-[744px] content-center flex-nowrap '>
					{QandA}
				</div>
			</div>
		</section>
	);
};

export default FAQ;

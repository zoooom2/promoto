const WhatSetsUsApartCard = () => {
	const cardsArr = [
		{
			title: 'Innovation',
			description:
				'We constantly push the boundaries of marketing automation, creating tools that make campaigns smarter, faster, and more impactful.',
		},
		{
			title: 'Simplicity',
			description:
				'Complex marketing shouldn’t be complicated. We focus on intuitive design and seamless workflows so anyone can launch effective campaigns quickly.',
		},
		{
			title: 'Customer Success',
			description:
				'Our customers’ growth is our top priority. Every feature we build is designed to help them engage their audience and achieve measurable results.',
		},
		{
			title: 'Data-Driven Decisions',
			description:
				'From personalization to analytics, we rely on data to guide our product, helping businesses make smarter, evidence-backed marketing choices.',
		},
	];

	const cards = cardsArr.map((card, index) => (
		<div
			className='min-w-[50px] flex justify-center items-center content-center gap-2.5'
			key={index}
		>
			<div className='flex-1 w-px flex flex-col p-5 promoto-tablet:p-7 promoto-laptop:p-8 bg-[rgba(255,255,255,0.1)] gap-5 rounded-[20px]'>
				<div>icon</div>
				<div className='w-full flex flex-col gap-3'>
					<h6 className='w-full whitespace-pre-wrap text-wrap wrap-break-word text-promoto-yellow leading-[1.2] font-semibold text-[20px] font-hanken'>
						{card.title}
					</h6>
					<p className='font-hanken text-[16px] whitespace-pre-wrap wrap-break-word text-wrap text-promoto-off-white leading-[1.2]'>
						{card.description}
					</p>
				</div>
			</div>
		</div>
	));
	return (
		<div className='w-full grid grid-cols-1 promoto-tablet:grid-cols-2 justify-center gap-5 promoto-tablet:gap-6 max-promoto-tablet:max-w-140'>
			{cards}
		</div>
	);
};

export default WhatSetsUsApartCard;

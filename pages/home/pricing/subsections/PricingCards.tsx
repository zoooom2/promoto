'use client';

import { Button } from '@/components/ui/button';

const PricingCards = ({
	isYearly,
	plan,
	prices = { monthly: 0, yearly: 0 },
	withBg,
	description,
	button,
	features = [],
	tag,
	custom,
}: {
	isYearly: boolean;
	plan: string;
	prices: { monthly: number; yearly: number };
	withBg: boolean;
	description: string;
	button: string;
	features: string[];
	tag: boolean;
	custom?: boolean;
}) => {
	const perks = features.map((feature, index) => (
		<li
			className={`gap-2.5 list-disc list-inside font-hanken tracking-[-0.04em] ${
				withBg ? 'text-white' : 'text-promoto-dark'
			}`}
			key={index}
		>
			{feature}
		</li>
	));

	return (
		<div
			className={`w-full relative flex justify-center items-center overflow-clip content-center gap-2.5 border border-[rgba(0,27,16,0.1)] rounded-[20px] ${
				withBg && 'bg-promoto-dark'
			}`}
		>
			<div className='flex-1 flex flex-col py-11 px-4 min-[400px]:px-9 overflow-clip flex-nowrap gap-2.5'>
				<div className='w-full flex flex-col items-center content-center flex-nowrap gap-12'>
					<div className='w-full flex flex-col flex-nowrap gap-[15px]'>
						<div className='w-full flex flex-col flex-nowrap gap-6'>
							<div className='w-full flex flex-col flex-nowrap gap-3'>
								<h6
									className={`whitespace-pre ${
										withBg ? 'text-white' : 'text-promoto-dark'
									} leading-[1.2] font-hanken font-semibold text-[20px] tracking-[-0.04em]`}
								>
									{plan}
								</h6>
								<div className='w-full flex justify-start items-end content-end flex-nowrap'>
									<div className='flex justify-start items-center content-center flex-nowrap'>
										{custom ? (
											<h5
												className={`whitespace-pre ${
													withBg ? 'text-promoto-yellow' : 'text-promoto-green'
												} leading-[1.2] font-libre text-[32px] italic`}
											>
												Custom Pricing
											</h5>
										) : (
											<h5
												className={`whitespace-pre ${
													withBg ? 'text-promoto-yellow' : 'text-promoto-green'
												} leading-[1.2] font-libre text-[32px] italic`}
											>
												${isYearly ? prices.yearly : prices.monthly}
											</h5>
										)}
										{/* another h5 for custom should be here and it has the same style as up sibling */}
									</div>
									{!custom && (
										<div
											className={`flex-1 flex justify-center items-center content-center flex-nowrap ${
												withBg ? 'text-white' : 'text-promoto-dark'
											}`}
										>
											<p className='whitespace-pre italic font-libre text-[16px] tracking-[-0.04em] leading-[100%]'>
												/
											</p>
											<p className='flex-1 whitespace-pre-wrap wrap-break-word text-wrap leading-[1.2] font-libre italic text-[16px] tracking-[-0.04em] transition-all'>
												{isYearly ? 'yearly' : 'monthly'}
											</p>
										</div>
									)}
								</div>
							</div>
							<div className='w-full h-px bg-[rgba(0,27,16,0.1)] overflow-clip'></div>
						</div>

						<p
							className={`font-hanken text-[16px] w-full whitespace-pre-wrap wrap-break-word leading-[1.2] ${
								withBg ? 'text-white' : 'text-promoto-dark'
							}`}
						>
							{description}
						</p>
					</div>

					<Button
						className={`w-full py-2 rounded-[8px] capitalize flex justify-center items-center overflow-hidden content-center flex-nowrap gap-2.5 font-hanken ${
							withBg
								? 'text-promoto-dark bg-promoto-yellow'
								: 'text-white bg-promoto-dark'
						}`}
					>
						{button}
					</Button>

					<ul className='w-full flex flex-col flex-nowrap gap-2.5'>{perks}</ul>
				</div>
				{tag && (
					<Button className='absolute top-2 right-2 flex justify-center py-1 px-3 bg-promoto-yellow z-1 content-center flex-nowrap gap-2 rounded-[12px] text-promoto-dark capitalize whitespace-pre font-hanken text-[16px] trcking-[-0.04em] text-center leading-[1.6]'>
						most popular
					</Button>
				)}
			</div>
		</div>
	);
};

export default PricingCards;

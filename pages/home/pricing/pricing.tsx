'use client';

import { Switch } from '@/components/ui/switch';
import { useState } from 'react';
import PricingCards from './subsections/PricingCards';

const Pricing = () => {
	const [yearly, setYearly] = useState(false);

	const handleChange = () => {
		setYearly((prev) => !prev);
	};
	return (
		<section className='w-full flex flex-col items-center py-20 md:py-25 xl:py-36 px-5 md:px-9 max-w-[1200px] overflow-clip content-center flex-nowrap gap-2.5'>
			<div className='w-full flex flex-col items-center overflow-clip content-center flex-nowrap gap-8 md:gap-12 xl:gap-20'>
				<div className='w-full flex flex-col items-center max-w-90 content-center flex-nowrap gap-3 md:gap-4 '>
					<div className='w-full flex flex-col justify-center items-center content-center flex-nowrap '>
						<div className='w-full flex justify-center items-center content-center flex-nowrap'>
							<h3 className='flex-1 whitespace-pre-wrap wrap-break-word text-wrap text-promoto-dark text-center leading-[1.2] font-hanken font-medium text-[28px] md:text-[36px] xl:text-[44px] tracking-[-0.04em]'>
								Rated 4.9
							</h3>
						</div>
						<div className='w-full flex justify-center items-center content-center flex-nowrap gap-2.5 '>
							<h3 className='font-libre whitespace-pre text-promoto-green leading-[1.2] italic text-[28px] md:text-[36px] xl:text-[44px] tracking-[-0.04em] '>
								form
							</h3>
							<h3 className='whitespace-pre text-promoto-dark text-center leading-[1.2] font-medium text-[28px] font-hanken tracking-[-0.04em]'>
								700 reviews
							</h3>
						</div>
					</div>
					<p className='w-[74%] whitespace-pre-wrap text-wrap wrap-break-word text-promoto-dark text-center leading-[1.2] font-hanken text-[16px] tracking-[-0.04em]'>
						Affordable plans tailored for startups, teams, and enterprises.
					</p>
				</div>
				<div className='w-[280px] min-[400px]:w-[350px] md:w-[690px] min-[800px]:w-[730px]! xl:w-[1128px]! flex flex-col justify-center items-center overflow-clip content-center flex-nowrap gap-8 md:gap-10 xl:gap-12'>
					<div className='flex justify-center items-center pt-7.5 content-center flex-nowrap gap-2.5 relative'>
						<div className='right-0 top-0  absolute'>
							<p className='border-promoto-green whitespace-pre-wrap text-wrap wrap-break-word italic font-libre text-promoto-green text-[14px] tracking-[-0.04em] p-1 border rounded-[50%]'>
								save 20%
							</p>
						</div>
						<div className='flex items-center flex-nowrap content-center gap-5'>
							<span className='whitespace-pre text-promoto-dark leading-[1.2] text-[16px] tracking-[-0.04em] font-hanken'>
								Billed monthly
							</span>

							<Switch
								checked={yearly}
								onCheckedChange={handleChange}
								className={`data-[state=checked]:bg-promoto-green! data-[state=unchecked]:bg-promoto-yellow! transition-colors [&>span]:data-[state=checked]:bg-promoto-yellow!  [&>span]:data-[state=unchecked]:bg-promoto-green! w-10! h-6! rounded-[8px]! [&>span]:w-4! [&>span]:h-4! [&>span]:rounded-[4px]  p-0.5!`}
							/>

							<span className='whitespace-pre text-promoto-dark leading-[1.2] text-[16px] tracking-[-0.04em] font-hanken'>
								Billed yearly
							</span>
						</div>
					</div>
					<div className='w-full grid overflow-clip grid-cols-1 md:grid-cols-2 xl:grid-cols-3 min-w-[50px] justify-center gap-5 md:gap-6'>
						<PricingCards
							isYearly={yearly}
							plan='Free'
							prices={{ monthly: 0, yearly: 0 }}
							withBg={false}
							description='Best for individuals or small teams exploring automation for the first time.'
							button='Start With Free'
							features={[
								'Email & SMS automation',
								'Basic segmentation',
								'Up to 1,000 contacts',
								'Integrations with popular tools',
								'Community support',
								'Drag-and-drop campaign builder',
								'Pre-built templates for emails and SMS',
								'Monthly performance monthly report',
							]}
							tag={false}
						/>
						<PricingCards
							isYearly={yearly}
							plan='Professional'
							prices={{ monthly: 99, yearly: 0 }}
							withBg={true}
							description='Ideal for growing businesses ready to scale campaigns and boost performance.'
							button='Upgrade to Professional'
							features={[
								'Everything in free',
								'Advanced workflows & triggers',
								'A/B testing and analysis',
								'Up to 10,000 contacts',
								'Priority support',
								'Multi-channel campaign scheduling',
								'Real-time performance dashboard',
								'CRM integration & leading scoring',
							]}
							tag={true}
						/>
						<PricingCards
							isYearly={yearly}
							plan='Enterprise'
							prices={{ monthly: 0, yearly: 0 }}
							withBg={false}
							description='Designed for large organizations with complex marketing needs.'
							button='Contact Us'
							features={[
								'Everything in professional',
								'Unlimited contacts',
								'Dedicated account manager',
								'Custom integrations',
								'Advanced security & compliance',
								'SLA-backed uptime guarantee',
								'Role-based access controls',
								'Onboarding and training sessions',
							]}
							tag={false}
							custom={true}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pricing;

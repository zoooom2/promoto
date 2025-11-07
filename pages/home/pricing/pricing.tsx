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
		<section className='w-full flex flex-col items-center py-20 px-5 max-w-[1200px] overflow-clip content-center flex-nowrap gap-2.5'>
			<div className='w-full flex flex-col items-center overflow-clip content-center flex-nowrap gap-8'>
				<div className='w-full flex flex-col items-center max-w-90 content-center flex-nowrap gap-3'>
					<div className='w-full flex flex-col justify-center items-center content-center flex-nowrap '>
						<div className='w-full flex justify-center items-center content-center flex-nowrap'>
							<h3 className='flex-1 whitespace-pre-wrap wrap-break-word text-wrap text-[#001b10] text-center leading-[1.2] font-hanken font-medium text-[28px] tracking-[-0.04em]'>
								Rated 4.9
							</h3>
						</div>
						<div className='w-full flex justify-center items-center content-center flex-nowrap gap-2.5 '>
							<h3 className='font-libre whitespace-pre text-[#066f41] leading-[1.2] italic text-[28px] tracking-[-0.04em]'>
								form
							</h3>
							<h3 className='whitespace-pre text-[#001b10] text-center leading-[1.2] font-medium text-[28px] font-hanken tracking-[-0.04em]'>
								700 reviews
							</h3>
						</div>
					</div>
					<p className='w-[74%] whitespace-pre-wrap text-wrap wrap-break-word text-[#001b10] text-center leading-[1.2] font-hanken text-[16px] tracking-[-0.04em]'>
						Affordable plans tailored for startups, teams, and enterprises.
					</p>
				</div>
				<div className='w-[350px] flex flex-col justify-center items-center overflow-clip content-center flex-nowrap gap-8'>
					<div className='flex justify-center items-center pt-7.5 content-center flex-nowrap gap-2.5 relative'>
						<div className='right-[0px] top-0  absolute'>
							<p className='border-[#066f41] whitespace-pre-wrap text-wrap wrap-break-word italic font-libre text-[#066f41] text-[14px] tracking-[-0.04em] p-1 border rounded-[50%]'>
								save 20%
							</p>
						</div>
						<div className='flex items-center flex-nowrap content-center gap-5'>
							<span className='whitespace-pre text-[#001b10] leading-[1.2] text-[16px] tracking-[-0.04em] font-hanken'>
								Billed monthly
							</span>

							<Switch
								checked={yearly}
								onCheckedChange={handleChange}
								className={`data-[state=checked]:bg-[#066f41]! data-[state=unchecked]:bg-[#f2ff00]! transition-colors [&>span]:data-[state=checked]:bg-[#f2ff00]!  [&>span]:data-[state=unchecked]:bg-[#066f41]! w-10! h-6! rounded-[8px]! [&>span]:w-4! [&>span]:h-4! [&>span]:rounded-[4px]  p-0.5!`}
							/>

							<span className='whitespace-pre text-[#001b10] leading-[1.2] text-[16px] tracking-[-0.04em] font-hanken'>
								Billed yearly
							</span>
						</div>
					</div>
					<div className='w-full grid overflow-clip grid-cols-1 min-w-[50px] justify-center gap-5'>
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

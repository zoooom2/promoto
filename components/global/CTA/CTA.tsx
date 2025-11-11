import Image from 'next/image';
import img from '@/public/assets/CTABg.png';
import { Button } from '@/components/ui/button';

const CTA = () => {
	return (
		<section className='w-full flex flex-col items-center bg-promoto-dark overflow-clip content-center flex-nowrap  gap-2.5'>
			<div
				className='w-full flex flex-col items-center py-20 px-5 max-w-300 overflow-clip content-center flex-nowrap gap-12'
				id='cta-logo'
			>
				<div className='w-[320px] min-[400px]:w-[350px] md:w-[530px] flex justify-center items-center overflow-clip  content-center flex-nowrap rounded-2xl'>
					<div className='w-[338px] md:w-full max-w-[530px] flex justify-center items-center p-px backdrop-blur-[20px] overflow-clip content-center flex-nowrap gap-2.5 relative'>
						<div className='absolute top-0 left-0 w-full h-full bg-[rgba(255,255,255,0.1)] rounded-[20px] border border-white z-1'></div>
						<figure className='absolute top-0 left-0 w-full h-full'>
							<Image
								src={img}
								alt='bg image'
								className='w-full h-full object-cover z-0'
							/>
						</figure>
						<div className='z-2 flex-1 flex flex-col px-7 pt-7 pb-15 overflow-clip content-center flex-nowrap gap-2.5 items-center'>
							<div className='w-full flex flex-col items-center content-center flex-nowrap gap-5'>
								<div className='w-full flex flex-col items-center content-center flex-nowrap gap-3.5'>
									<div className='w-full flex flex-col justify-center items-center content-center flex-nowrap'>
										<h3 className='font-hanken whitespace-pre text-white leading-[1.2] text-[44px] font-medium tracking-[-0.04em]'>
											One-Click
										</h3>
										<h3 className='font-libre text-promoto-yellow italic text-[44px] leading-[1.2] whitespace-pre'>
											Automation
										</h3>
									</div>
									<p className='font-hanken text-[16px] tracking-[-0.04em] leading-[1.6] text-center max-w-[280px] text-white'>
										Engage them smarter with automation powered by data.
									</p>
								</div>
								<Button className='bg-promoto-yellow text-promoto-dark rounded-[12px] py-2 px-6 font-hanken'>
									Book a Demo
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTA;

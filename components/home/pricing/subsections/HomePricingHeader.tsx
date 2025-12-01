const HomePricingHeader = () => {
	return (
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
	);
};

export default HomePricingHeader;

const WhatSetsUsApartSectionHeader = () => {
	return (
		<div className='w-full flex flex-col justify-start items-center max-w-[750px] content-center gap-3 promoto-tablet:gap-4'>
			<div className='flex flex-col justify-center overflow-clip'>
				<div className='flex justify-center items-center gap-2 promoto-laptop:gap-4'>
					<h3 className='font-hanken whitespace-pre leading-[1.2] text-promoto-off-white font-medium text-[28px] promoto-tablet:text-[36px] promoto-laptop:text-[44px]'>
						What Sets Us
					</h3>
					<h3 className='font-libre text-promoto-yellow text-[28px] promoto-tablet:text-[36px] promoto-laptop:text-[44px] italic'>
						Apart
					</h3>
				</div>
			</div>
			<p className='px-2 md:w-3/5 whitespace-pre-wrap text-wrap wrap-break-word text-promoto-off-white text-center leading-[1.2] font-hanken'>
				Our values guide us to create smarter, simpler marketing solutions.
			</p>
		</div>
	);
};

export default WhatSetsUsApartSectionHeader;

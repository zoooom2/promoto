const FGrowthHeader = () => {
	return (
		<div className='w-full flex flex-col items-center max-w-[750px] content-center gap-4'>
			<div className='w-full flex flex-col justify-center overflow-clip content-center'>
				<div className='flex justify-center items-center content-center gap-2'>
					<h3 className='font-libre text-promoto-yellow text-[28px] promoto-tablet:text-[36px] promoto-laptop:text-[44px] italic'>
						Result
					</h3>
					<h3 className='font-hanken whitespace-pre leading-[1.2] text-promoto-off-white font-medium text-[28px] promoto-tablet:text-[36px] promoto-laptop:text-[44px]'>
						you
					</h3>
				</div>
				<div className='w-full flex justify-center items-center overflow-clip content-center'>
					<h3 className='font-hanken font-medium text-promoto-off-white text-[28px] promoto-tablet:text-[36px] promoto-laptop:text-[44px]'>
						can measure
					</h3>
				</div>
			</div>
			<p className='px-2 md:w-3/5 whitespace-pre-wrap text-wrap wrap-break-word text-promoto-off-white text-center leading-[1.2]'>
				See how Promoto drives engagement, conversions, and growth with
				data-powered automation.
			</p>
		</div>
	);
};

export default FGrowthHeader;

const GrowthHeader = () => {
	return (
		<div className='w-full flex flex-col max-w-[750px] overflow-visible flex-nowrap gap-6 promoto-tablet:gap-10 '>
			<div className='w-full h-min flex flex-col promoto-tablet:flex-row flex-nowrap gap-3 promoto-tablet:gap-10'>
				<div className='flex overflow-clip flex-nowrap gap-2 flex-1'>
					<h3
						className={`font-hanken whitespace-pre text-white leading-[120%] text-[28px] promoto-tablet:text-[36px] promoto-laptop:text-[44px] text-wrap wrap-break-word flex flex-col`}
					>
						<span>Proven</span> <span>Results</span>
					</h3>
					<div className='flex justify-center items-center content-center flex-nowrap gap-2.5'>
						<p
							className={`font-libre whitespace-pre text-promoto-yellow leading-[120%] text-[28px] promoto-tablet:text-[36px] promoto-laptop:text-[44px] italic`}
						>
							Growth
						</p>
					</div>
				</div>
				<p
					className={`w-full promoto-tablet:w-[37%] whitespace-pre-wrap text-wrap wrap-break-word font-normal font-hanken text-promoto-off-white text-[16px] tracking-[-0.04em] leading-[160%] `}
				>
					How Promoto helps businesses grow faster, boost engagement, and
					achieve measurable results.
				</p>
			</div>
		</div>
	);
};

export default GrowthHeader;

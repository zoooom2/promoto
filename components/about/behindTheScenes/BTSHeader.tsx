const BTSHeader = () => {
	return (
		<div className='w-full flex flex-col promoto-tablet:flex-row max-w-[750px] gap-3 promoto-tablet:gap-16 promoto-laptop:gap-18'>
			<div className='w-full promoto-tablet:flex-1 flex flex-col overflow-clip items-start '>
				<div className='flex justify-center items-center overflow-clip content-center gap-2'>
					<h3 className='font-hanken text-[28px] promoto-tablet:text-[36px] promoto-laptop:text-[44px] font-medium leading-[1.2] text-promoto-dark whitespace-pre'>
						Meet The
					</h3>
					<h3 className='font-medium font-libre italic text-promoto-green text-[28px] promoto-tablet:text-[36px] promoto-laptop:text-[44px] leading-[1.2]'>
						Brain
					</h3>
				</div>
				<div className='flex justify-center items-center overflow-clip content-center text-nowrap'>
					<h3 className='text-promoto-dark leading-[1.2] font-hanken text-[28px] promoto-tablet:text-[36px] promoto-laptop:text-[44px] font-medium'>
						behind the Scenes
					</h3>
				</div>
			</div>
			<p className='font-hanken text-[16px] leading-[1.2] text-promoto-dark max-w-140'>
				Behind Promoto is a passionate team of innovators, designers, and
				marketers dedicated to building smarter solutions that help businesses
				grow.
			</p>
		</div>
	);
};

export default BTSHeader;

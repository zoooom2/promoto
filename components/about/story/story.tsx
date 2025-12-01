import CardWrapper from './CardWrapper';
const Story = () => {
	return (
		<section className='w-full flex flex-col items-center pt-30 promoto-tablet:pt-36 promoto-laptop:pt-41 px-5 promoto-tablet:px-9 promoto-laptop:px-9 pb-20 promoto-tablet:pb-25 promoto-laptop:pb-36 max-w-300 overfllow-clip content-center gap-2.5'>
			<div className='w-full flex flex-col justify-center items-center overflow-hidden content-center gap-8 promoto-tablet:gap-12 promoto-laptop:gap-20'>
				<div className='w-full flex flex-col content-center gap-4 promoto-tablet:max-w-105 '>
					<div className='flex flex-col justify-center items-center content-center'>
						<div className='flex justify-center items-center content-center gap-2'>
							<h1 className='font-hanken text-promoto-dark whitespace-pre leading-[1.2] font-medium text-[32px] promoto-tablet:text-[48px] promoto-laptop:text-[60px]'>
								Meet
							</h1>
							<h1 className='font-libre text-promoto-green leading-[1.2] text-[36px] promoto-tablet:text-[48px] promoto-laptop:text-[60px] whitespace-pre italic'>
								Promoto
							</h1>
						</div>
					</div>
					<p className='font-hanken text-[16px] text-promoto-dark leding-[1.2] text-wrap wrap-break-word text-center w-full'>
						Promoto helps businesses automate and personalize customer
						communication to drive engagement and growth.
					</p>
				</div>

				<CardWrapper />
			</div>
		</section>
	);
};

export default Story;

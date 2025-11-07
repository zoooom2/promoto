import { hankenGrotesk, libreCaslonText } from '@/app/fonts';

const GrowthHeader = () => {
	return (
		<div className='w-full h-min flex flex-col max-w-[750px] overflow-visible flex-nowrap gap-6 '>
			<div className='w-full h-min flex flex-col overflow-visible flex-nowrap gap-3'>
				<div className='flex min-h flex-col overflow-visible flex-nowrap gap-3'>
					<div className='w-full flex overflow-clip flex-nowrap gap-2'>
						<h3
							className={`${hankenGrotesk.className} whitespace-pre text-white leading-[120%] text-[28px] text-wrap wrap-break-word flex flex-col`}
						>
							<span>Proven</span> <span>Results</span>
						</h3>
						<div className='h-min w-min flex justify-center items-center overflow-visible content-center flex-nowrap gap-2.5'>
							<div
								className={`${libreCaslonText.className} whitespace-pre text-[#f2ff00] leading-[120%] text-[28px] italic`}
							>
								Growth
							</div>
						</div>
					</div>
				</div>
				<p
					className={`w-full h-auto whitespace-pre-wrap text-wrap wrap-break-word font-normal ${hankenGrotesk.className} text-[#f8f1e1] text-[16px] tracking-[-0.04em] leading-[160%] `}
				>
					How Promoto helps businesses grow faster, boost engagement, and
					achieve measurable results.
				</p>
			</div>
		</div>
	);
};

export default GrowthHeader;

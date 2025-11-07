import { hankenGrotesk, libreCaslonText } from '@/app/fonts';

const MarketingHeader = () => {
	return (
		<div className='w-[360px] flex flex-col items-center max-w-[420px] content-center flex-nowrap gap-3'>
			<div className='w-full flex flex-col justify-center items-center content-center flex-nowrap'>
				<div className='w-full flex justify-center items-center content-center  flex-nowrap gap-2'>
					<h3
						className={`${hankenGrotesk.className} whitespace-pre text-[#001b10] leading-[1.2] text-[28px] font-medium tracking-[-0.04em]`}
					>
						Powerful
					</h3>
					<h3
						className={`${libreCaslonText.className} text-[#066f41] whitespace-pre leading-[1.2] italic text-[28px] tracking-[-0.04em]`}
					>
						Marketing
					</h3>
				</div>
				<div className='w-full flex justify center items-center overflow-clip content-center flex-nowrap gap-2.5'>
					<h3
						className={`${hankenGrotesk.className} font-medium text-[28px] tracking-[-0.04em] flex-1 whitespace-pre-wrap wrap-break-word text-wrap text-[#001b10] text-center leading-[1.2]`}
					>
						Automation Features
					</h3>
				</div>
			</div>
			<p
				className={`w-full whitespace-pre-wrap text-wrap wrap-break-word ${hankenGrotesk.className} text-[16px] tracking-[-0.04em] leading-[1.6]`}
			>
				Automate campaigns, personalize messaging, and optimize engagement
				across email, SMS, push, and in-app channels.
			</p>
		</div>
	);
};

export default MarketingHeader;

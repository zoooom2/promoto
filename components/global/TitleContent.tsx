import { Button } from '@/components/ui/button';

const TitleContent = ({
	hankenText,
	libreText,
	subtitle,
	ctaText,
}: {
	hankenText: string;
	libreText: string;
	subtitle: string;
	ctaText: string;
}) => {
	return (
		<div className='w-full flex flex-col items-center overflow-visible content-center flex-nowrap gap-6 promoto-tablet::gap-7'>
			<div className='w-full flex flex-col items-center content-center flex-nowrap gap-4'>
				<div className='w-full h-min flex flex-col justify-center items-center overflow-clip content-center flex-nowrap '>
					<h1
						className={`font-hanken text-[32px] promoto-tablet:text[48px] promoto-tablet:text-[48px] xl:text-[60px] leading-[1.2] tracking-[-0.04em] font-medium italic w-full h-auto whitespace-pre-wrap text-wrap wrap-break-word text-promoto-dark text-center`}
					>
						{hankenText}
					</h1>
					<h1
						className={`w-full h-auto whitespace-pre-wrap text-wrap wrap-break-word text-promoto-green text-center text-[32px] promoto-tablet:text-[48px] xl:text-[60px] font-libre italic tracking-[-0.04em] leading-[1.2] `}
					>
						{libreText}
					</h1>
				</div>
				<p
					className={`font-hanken w-full h-auto whitespace-pre-wrap text-wrap wrap-break-word text-center max-w-[364px] text-promoto-dark leading-[1.2]`}
				>
					{subtitle}
				</p>
			</div>
			<Button
				size={'lg'}
				className='font-hanken text-[16px] hover:scale-3d cursor-pointer hover:scale-[1.05] transition-transform'
			>
				{ctaText}
			</Button>
		</div>
	);
};

export default TitleContent;

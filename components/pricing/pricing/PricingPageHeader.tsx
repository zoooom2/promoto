import { Checkbox } from '@/components/ui/checkbox';

const PricingPageHeader = () => {
	const featuresArr = [
		'Building Workflow',
		'No Credit Card Required',
		'No Contract',
	];

	const features = featuresArr.map((f, index) => (
		<div
			className='flex justify-center content-center gap-2.5'
			key={index}
		>
			<div className='box-border flex justify-start items-center content-center gap-2 rounded-[8px] py-2 pr-4 pl-2'>
				<Checkbox
					defaultChecked
					className='size-4'
				/>

				<span className='text-promoto-dark text-[16px] leading-[1.6]'>{f}</span>
			</div>
		</div>
	));
	return (
		<div className='w-full flex flex-col justify-start items-center max-w-200 overflow-visible content-center gap-4 promoto-tablet:gap-5 promoto-laptop:gap-6'>
			<div className='w-full flex flex-col justify-center items-center content-center gap-1'>
				<h1 className='w-full whitespace-pre-wrap text-wrap wrap-break-word text-promoto-dark text-center leading-[1.2] text-[32px] promoto-tablet:text-[48px] promoto-laptop:text-[60px] font-medium'>
					Find the plan that
				</h1>
				<h1 className='font-libre italic text-[32px] promoto-tablet:text-[48px] promoto-laptop:text-[60px] text-promoto-green text-center leading-[1.2] text-wrap wrap-break-word whitespace-pre-wrap'>
					Supercharge your growth
				</h1>
			</div>
			<div className='w-full flex justify-center items-center overflow-clip content-center flex-wrap gap-x-5'>
				{features}
			</div>
		</div>
	);
};

export default PricingPageHeader;

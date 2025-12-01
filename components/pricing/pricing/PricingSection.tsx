import PricingPlans from '@/components/pricing/PricingPlans';
import PricingPageHeader from './PricingPageHeader';

const PricingSection = () => {
	return (
		<section className='w-full box-border flex items-center pt-30 promoto-tablet:pt-36 promoto-laptop:pt-41 px-5 promoto-tablet:px-9 pb-20 promoto-tablet:pb-25 promoto-laptop:pb-36 max-w-300 overflow-clip content-center gap-2.5'>
			<div className='w-full flex flex-col justify-center items-center overflow-hidden content-center gap-8 promoto-tablet:gap-12 promoto-laptop:gap-18'>
				<PricingPageHeader />
				<PricingPlans />
			</div>
		</section>
	);
};

export default PricingSection;

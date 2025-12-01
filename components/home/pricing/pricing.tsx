import HomePricingHeader from './subsections/HomePricingHeader';
import PricingPlans from '../../../components/pricing/PricingPlans';

const Pricing = () => {
	return (
		<section className='w-full flex flex-col items-center py-20 md:py-25 xl:py-36 px-5 md:px-9 max-w-[1200px] overflow-clip content-center flex-nowrap gap-2.5'>
			<div className='w-full flex flex-col items-center overflow-clip content-center flex-nowrap gap-8 md:gap-12 xl:gap-20'>
				<HomePricingHeader />
				<PricingPlans />
			</div>
		</section>
	);
};

export default Pricing;

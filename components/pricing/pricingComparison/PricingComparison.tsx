import PricingComparisonHeader from './subsections/PricingComparisonHeader';
import PricingComparisonTable from './subsections/PricingComparisonTable';

const PricingComparison = () => {
	return (
		<section className='box-border w-full flex flex-col items-center px-5 promoto-tablet:px-9 pb-20 promoto-tablet:pb-25 promoto-laptop:pb-36 max-w-300 content-center gap-2.5 overflow-clip'>
			<div className='w-full flex flex-col justify-center items-center overflow-hidden content-center gap-10 promoto-tablet:gap-13 promoto-laptop:gap-16'>
				<PricingComparisonHeader />
				<PricingComparisonTable />
			</div>
		</section>
	);
};

export default PricingComparison;

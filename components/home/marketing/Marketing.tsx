import MarketingCardAndFeatures from './subsections/MarketingCardAndFeatures';
import MarketingHeader from './subsections/MarketingHeader';

const Marketing = () => {
	return (
		<div className='w-full flex flex-col items-center py-20 md:py-25 xl:py-36 px-5 md:px-20 xl:px-25 overflow-clip content-center flex-nowrap gap-2.5 '>
			<div className='w-full flex flex-col md:justify-center items-center max-w-[936px] overflow-hidden content-center flex-nowrap gap-8 md:gap-12 xl:gap-20'>
				<MarketingHeader />
				<MarketingCardAndFeatures />
			</div>
		</div>
	);
};

export default Marketing;

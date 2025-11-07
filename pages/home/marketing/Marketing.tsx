import MarketingCardAndFeatures from './subsections/MarketingCardAndFeatures';
import MarketingHeader from './subsections/MarketingHeader';

const Marketing = () => {
	return (
		<div className='w-full flex flex-col items-center py-20 px-5 overflow-clip content-center flex-nowrap gap-2.5 '>
			<div className='w-full flex flex-col items-center max-w-[936px] overflow-hidden content-center flex-nowrap gap-8'>
				<MarketingHeader />
				<MarketingCardAndFeatures />
			</div>
		</div>
	);
};

export default Marketing;

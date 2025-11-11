import MarketingCard1 from './MarketingCard1';
import MarketingCard2 from './MarketingCard2';

import BottomFeatures from './BottomFeaturesGrid';
import MarketingTesting from './MarketingTesting';
import MarketingPersonalization from './MarketingPersonalization';

const MarketingCardAndFeatures = () => {
	return (
		<div className='w-full flex flex-col justify-center items-center overflow-clip content-center flex-nowrap gap-6'>
			<div
				className='w-full flex flex-col md:grid md:grid-cols-2 justify-center max-md:items-center overflow-hidden content-center flex-nowrap gap-6'
				id='marketing-cards'
			>
				<div className='w-full max-md:max-w-140 flex flex-col justify-center items-center overflow-hiddem content-center flex-nowrap gap-5 xl:gap-6 relative md:flex-1 '>
					<MarketingCard1 />
					<MarketingCard2 />
				</div>

				<div className='w-full max-md:max-w-140 flex flex-col items-center overflow-clip content-center flex-nowrap gap-6 h-full'>
					<MarketingTesting />

					<MarketingPersonalization />
				</div>
			</div>

			<BottomFeatures />
		</div>
	);
};

export default MarketingCardAndFeatures;

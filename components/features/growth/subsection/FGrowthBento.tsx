import GrowthStatsCard from '@/components/home/growth/sebsections/GrowthStatsCard';
import FGCard1 from './FGCard1';
import FGCard2 from './FGCard2';
import FGCard3 from './FGCard3';

const FGrowthBento = () => {
	return (
		<div
			className='w-full flex flex-col justify-center items-center overflow-clip content-center flex-nowrap gap-5 xl:gap-5'
			id='bento'
		>
			<div className='w-full max-md:max-w-140 flex flex-col md:flex-row max-md:items-center max-md:justify-center overflow-clip content-center gap-5 md:gap-6 '>
				<FGCard1 />
				<FGCard2 />
				<FGCard3 />
			</div>
			<GrowthStatsCard />
		</div>
	);
};

export default FGrowthBento;

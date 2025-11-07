import BentoCardOne from './BentoCardOne';
import BentoCardTwo from './BentoCardTwo';
import GrowthStatsCard from './GrowthStatsCard';

const GrowthBento = () => {
	return (
		<div
			className='w-full flex flex-col justify-center items-center overflow-clip content-center flex-nowrap gap-5'
			id='bento'
		>
			<div className='w-full flex flex-col items-center justify-center overflow-clip content-center flex-nowrap gap-5'>
				<BentoCardOne />
				<BentoCardTwo />
			</div>
			<GrowthStatsCard />
		</div>
	);
};

export default GrowthBento;

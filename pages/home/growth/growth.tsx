import GrowthBento from './sebsections/GrowthBento';
import GrowthFeatures from './sebsections/GrowthFeatures';
import GrowthHeader from './sebsections/growthHeader';

const Growth = () => {
	return (
		<section className='w-full h-min flex flex-col items-center py-15 px-5 bg-[#001b10] overflow-clip content-center flex-nowrap gap-2.5'>
			<div className='w-full h-min flex flex-col justify-center items-center max-w-[750px] overflow-clip content-center flex-nowrap gap-8'>
				<GrowthHeader />
				<GrowthFeatures />
				<GrowthBento />
			</div>
		</section>
	);
};

export default Growth;

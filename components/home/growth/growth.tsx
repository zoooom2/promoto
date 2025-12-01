import GrowthBento from './sebsections/GrowthBento';
import GrowthFeatures from './sebsections/GrowthFeatures';
import GrowthHeader from './sebsections/growthHeader';

const Growth = () => {
	return (
		<section className='w-full h-min flex flex-col items-center py-15 promoto-tablet:py-25 promoto-laptop:py-36 promoto-tablet:px-5 min-[904px]:px-20! promoto-laptop:px-25 px-5 bg-promoto-dark overflow-clip content-center flex-nowrap gap-2.5'>
			<div className='w-full flex flex-col justify-center items-center max-w-[750px] overflow-clip content-center flex-nowrap gap-8 promoto-tablet:gap-12 promoto-laptop:gap-20'>
				<GrowthHeader />
				<GrowthFeatures />
				<GrowthBento />
			</div>
		</section>
	);
};

export default Growth;

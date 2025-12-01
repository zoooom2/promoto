import BTSExecutives from './BTSExecutives';
import BTSHeader from './BTSHeader';

const BehindTheScenes = () => {
	return (
		<div className='w-full flex flex-col items-center py-20 promoto-tablet:py-25 promoto-laptop:py-36  px-5 promoto-tablet:px-9 max-w-300 overflow-clip content-center gap-2.5'>
			<div className='w-full flex flex-col items-center content-center gap-8 promoto-tablet:gap-15 promoto-laptop:gap-20'>
				<BTSHeader />
				<BTSExecutives />
			</div>
		</div>
	);
};

export default BehindTheScenes;

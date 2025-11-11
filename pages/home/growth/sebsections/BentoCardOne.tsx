import Image from 'next/image';
import bgback from '@/public/assets/bg1.webp';

import BentoCardOneClient from './BentoCardOneClient';

const BentoCardOne = () => {
	return (
		<div className='w-full max-md:max-w-140 flex flex-col justify-center items-center overflow-clip content-center flex-nowrap gap-2.5 relative rounded-xl'>
			<div className='absolute top-0 left-0 w-full h-full'>
				<Image
					src={bgback}
					alt='background image for growth'
					className='object-cover object-center'
				/>
			</div>
			<BentoCardOneClient />
		</div>
	);
};

export default BentoCardOne;

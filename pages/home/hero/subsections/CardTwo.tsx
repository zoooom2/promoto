import Image from 'next/image';
import img from '@/public/assets/heroCardTwoImg.webp';
import CardTwoClient from './CardTwoClient';

const CardTwo = () => {
	return (
		<div className='w-full max-promoto-tablet:max-w-140 rounded-2xl flex flex-col justify-center items-center overflow-clip content-center flex-nowrap gap-2.5 relative'>
			<div className='absolute top-0 left-0 h-full w-full'>
				<Image
					src={img}
					alt=''
					className='w-full h-full'
				/>
			</div>
			<div className='w-full flex flex-col justify-center items-center flex-nowrap gap-2.5 p-4'>
				<div className='w-full flex flex-col justify-center p-6 items-center content-center flex-nowrap gap-3'>
					<CardTwoClient />
				</div>
			</div>
		</div>
	);
};

export default CardTwo;

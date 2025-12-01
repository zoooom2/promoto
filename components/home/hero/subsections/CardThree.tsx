import Image from 'next/image';
import img from '@/public/assets/heroImg3.webp';
import overlay from '@/public/assets/BudHero.png';
import { hostGrotesk, libreCaslonText } from '@/app/fonts';
import { FaChartLine } from 'react-icons/fa';
import CardThreeClient from './CardThreeClient';

const CardThree = () => {
	return (
		<div className='w-full max-promoto-tablet:max-w-140 rounded-2xl flex flex-col justify-center items-center overflow-clip content-center flex-nowrap gap-2.5 relative'>
			<div className='absolute top-0 left-0 w-full h-full'>
				<Image
					src={img}
					alt=''
					className='h-full'
				/>
			</div>
			<div className='absolute top-0 left-0 w-full h-full z-2'>
				<Image
					src={overlay}
					alt=''
					className='object-cover object-center w-full h-full'
				/>
			</div>
			<div className='w-full h-[400px] flex flex-col justify-center content-center flex-nowrap gap-2.5 aspect-[0.9/1] z-1 '>
				<div className='w-full flex flex-col justify-between items-center pt-6 px-6 content-center flex-nowrap flex-1 h-px'>
					<div className='w-full flex flex-col justify-center flex-nowrap gap-6 items-start'>
						<div className='w-full flex items-center content-center flex-nowrap gap-2'>
							<div className='text-white'>
								<FaChartLine />
							</div>

							<p
								className={`${hostGrotesk.className} whitespace-pre text-white text-[16px] tracking-[-0.04em]  leading-[100%]`}
							>
								Analytics + Conversion Goals
							</p>
						</div>
						<div className='flex items-end content-end flex-nowrap gap-2'>
							<p
								className={`whitespace-pre italic ${libreCaslonText.className} text-promoto-yellow text-[48px] tracking-[-0.04em] leading-[100%]`}
							>
								2.5M
							</p>
							<p
								className={`whitespace-pre font-semibold ${hostGrotesk.className} text-white text-[14px] tracking-[-0.04em] leading-[100%]`}
							>
								+88.4%
							</p>
						</div>
					</div>
					<CardThreeClient />
				</div>
			</div>
		</div>
	);
};

export default CardThree;

import { hostGrotesk, libreCaslonText } from '@/app/fonts';
import Image from 'next/image';

import img from '@/public/assets/heroCardOneImg.webp';
import CardOneClient from './CardOneClient';

const CardOne = () => {
	return (
		<div className='w-full max-promoto-tablet:max-w-140 flex flex-col justify-center items-center overflow-clip content-center flex-nowrap gap-2.5 relative rounded-2xl'>
			<div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
				<Image
					src={img}
					alt=''
					className='w-full h-full object-cover'
				/>
			</div>
			<div className='w-full h-[400px] flex flex-col justify-center items-center content-center flex-nowrap gap-2.5 aspect-[0.9/1] z-2'>
				<div className='w-full flex-1 h-px flex flex-col items-center p-8 content-center flex-nowrap gap-2.5'>
					<div className='w-full flex justify-between flex-nowrap'>
						<div className='flex flex-col flex-nowrap gap-2'>
							<p
								className={`whitespace-pre italic ${libreCaslonText.className} text-promoto-dark text-[48px] tracking-[-0.04em] leading-[100%] `}
							>
								5M
							</p>
							<p
								className={`whitespace-pre ${hostGrotesk.className} text-promoto-dark text-[16px] tracking-[-0.04em] leading-[100%] `}
							>
								revenue last year
							</p>
						</div>
						<CardOneClient />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardOne;

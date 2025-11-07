import { hostGrotesk, libreCaslonText } from '@/app/fonts';
import Image from 'next/image';
import signature from '@/assets/signatureHero.png';
import img from '@/assets/heroCardOneImg.webp';

const CardOne = () => {
	return (
		<div className='w-full flex flex-col justify-center items-center overflow-clip content-center flex-nowrap gap-2.5 relative rounded-2xl'>
			<div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
				<Image
					src={img}
					alt=''
					className='w-full h-full object-cover'
				/>
			</div>
			<div className='w-full h-[400px] flex flex-col justify-center items-center content-center flex-nowrap gap-2.5  aspect-[0.9/1] z-2'>
				<div className='w-full flex-1 h-px flex flex-col items-center p-8 content-center flex-nowrap gap-2.5'>
					<div className='w-full flex justify-between flex-nowrap'>
						<div className='flex flex-col flex-nowrap gap-2'>
							<p
								className={`whitespace-pre italic ${libreCaslonText.className} text-[#001b10] text-[48px] tracking-[-0.04em] leading-[100%] `}
							>
								5M
							</p>
							<p
								className={`whitespace-pre ${hostGrotesk.className} text-[#001b10] text-[16px] tracking-[-0.04em] leading-[100%] `}
							>
								revenue last year
							</p>
						</div>
						<div className='w-20 h-7 overflow-hidden'>
							<Image
								src={signature}
								alt='signature'
								className='w-20 object-cover object-center bg-transparent '
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardOne;

// width: 80px;
// height: 18px;
// display: block;
// overflow: visible;
// background-image: url(/* signature.svg */);
// background-size: cover;
// background-repeat: no-repeat;
// background-position: center;
// position: absolute;
// border-radius: 0px 0px 0px 0px;

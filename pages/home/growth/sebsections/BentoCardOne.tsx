import Image from 'next/image';
import bgback from '@/assets/bg1.webp';
import bgfront from '@/assets/growth-front.webp';

const BentoCardOne = () => {
	return (
		<div className='w-[360px] flex flex-col justify-center items-center overflow-clip content-center flex-nowrap gap-2.5 relative rounded-xl'>
			<div className='absolute top-0 left-0 w-full h-full'>
				<Image
					src={bgback}
					alt='background imgae for growth'
					className='object-cover'
				/>
			</div>
			<div className='w-full flex flex-col justify-center items-center content-center flex-nowrap gap-2.5 relative'>
				<div className='w-[360px] flex flex-col items-center h-[450px] overflow-clip z-0 aspect-[0.8/1] absolute top-0 left-0'>
					<div className='w-2/3 h-[100px] backdrop-blur-[100px] bg-[rgba(255,255,255,0.1)] aspect-[2.4/1] rounded-[12px] absolute top-[70px] z-3'></div>
					<div className='w-[56%] height-[100px] backdrop-blur-[100px] bg-[rgba(255,255,255,0.1)] z-2 aspect-2/1 rounded-[12px] absolute top-[58px] '></div>
					<div className='w-[44%] h-[100px] backdrop-blur-[100px] bg-[rgba(255,255,255,0.1)] aspect-[1.6/1] rounded-[12px] absolute top-[46px] z-1'></div>
				</div>
				<div
					className='w-[360px] height-[246px] bg-[#024746] overflow-clip opacity-[0.7] z-5'
					style={{
						WebkitMask:
							'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)',
						mask: 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)',
						WebkitMaskComposite: 'add',
						maskComposite: 'add',
					}}
				></div>
				<div className='w-full h-[450px] rounded-2xl flex flex-col -m-3 justify-end items-center p-10 overflow-clip content-center flex-nowrap gap-2.5 aspect-[0.8/1] z-4'>
					<Image
						src={bgfront}
						alt='image showing stat'
						className='w-full h-[328px] rounded-[12px] aspect-[0.8536585365853658/1] object-cover'
					/>
				</div>
			</div>
		</div>
	);
};

export default BentoCardOne;

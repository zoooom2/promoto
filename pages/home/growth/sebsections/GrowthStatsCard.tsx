import Image from 'next/image';
import { hankenGrotesk } from '@/app/fonts';
import growthMan from '@/assets/growthsectionMan.webp';

const GrowthStatsCard = () => {
	return (
		<div className='flex items-center justify-center content-center flex-nowrap gap-2.5 w-full overflow-clip'>
			<div className='w-[360px] flex flex-col justify-center items-center bg-[#f8f1e1] overflow-clip content-center flex-nowrap rounded-[20px] p-6 gap-5'>
				<div className='w-full flex flex-col justify-center bg-white overflow-clip flex-nowrapgap-[40px] rounded-2xl p-6 gap-5'>
					<div className='w-full flex flex-col flex-nowrap gap-2'>
						<h6
							className={`${hankenGrotesk.className} text-[20px] leading-[1.4] font-semibold whitespace-pre-wrap wrap-break-word text-wrap text-[#001b10] `}
						>
							Automating Success with Promoto
						</h6>
						<p
							className={`${hankenGrotesk.className} leading-[1.4] whitespace-pre-wrap wrap-break-word text-wrap text-[#001b10] tracking-[-0.04em]`}
						>
							By streamlining campaigns and personalizing outreach, Acme Crop
							unlocked massive growth through Promoto’s automation.
						</p>
					</div>
					<div className='w-full flex flex-col flex-nowrap'>
						<div className='flex justify-center items-center overflow-hidden content-center flex-nowrap'>
							<h3
								className={`${hankenGrotesk.className} font-semibold whitespace-pre text-[#001b10] leading-[120%] w-full text-[44px] tracking-[-0.04em]`}
							>
								0X
							</h3>
							<div className='hidden flex-col justify-center items-center content-center flex-nowrap gap-2.5'>
								{Array.from({ length: 8 }, (_, i) => (
									<h3
										key={i}
										className='whitespace-pre z-1 text-[#001b10] leading-[1.2]'
									>
										{i}
									</h3>
								))}
							</div>
						</div>
						<p
							className={`${hankenGrotesk.className} whitespace-pre text-[#001b10] leading-[120%]`}
						>
							faster than similar tool
						</p>
					</div>
				</div>
				<div className='w-full relative flex justify-end items-start overflow-clip content-center flex-nowrap gap-2.5  rounded-2xl h-[356px] flex-col'>
					<div className='absolute top-0 left-0 w-full h-full'>
						<Image
							src={growthMan}
							alt='a man smiling'
							className='object-cover'
						/>
					</div>
					<div
						className='w-[318px] h-20 backdrop-blur-[5px] bg-[linear-gradient(180deg,rgba(6,111,65,0)_0%,rgb(6,111,65)_70.27027027027027%,rgb(0,27,16)_98.64864864864865%)] overflow-clip z-0 rounded-2xl absolute'
						style={{
							WebkitMask:
								'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)',
							mask: 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)',
							WebkitMaskComposite: 'add',
							maskComposite: 'add',
						}}
					></div>
					<div className='w-[318px] flex flex-col justify-end p-5 overflow-clip z-1 flex-nowrap gap-2'>
						<p
							className={`${hankenGrotesk.className} whitespace-pre text-white leading-[1.2]  font-bold text-[20px]`}
						>
							John Miller
						</p>
						<p
							className={`${hankenGrotesk.className} whitespace-pre text-white leading-[1.2] `}
						>
							Marketing Director, Acme Corp
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GrowthStatsCard;

// box-sizing: border-box;
// width: 100%;
// height: min-content;
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: flex-start;
// background-color: #ffffff;
// overflow: var(--overflow-clip-fallback, clip);
// align-content: flex-start;
// flex-wrap: nowrap;
// gap: 40px;
// position: absolute;
// border-radius: 16px;

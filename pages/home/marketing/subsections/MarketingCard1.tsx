import Image from 'next/image';
import { CiMail, CiTimer } from 'react-icons/ci';
import { LiaLongArrowAltDownSolid } from 'react-icons/lia';
import { LuMousePointer2 } from 'react-icons/lu';
import bgImg from '@/public/assets/marketingCardUpImg.webp';
import MarketingCard1Client from './MarketingCard1Client';
const MarketingCard1 = () => {
	return (
		<div className='w-full xl:w-[456px] flex flex-col justify-center items-center overflow-clip content-center flex-nowrap gap-2.5 relative py-10 rounded-2xl flex-1'>
			<figure className='absolute top-0 left-0 w-full h-full'>
				<Image
					src={bgImg}
					alt=''
					className=' w-full h-full'
				/>
			</figure>
			<div className='w-full xl:h-[380px] flex flex-col items-center pt-10 xl:pt-16 content-center flex-nowrap'>
				<div className='w-full flex flex-col justify-center content-center items-center gap-11 xl:gap-13 z-1'>
					<div className='flex items-center py-2 pr-3 pl-2 bg-[#f8f1e1] content-center flex-nowrap gap-2 rounded-[8px] border border-[#056f41] relative'>
						<div className='absolute left-1/2 translate-x-[-50%] -bottom-1 w-[9px] h-[9px] rounded-[10px] bg-[#f8f1e1] border border-promoto-green'></div>
						<div className='absolute -bottom-6 left-1/2 -translate-1/2 text-promoto-green'>
							<LiaLongArrowAltDownSolid />
						</div>

						<div className='text-[21px] text-[#00b10]'>
							<CiMail />
						</div>
						<p
							className={`font-hanken text-promoto-dark text-[18px] leading-[1.2] tracking-[-0.04em]`}
						>
							Send Email
						</p>
					</div>
					<div className='flex justify-center items-center p-3 bg-promoto-dark content-center flex-nowrap  rounded-[12px] relative overflow-hidden'>
						<div className='absolute left-1/2 translate-x-[-50%] -bottom-1 w-[9px] h-[9px] rounded-[10px] bg-promoto-yellow border border-promoto-green'></div>
						<div className='absolute -bottom-6 left-1/2 -translate-1/2 text-promoto-green'>
							<LiaLongArrowAltDownSolid />
						</div>
						<MarketingCard1Client />
						<div className='w-[54px] h-[34px] absolute right-[-50px] bottom-[-35px]'>
							<div className='relative w-full h-full'>
								<div className='absolute top-0 text-[20px] text-[#fba543]'>
									<LuMousePointer2 />
								</div>
								<div
									className={`font-hanken text-promoto-green font-semibold text-[12px] tracking-[-0.04em] leading-[1.2] absolute right-1 -bottom-2 py-1.5 px-2.5 flex justify-center items-center bg-[#fba543] content-center flex-nowrap  gap-2 rounded-[48px]`}
								>
									John
								</div>
							</div>
						</div>
					</div>
					<div className='w-full flex flex-col justify-center items-center content-center flex-nowrap gap-2.5 z-1 '>
						<div className='flex items-center py-2 pl-3 pr-2 bg-[#f8f1e1] content-center flex-nowrap gap-2 rounded-xl border border-promoto-green '>
							<div className='text-[20px] flex justify-center items-center text-promoto-dark'>
								<CiTimer />
							</div>
							<p
								className={`font-hanken text-[16px] tracking-[-0.04em] leading-[1.2]`}
							>
								4 hours delay
							</p>
						</div>
						<p className={`font-hanken z-1 text-[16px] tracking-[-0.04em]`}>
							Does this contact meet the condition?
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MarketingCard1;

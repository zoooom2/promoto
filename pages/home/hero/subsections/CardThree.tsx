import Image from 'next/image';
import img from '../../../../assets/heroImg3.webp';
import { hostGrotesk, libreCaslonText } from '@/app/fonts';
import { FaChartLine } from 'react-icons/fa';

const CardThree = () => {
	return (
		<div className='w-full rounded-2xl flex flex-col justify-center items-center overflow-clip content-center flex-nowrap gap-2.5 relative'>
			<div className='absolute top-0 left-0 w-full h-full'>
				<Image
					src={img}
					alt=''
				/>
			</div>
			<div className='w-full h-[400px] flex flex-col justify-center content-center flex-nowrap gap-2.5 aspect-[0.9/1] z-1'>
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
								className={`whitespace-pre italic ${libreCaslonText.className} text-[#f2ff00] text-[48px] tracking-[-0.04em] leading-[100%]`}
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
					<div className='w-full h-[54%] flex justify-center items-end content-end flex-nowrap gap-2'>
						<div className='h-full flex justify-center items-end content-end flex-nowrap gap-2.5'>
							<div className='w-10 h-[70%] bg-[linear-gradient(180deg,#ffffff_0%,rgba(255,255,255,0.1)_100%)]'></div>
						</div>
						<div className='h-full flex justify-center items-end content-end flex-nowrap gap-2.5'>
							<div className='w-10 h-4/5 bg-[linear-gradient(180deg,#ffffff_0%,rgba(255,255,255,0.1)_100%)]'></div>
						</div>

						<div className='h-full flex justify-center items-end content-end flex-nowrap gap-2.5'>
							<div className='w-10 h-full bg-[linear-gradient(180deg,#f3930d_0%,rgb(243,147,13)_100%)] rounded-xl relative'>
								<div className='flex justify-center items-center py-2 px-3 bg-[#001b10] content-center flex-nowrap gap-2 rounded-[8px] absolute left-[-20%] w-[140%] top-[5%]'>
									<p
										className={`whitespace-pre ${hostGrotesk.className} text-white text-[14px] tracking-[-0.04em] leading-[100%]}`}
									>
										375k
									</p>
								</div>
							</div>
						</div>
						<div className='h-full flex justify-center items-end content-end flex-nowrap gap-2.5'>
							<div className='w-10 h-[87%] bg-[linear-gradient(180deg,#ffffff_0%,rgba(255,255,255,0.1)_100%)] rounded-xl'></div>
						</div>
						<div className='h-full flex justify-center items-end content-end flex-nowrap gap-2.5'>
							<div className='w-10 h-[78%] bg-[linear-gradient(180deg,#ffffff_0%,rgba(255,255,255,0.1)_100%)] rounded-xl'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardThree;

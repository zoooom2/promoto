import Image from 'next/image';
import { PiMailboxLight } from 'react-icons/pi';
import { CiMail } from 'react-icons/ci';
import { IoIosPhonePortrait } from 'react-icons/io';
import { hankenGrotesk } from '@/app/fonts';
import bentoBg2 from '@/assets/bentoBg2.webp';

const BentoCardTwo = () => {
	return (
		<div className='w-[360px] rounded-2xl flex flex-col items-center content-center flex-nowrap gap-4 relative'>
			<figure className='absolute top-0 left-0 w-full h-full '>
				<Image
					src={bentoBg2}
					alt='background image'
					className='object-cover'
				/>
			</figure>
			<div className=' w-full h-[450px] flex flex-col justify-end items-center p-5 content-center flex-nowrap gap-2.5 aspect-[0.8/1] z-1 rounded-[12px]'>
				<div className='w-full flex flex-col justify-end items-center p-5 content-center flex-nowrap gap-2.5 rounded-[12px] border-[rgba(0,27,16,0.1)] border'>
					<div className='w-full flex flex-col items-center content-center flex-nowrap gap-6 justify-start'>
						<p
							className={`${hankenGrotesk.className} whitespace-pre-wrap text-wrap wrap-break-word text-[#001b10] leading-[120%] text-[24px] font-bold w-full`}
						>
							Summer Campaign “25
						</p>
						<div className='flex flex-col justify-center items-center content-center flex-nowrap gap-2 w-full'>
							{[
								{ icon: <PiMailboxLight />, label: 'Email', count: '70,367' },
								{ icon: <CiMail />, label: 'SMS', count: '220,519' },
								{
									icon: <IoIosPhonePortrait />,
									label: 'In-App',
									count: '152,510',
								},
							].map((item, i) => (
								<div
									key={i}
									className={`${hankenGrotesk.className} font-medium w-full flex justify-between items-center p-3.5 backdrop-blur-[20px] bg-[rgba(0,27,16,0.04)] content-center flex-nowrap rounded-[12px] border border-[rgba(0,27,16,0.1)]`}
								>
									<div className='flex items-center content-center flex-nowrap gap-2'>
										<span>{item.icon}</span>
										<span>{item.label}</span>
									</div>
									<div>{item.count}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BentoCardTwo;

// width: 360px;
// height: min-content;
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// overflow: var(--overflow-clip-fallback, clip);
// padding: 0px;
// align-content: center;
// flex-wrap: nowrap;
// gap: 10px;
// position: absolute;
// border-radius: 0px 0px 0px 0px;

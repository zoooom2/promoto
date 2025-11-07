import Image from 'next/image';
import img from '@/assets/heroCardTwoImg.webp';
import {
	PiChatCircleDotsLight,
	PiDatabaseLight,
	PiHeadsetLight,
	PiMouseRightClickLight,
} from 'react-icons/pi';
import { MdOutlineBackupTable } from 'react-icons/md';
import { hostGrotesk } from '@/app/fonts';

const CardTwo = () => {
	const features = [
		{ feature: 'One-click integration', icon: <PiMouseRightClickLight /> },
		{ feature: 'Personalized Automation', icon: <PiChatCircleDotsLight /> },
		{ feature: 'Complete data sync', icon: <PiDatabaseLight /> },
		{ feature: '24/7 expert support', icon: <PiHeadsetLight /> },
		{ feature: 'Easy migration', icon: <MdOutlineBackupTable /> },
	];

	const featureList = features.map((f, index) => (
		<li
			key={index}
			className='w-[228px] flex items-center py-3 px-2 bg-[rgba(0,27,16,0.1)] content-center flex-nowrap gap-2 rounded-xl'
		>
			<span className='text-[20px]'>{f.icon}</span>
			<span
				className={`flex-1 w-px whitespace-pre-wrap text-wrap wrap-break-word ${hostGrotesk.className} text-[#001b10] text-[16px] tracking-[-0.04em] leading-[100%]`}
			>
				{f.feature}
			</span>
		</li>
	));

	return (
		<div className='w-full h-min rounded-2xl flex flex-col justify-center items-center overflow-clip content-center flex-nowrap gap-2.5 relative'>
			<div className='absolute top-0 left-0 h-full w-full'>
				<Image
					src={img}
					alt=''
					className='w-full h-full'
				/>
			</div>
			<div className='w-full flex flex-col justify-center items-center flex-nowrap gap-2.5 p-4'>
				<div className='w-full flex flex-col justify-center p-6 items-center content-center flex-nowrap gap-3'>
					<div className='bg-white overflow-clip z-0 p-6 rounded-xl'>
						<ul className='w-full flex flex-col items-center content-center flex-nowrap gap-3.5'>
							{featureList}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardTwo;

// box-sizing: border-box;
// width: 100%;
// height: 324px;
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// padding: 24px;
// overflow: visible;
// align-content: center;
// flex-wrap: nowrap;
// gap: 12px;
// position: absolute;
// border-radius: 0px 0px 0px 0px;

import Image from 'next/image';
import JohnCarter from '@/public/assets/JohnCarter.webp';
import MichaelLee from '@/public/assets/MichaelLee.webp';
import DavidKim from '@/public/assets/DavidKim.webp';
import JamesWalker from '@/public/assets/JamesWalker.webp';

const BTSExecutives = () => {
	const executivesArr = [
		{ name: 'John Carter', position: 'CEO & Co-Founder', img: JohnCarter },
		{ name: 'Michael Lee', position: 'Head of Product', img: MichaelLee },
		{ name: 'David Kim', position: 'Lead Software Engineer', img: DavidKim },
		{
			name: 'James Walker',
			position: 'Customer Success Manager',
			img: JamesWalker,
		},
	];

	const executives = executivesArr.map((executive, index) => (
		<div
			className='min-w-[50px] flex flex-col justify-start items-center content-center gap-2.5 relative'
			key={index}
		>
			<figure className='w-full bg-promoto-dark/20 aspect-[0.8/1] overflow-hidden rounded-2xl'>
				<Image
					src={executive.img}
					alt=''
					className='w-full h-full object-cover'
				/>
			</figure>
			<div
				className='absolute h-[90px] p-5 gap-2.5 bottom-0 left-0 w-full backdrop-blur-[10px] z-1 rounded-[20px]'
				style={{
					WebkitMask:
						'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,1) 100%)',
					mask: 'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,1) 100%)',
					WebkitMaskComposite: 'add',
					maskComposite: 'add',
				}}
			>
				<div className='text-promoto-off-white font-hanken font-semibold text-[20px] leading-[1.4]'>
					{executive.name}
				</div>
				<div className='text-promoto-yellow font-hanken text-[16px] leading-[1.6]'>
					{executive.position}
				</div>
			</div>
		</div>
	));

	return (
		<div className='w-full grid grid-cols-1 min-[450px]:grid-cols-2 promoto-tablet:grid-cols-2! promoto-laptop:grid-cols-4! justify-center gap-5 promoto-laptop:gap-6 '>
			{executives}
		</div>
	);
};

export default BTSExecutives;

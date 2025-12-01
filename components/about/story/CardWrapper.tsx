import Image from 'next/image';
import img from '@/public/assets/about-work.webp';
import icon from '@/public/assets/about-lighticon.png';
const CardWrapper = () => {
	return (
		<div className='flex flex-col promoto-tablet:grid grid-cols-100 overflow-clip max-promoto-tablet:items-center max-promoto-tablet:gap-4'>
			<figure className='col-span-56 promoto-laptop:col-span-60 max-w-140  promoto-tablet:max-w-[95%]'>
				<Image
					src={img}
					alt='two workers sitting'
					className='object-cover w-full aspect-[1.08/1] promoto-tablet:max-h-[500px] promoto-laptop:max-h-150 object-center rounded-[20px]'
				/>
			</figure>
			<div className='col-span-44 w-full promoto-laptop:col-span-40 flex flex-col justify-center items-center p-4 promoto-tablet:p-6 promoto-laptop:p-12 overflow-clip content-center gap-2.5 rounded-[20px] bg-promoto-green'>
				<div className='w-full h-full flex flex-col justify-center promoto-tablet:justify-between items-start overflow-clip max-promoto-tablet:gap-10'>
					<figure className='size-8 promoto-tablet:size-10 promoto-laptop:size-25'>
						<Image
							src={icon}
							alt=''
						/>
					</figure>
					<div className='w-full flex flex-col gap-3 promoto-laptop:gap-6'>
						<h4 className='font-libre italic text-promoto-yellow leading-[1.2] text-wrap wrap-break-word whitespace-pre-wrap text-[20px] promoto-tablet:text-[32px] promoto-laptop:text-[40px]'>
							Our Story
							<br />
							Started in 2023
						</h4>
						<p className='font-hanken text-white ext-[16px] leading-[1.2]'>
							Promoto was built to simplify marketing by combining data,
							automation, and personalization in one platform. It helps
							businesses save time, reach customers with the right message, and
							grow faster. Today, thousands rely on Promoto to engage smarter
							and drive results.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardWrapper;

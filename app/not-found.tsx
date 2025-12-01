import CTA from '@/components/global/CTA/CTA';
import Image from 'next/image';
import four from '@/public/assets/4.webp';
import zeroBall from '@/public/assets/0.webp';
import { Button } from '@/components/ui/button';

export default function NotFound() {
	return (
		<main className='w-full flex flex-col items-center bg-promoto-off-white overflow-clip content-center '>
			<section className='w-full flex flex-col items-center pt-41 ox-9 pb-20 max-w-300 content-center gap-2.5'>
				<div className='w-full flex flex-col justify-center items-center content-center gap-12 promoto-tablet:gap-15'>
					<div className='flex justify-center max-w-[670px] content-center gap-0'>
						<figure className='flex-1 h-32 promoto-tablet:w-51.5 promoto-tablet:h-69 max-promoto-tablet:aspect-[0.7463768115942029/1]'>
							<Image
								src={four}
								alt='error num'
								className='w-full h-full translate-x-5 promoto-tablet:translate-x-11'
							/>
						</figure>
						<figure className='flex-1 h-32 promoto-tablet:w-51.5 promoto-tablet:h-69 max-promoto-tablet:aspect-[0.7463768115942029/1] z-1'>
							<Image
								src={zeroBall}
								alt='error num'
								className='w-full h-full'
							/>
						</figure>
						<figure className='flex-1 h-32 promoto-tablet:w-51.5 promoto-tablet:h-69 max-promoto-tablet:aspect-[0.7463768115942029/1]'>
							<Image
								src={four}
								alt='error num'
								className='w-full h-full -translate-x-5 promoto-tablet:-translate-x-11'
							/>
						</figure>
					</div>
					<div className='w-full flex flex-col items-center max-w-150 content-center gap-7 promoto-tablet:gap-8'>
						<div className='w-full flex flex-col items-center content-center gap-3 promoto-tablet:gap-4 text-promoto-dark font-hanken leading-[1.2]'>
							<h1 className='font-medium text-[32px] promoto-tablet:text-[48px] promoto-laptop:text-[60px] tracking-[-0.04em]'>
								Sorry! Page not found
							</h1>
							<p className='text-[16px] w-full text-center promoto-tablet:w-4/5 promoto-laptop:w-9/10'>
								The page you’re looking for doesn’t exist or might have been
								moved. Don’t worry, let’s get you back on track!
							</p>
						</div>
						<Button
							className='capitalize font-hanken cursor-pointer'
							size={'lg'}
						>
							Back to home
						</Button>
					</div>
				</div>
			</section>
			<CTA />
		</main>
	);
}

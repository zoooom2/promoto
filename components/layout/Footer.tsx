import Image from 'next/image';
import img from '@/assets/footerBg.png';
import Link from 'next/link';
import FooterLinkGroup from './FooterLinkGroup';

const Footer = () => {
	const mainLinks = [
		{ name: 'Home', link: '#' },
		{ name: 'Features', link: '#' },
		{ name: 'About', link: '#' },
		{ name: 'Pricing', link: '#' },
		{ name: 'Contact', link: '#' },
		{ name: 'blog', link: '#' },
	].map((link, index) => (
		<li
			key={index}
			className='font-hanken whitespace-pre text-white leading-[1.2]'
		>
			<Link
				href={link.link}
				scroll={false}
			>
				{link.name}
			</Link>
		</li>
	));
	return (
		<footer className='w-full flex flex-col items-center bg-[#001b10] overflow-clip content-center flex-nowrap gap-[54px]'>
			<div className='w-full flex flex-col justify-center px-5 pb-5 max-w-300 content-center flex-nowrap gap-14 relative'>
				<div className='w-full flex flex-col justify-center items-center max-w-230 overflow-clip content-center flex-nowrap gap-15 z-1'>
					<div className='w-full grid max-w-150 grid-cols-2 min-w-[50px] justify-center gap-y-10 gap-x-4'>
						<FooterLinkGroup
							title='Main Page'
							linkArr={[
								{ name: 'Home', link: '#' },
								{ name: 'Features', link: '#' },
								{ name: 'About', link: '#' },
								{ name: 'Pricing', link: '#' },
								{ name: 'Contact', link: '#' },
								{ name: 'blog', link: '#' },
							]}
						/>
						<FooterLinkGroup
							title='Utility'
							linkArr={[
								{ name: 'Privacy Policy', link: '#' },
								{ name: 'Terms & Conditions', link: '#' },
								{ name: 'Refund Policy', link: '#' },
								{ name: '404', link: '#' },
							]}
						/>
						<FooterLinkGroup
							title='Social'
							linkArr={[
								{ name: 'Facebook', link: '#' },
								{ name: 'LinkedIn', link: '#' },
								{ name: 'Instagram', link: '#' },
								{ name: 'Twitter (X)', link: '#' },
							]}
						/>
					</div>
				</div>
				<div className='w-full flex flex-col justify-between items-center px-[94px] z-1 content-center flex-nowrap'>
					<p className='font-hanken whitespace-pre tracking-[-0.04em] text-white leading-[1.2]'>
						Developed By Roqeeb Adeyinka
					</p>
					<p className='font-hanken whitespace-pre tracking-[-0.04em] text-white leading-[1.2]'>
						Copyright ©Promoto, All right reserved
					</p>
				</div>
			</div>
			{/* <figure className=' w-full h-[200px]'>
				<Image
					src={img}
					alt='footer bg'
					className='object-top w-full h-ful'
				/>
			</figure> */}
		</footer>
	);
};

export default Footer;

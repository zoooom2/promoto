import { navLinks } from '@/lib/constants';
import { Button } from '../ui/button';
import Link from 'next/link';
import { libreCaslonText } from '@/app/fonts';

const Sidebar = () => {
	//change navlink color and set condition

	const navlist = navLinks.map((list) => {
		return (
			<Link
				href={list.link}
				key={list.id}
			>
				<li
					className={`w-auto h-auto whitespace-pre z-1 font-normal italic ${libreCaslonText.className} text-[#066f41] text-[24px] tracking-[-0.04em] leading-[160%]`}
				>
					{list.name}
				</li>
			</Link>
		);
	});
	return (
		<aside className='w-full h-min flex flex-col items-center overflow-visible content-center flex-nowrap gap-12 absolute'>
			<ul className='h-min w-min flex flex-col items-center overflow-visible content-center flex-nowrap gap-4'>
				{navlist}
			</ul>
			<Button variant={'default'}>Start Trial</Button>
		</aside>
	);
};

export default Sidebar;

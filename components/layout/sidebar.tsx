import { navLinks } from '@/lib/constants';
import { Button } from '../ui/button';
import Link from 'next/link';
import { libreCaslonText } from '@/app/fonts';

const Sidebar = ({ show, close }: { show: boolean; close: () => void }) => {
	//change navlink color and set condition

	const navlist = navLinks.map((list) => {
		return (
			<Link
				href={list.link}
				key={list.id}
				onClick={close}
			>
				<li
					className={`w-auto h-auto whitespace-pre z-1 font-normal italic ${libreCaslonText.className} text-promoto-green text-[24px] tracking-[-0.04em] leading-[160%]`}
				>
					{list.name}
				</li>
			</Link>
		);
	});
	return (
		<aside
			className={`w-full h-min flex flex-col items-center content-center flex-nowrap gap-12 transition-all duration-1500 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden ${
				show
					? 'opacity-100 translate-y-0 max-h-[500px]'
					: 'opacity-0 -translate-y-6 max-h-0'
			}`}
		>
			<ul className='h-min w-min flex flex-col items-center overflow-visible content-center flex-nowrap gap-4'>
				{navlist}
			</ul>
			<Button variant={'default'}>Start Trial</Button>
		</aside>
	);
};

export default Sidebar;

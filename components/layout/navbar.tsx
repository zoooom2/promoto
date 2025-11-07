import { hostGrotesk } from '@/app/fonts';

import NavButton from './navbutton';

const Navbar = () => {
	return (
		<header className='flex flex-col w-full h-min items-center px-4 bg-[#f8f1e1] max-w-[1200px] overflow-visible content-center flex-nowrap gap-[60px] absolute rounded-2xl '>
			<div className='w-full h-min flex justify-between items-center py-5 overflow-visible content-center flex-nowrap'>
				<div className='w-full h-min flex justify-between items-center overflow-visible content-center flex-nowrap gap-2.5'>
					<div
						className={`w-auto h-auto whitespace-pre font-medium ${hostGrotesk.className} text-[#001b10] text-[28px] tracking-[-0.04em] leading-[90%] `}
					>
						Promoto©
					</div>

					<NavButton />
				</div>
				{/* <div></div> */}
			</div>
		</header>
	);
};

export default Navbar;

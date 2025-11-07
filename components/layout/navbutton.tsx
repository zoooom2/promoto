'use client';
import { RiCloseFill, RiMenu3Fill } from 'react-icons/ri';
import { Button } from '../ui/button';

const NavButton = () => {
	return (
		<Button
			variant={'ghost'}
			size={'icon'}
			className='sm:hidden'
		>
			<RiMenu3Fill />
			{/* <RiCloseFill /> */}
		</Button>
	);
};

export default NavButton;

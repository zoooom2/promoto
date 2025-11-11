import { RiCloseFill, RiMenu3Fill } from 'react-icons/ri';
import { Button } from '../ui/button';

const MenuButton = ({
	toggleMenu,
	show,
}: {
	toggleMenu: () => void;
	show: boolean;
}) => {
	return (
		<div className='promoto-tablet:hidden flex-1 justify-end flex '>
			<Button
				variant={'ghost'}
				size={'icon'}
				className='size-10 hover:bg-transparent hover:scale-[1.2] cursor-pointer'
				onClick={toggleMenu}
			>
				{show ? <RiCloseFill /> : <RiMenu3Fill />}
			</Button>
		</div>
	);
};

export default MenuButton;

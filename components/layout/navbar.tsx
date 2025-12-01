'use client';

import { MotionLink } from '../customMotionUi/comp';
import { Button } from '../ui/button';
import MenuButton from './menubtn';
import { navLinks } from '@/lib/constants';
import { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
	const path = usePathname();
	const [scrolled, setScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const closeSideBar = () => {
		setIsOpen(false);
	};

	const linkGroup = navLinks.map((link, index) => (
		<MotionLink
			key={index}
			href={link.link}
			className={`flex italic items-center px-0.5 content-center gap-2.5 whitespace-pre z-1 font-libre text-[16px] tracking-[-0.04em] leading-[1.6] ${
				path === link.link
					? 'text-promoto-green scale-[1.2]'
					: 'text-promoto-dark hover:text-promoto-green'
			} `}
			transition={{ type: 'spring', duration: 0.4 }}
		>
			{link.name}
		</MotionLink>
	));

	const toggleMenu = () => {
		setIsOpen((prev) => !prev);
	};

	useEffect(() => {
		const checkScroll = () => {
			if (window.scrollY > 10) setScrolled(true);
			else setScrolled(false);
		};

		checkScroll();

		const handleScroll = () => {
			if (window.scrollY > 10) setScrolled(true);
			else {
				setIsOpen(false);
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header className='flex flex-col w-full promoto-tablet:px-4 justify-center items-center max-w-[1200px] content-center gap-[60px] promoto-tablet:gap-2.5 fixed top-5 z-100'>
			<div
				className={`w-full max-w-300 flex-1 flex promoto-tablet:grid grid-cols-3 justify-between items-center py-5 promoto-tablet:py-4 promoto-tablet:pr-4 promoto-tablet:pl-6 backdrop-blur-[20px] content-center rounded-[26px] transition-colors ease-in duration-700 ${
					scrolled ? 'bg-white' : 'bg-promoto-off-white'
				}`}
			>
				<div
					className={`w-full flex flex-col flex-1 ${
						isOpen && 'pt-4 pb-15 gap-15'
					}  justify-center items-center content-center flex-nowrap`}
				>
					<div className='flex w-full px-6 gap-2.5 items-center'>
						<Link
							href={'/'}
							className={`flex justify-center items-xenter content-center gap-2.5 whitespace-pre font-medium font-host text-promoto-dark text-[28px] tracking-[-0.04em] leading-[0.9]`}
						>
							Promoto©
						</Link>

						<MenuButton
							show={isOpen}
							toggleMenu={toggleMenu}
						/>
					</div>
					<Sidebar
						show={isOpen}
						close={closeSideBar}
					/>
				</div>
				<div className='hidden promoto-tablet:flex flex-col items-center content-center gap-2 '>
					<div className='flex items-center content-center gap-7'>
						{linkGroup}
					</div>
				</div>
				<div className=' flex justify-end'>
					<Button
						size={'lg'}
						className='px-6 py-2 hidden promoto-tablet:block animate-bounce overflow-hidden cursor-pointer hover:scale-[1.05] transition-transform'
					>
						<span className='inline-block font-hanken'>Start Trial</span>
					</Button>
				</div>
			</div>
		</header>
	);
};

export default Navbar;

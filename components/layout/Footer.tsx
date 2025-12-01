import {
	mainPageFooterLinkGroup,
	socialFooterLinkGroup,
	utilityFooterLinkGroup,
} from '@/lib/constants';
import FooterLinkGroup from './FooterLinkGroup';

const Footer = () => {
	return (
		<footer className='w-full flex flex-col items-center bg-promoto-dark overflow-clip content-center flex-nowrap gap-[54px] md:h-[450px] pt-15'>
			<div className='w-full flex flex-col justify-center items-center px-5 pb-5 max-w-300 content-center flex-nowrap gap-14 relative'>
				<div className='w-full flex flex-col justify-center items-center max-w-230 overflow-clip content-center flex-nowrap gap-15 z-1'>
					<div className='w-full grid max-md:max-w-150 grid-cols-2 min-w-[50px] justify-center gap-y-10 gap-x-4 md:flex'>
						<FooterLinkGroup
							title='Main Page'
							linkArr={mainPageFooterLinkGroup}
						/>
						<FooterLinkGroup
							title='Utility'
							linkArr={utilityFooterLinkGroup}
						/>
						<FooterLinkGroup
							title='Social'
							linkArr={socialFooterLinkGroup}
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
		</footer>
	);
};

export default Footer;

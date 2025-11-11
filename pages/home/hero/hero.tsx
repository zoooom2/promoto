import TitleContent from '@/components/global/TitleContent';
import Cards from './subsections/Cards';

const Hero = () => {
	return (
		<section className='w-full h-min flex flex-col justify-center items-center pt-[120px] promoto-tablet:pt-[164px] pr-5 promoto-tablet:pr-9 pb-20 promoto-tablet:pb-25 promoto-laptop:pb-36 pl-5 promoto-tablet:pl-9 max-w-[1200px] overflow-hidden content-center flex-nowrap gap-11 promoto-tablet:gap-14 promoto-laptop:gap-18'>
			<TitleContent
				hankenText='The World’s Leading'
				libreText='Marketing Automation Tool'
				subtitle='Automate messages based on customer behavior-reach the right people at the right time.'
				ctaText='Book a Demo'
			/>
			<Cards />
		</section>
	);
};

export default Hero;

import Cards from './subsections/Cards';
import TitleContent from './subsections/TitleContent';

const Hero = () => {
	return (
		<section className='w-full h-min flex flex-col justify-center items-center pt-[120px] md:pt-[164px] pr-5 md:pr-9 pb-20 md-pb-25 lg:pb-36 pl-5 md:pl-9 max-w-[1200px] overflow-hidden content-center flex-nowrap gap-11 md:gap-14 lg:gap-18'>
			<TitleContent />
			<Cards />
		</section>
	);
};

export default Hero;

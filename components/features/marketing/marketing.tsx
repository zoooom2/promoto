import TitleContent from '@/components/global/TitleContent';
import MarketingCardAndFeatures from '@/components/home/marketing/subsections/MarketingCardAndFeatures';
// import MarketingCardAndFeatures from '@/pages/home/marketing/subsections/MarketingCardAndFeatures';

const FeaturesPageMarketing = () => {
	return (
		<section className='w-full flex flex-col justify-center items-center pt-[120px] promoto-tablet:pt-[164px] pr-5 promoto-tablet:pr-9 pb-20 promoto-tablet:pb-25 promoto-laptop:pb-36 pl-5 promoto-tablet:pl-9 max-w-[1200px] overflow-hidden content-center flex-nowrap gap-11 promoto-tablet:gap-14 promoto-laptop:gap-18'>
			<TitleContent
				hankenText='Everything You Need to'
				libreText='Automate Marketing'
				subtitle='From email to analytics, explore the features that streamline workflows and drive real results.'
				ctaText='Book a Demo'
			/>
			<MarketingCardAndFeatures />
		</section>
	);
};

export default FeaturesPageMarketing;

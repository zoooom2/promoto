import Hero from '@/pages/home/hero/hero';
import Growth from '@/pages/home/growth/growth';
import Marketing from '@/pages/home/marketing/Marketing';
import Testimonials from '@/pages/home/testimonials/Testimonials';
import Pricing from '@/pages/home/pricing/pricing';
import FAQ from '@/components/global/FAQ/FAQ';
import CTA from '@/components/global/CTA/CTA';
import Brandticker from '@/components/global/brandTicker/Brandticker';
import { homeFAQArray } from '@/lib/constants';

export default function Home() {
	return (
		<main
			className='w-full h-min flex flex-col items-center bg-promoto-off-white overflow-clip content-center flex-nowrap'
			id='homepagetop'
		>
			<Hero />
			<Growth />
			<Marketing />
			<Testimonials />
			<Pricing />
			<Brandticker />
			<FAQ arr={homeFAQArray} />
			<CTA />
		</main>
	);
}

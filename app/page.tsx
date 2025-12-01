import FAQ from '@/components/global/FAQ/FAQ';
import CTA from '@/components/global/CTA/CTA';
import Brandticker from '@/components/global/brandTicker/Brandticker';
import { homeFAQArray } from '@/lib/constants';
import Hero from '@/components/home/hero/hero';
import Growth from '@/components/home/growth/growth';
import Marketing from '@/components/home/marketing/Marketing';
import Testimonials from '@/components/home/testimonials/Testimonials';
import Pricing from '@/components/home/pricing/pricing';

export default function Home() {
	return (
		<main
			className='w-full flex flex-col items-center bg-promoto-off-white overflow-clip content-center flex-nowrap'
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

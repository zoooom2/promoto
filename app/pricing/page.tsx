import CTA from '@/components/global/CTA/CTA';
import FAQ from '@/components/global/FAQ/FAQ';
import PricingSection from '@/components/pricing/pricing/PricingSection';
import PricingComparison from '@/components/pricing/pricingComparison/PricingComparison';
import { pricingFAQArray } from '@/lib/constants';

const Page = () => {
	return (
		<main className='w-full flex flex-col items-center bg-promoto-off-white overflow-clip content-center font-hanken'>
			<PricingSection />
			<PricingComparison />
			<FAQ arr={pricingFAQArray} />
			<CTA />
		</main>
	);
};

export default Page;

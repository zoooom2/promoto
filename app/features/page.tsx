import Brandticker from '@/components/global/brandTicker/Brandticker';
import CTA from '@/components/global/CTA/CTA';
import FAQ from '@/components/global/FAQ/FAQ';
import { featuresFAQArray } from '@/lib/constants';
import FGrowth from '@/pages/features/growth/FGrowth';
import FeaturesPageMarketing from '@/pages/features/marketing/marketing';

const Page = () => {
	return (
		<main
			className='w-full h-min flex flex-col items-center bg-promoto-off-white overflow-clip content-center flex-nowrap'
			id=''
		>
			<FeaturesPageMarketing />
			<Brandticker />
			<FGrowth />
			<FAQ arr={featuresFAQArray} />
			<CTA />
		</main>
	);
};

export default Page;

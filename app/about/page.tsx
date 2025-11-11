import Brandticker from '@/components/global/brandTicker/Brandticker';
import CTA from '@/components/global/CTA/CTA';
import BehindTheScenes from '@/pages/about/behindTheScenes/behindTheScenes';
import Story from '@/pages/about/story/story';
import WhatSetsUsApart from '@/pages/about/whatSetsUsApart/whatSetsUsApart';

const Page = () => {
	return (
		<main
			className='w-full flex flex-col items-center bg-promoto-off-white overflow-clip content-center'
			id=''
		>
			<Story />
			<Brandticker />
			<WhatSetsUsApart />
			<BehindTheScenes />
			<CTA />
		</main>
	);
};

export default Page;

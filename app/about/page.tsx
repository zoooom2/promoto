import BehindTheScenes from '@/components/about/behindTheScenes/behindTheScenes';
import Story from '@/components/about/story/story';
import WhatSetsUsApart from '@/components/about/whatSetsUsApart/whatSetsUsApart';
import Brandticker from '@/components/global/brandTicker/Brandticker';
import CTA from '@/components/global/CTA/CTA';

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

import CTA from '@/components/global/CTA/CTA';
import TermsSection from '@/components/t&c/TermsSection';

const page = () => {
	return (
		<main className='w-full flex flex-col justify-start items-center bg-promoto-off-white overflow-clip content-center '>
			<TermsSection />
			<CTA />
		</main>
	);
};

export default page;

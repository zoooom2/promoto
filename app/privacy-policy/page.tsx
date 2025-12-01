import CTA from '@/components/global/CTA/CTA';
import PrivacySection from '@/components/privacy/PrivacySection';

const Page = () => {
	return (
		<main className='w-full flex flex-col justify-start items-center bg-promoto-off-white overflow-clip content-center tracking-[-0.04em]'>
			<PrivacySection />
			<CTA />
		</main>
	);
};

export default Page;

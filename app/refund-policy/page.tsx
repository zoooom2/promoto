import CTA from '@/components/global/CTA/CTA';
import RefundPolicySection from '@/components/refund-policy/RefundPolicySection';

const Page = () => {
	return (
		<main className='w-full flex flex-col justify-start items-center bg-promoto-off-white overflow-clip content-center '>
			<RefundPolicySection />
			<CTA />
		</main>
	);
};

export default Page;

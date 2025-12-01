import ContactSection from '@/components/contact/ContactSection';
import CTA from '@/components/global/CTA/CTA';
import FAQ from '@/components/global/FAQ/FAQ';
import { contactFAQ } from '@/lib/constants';

const Contact = () => {
	return (
		<main className='w-full flex flex-col items-center bg-promoto-off-white overflow-clip content-center '>
			<ContactSection />
			<FAQ arr={contactFAQ} />
			<CTA />
		</main>
	);
};

export default Contact;

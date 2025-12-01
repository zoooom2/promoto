import ContactData from './subsections/ContactData';
import ContactSectionHeader from './subsections/contactSectionHeader';

const ContactSection = () => {
	return (
		<section className='box-border w-full flex flex-col items-center pt-30 promoto-tablet:pt-36 promoto-laptop:pt-41 px-5 promoto-tablet:px-9 pb-20 promoto-tablet:pb-25 promoto-laptop:pb-36 max-w-300 overflow-clip content-center gap-2.5'>
			<div className='w-full flex flex-col justify-center items-center overflow-hidden content-center gap-8 promoto-tablet:gap-12 promoto-laptop:gap-20'>
				<ContactSectionHeader />
				<ContactData />
			</div>
		</section>
	);
};

export default ContactSection;

const ContactSectionHeader = () => {
	return (
		<div className='w-full flex flex-col items-center max-w-200 content-center gap-3 promoto-tablet:gap-4 font-hanken'>
			<div className='w-full flex flex-col justify-center content-center gap-2 text-[36px] promoto-tablet:text-[48px] promoto-laptop:text text-center leading-[1.2] text-wrap wrap-break-word'>
				<h1 className='font-medium text-promoto-dark w-full'>
					Have a question?
				</h1>
				<h1 className='font-libre italic text-promoto-green w-full'>
					Send us a message
				</h1>
			</div>
			<p className='text-[16px] w-full max-w-100 text-promoto-dark text-center leading-[1.2] whitespace-pre-wrap'>
				We’re here to answer your questions, discuss your needs, and help you
				get started with Promoto.
			</p>
		</div>
	);
};

export default ContactSectionHeader;

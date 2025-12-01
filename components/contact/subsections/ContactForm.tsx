import { Checkbox } from '@/components/ui/checkbox';

const ContactForm = () => {
	return (
		<div className='box-border promoto-tablet:flex-1 promoto-laptop:h-[736px] w-full flex flex-col justify-center items-center p-5 promoto-tablet:p-8 promoto-laptop:p-10 bg-promoto-calendron-green overflow-clip content-center gap-2.5 rounded-[20px] promoto-laptop:aspect-[0.8260869565217391/1] '>
			<form
				action=''
				className='w-full promoto-laptop:flex-1 flex flex-col justify-center promoto-laptop:justify-between  overflow-hidden gap-10 promoto-tablet:gap-15 promoto-laptop:gap-0 '
			>
				<div className='w-full flex flex-col  justify-center overflow-clip content-center gap-2.5 font-hanken'>
					<div className='w-full flex flex-col justify-start items-start content-start gap-2.5 font-hanken'>
						<label
							htmlFor='name'
							className='text-promoto-dark leading-[1.2] text-[16px] font-hanken'
						>
							Name
						</label>
						<input
							type='text'
							id='name'
							placeholder='Enter your name'
							className='box-border py-6 px-5 rounded-[8px] bg-promoto-off-white text-promoto-dark w-full'
						/>
					</div>
					<div className='w-full flex flex-col justify-start items-start content-start gap-2.5 font-hanken'>
						<label
							htmlFor='name'
							className='text-promoto-dark leading-[1.2] text-[16px]'
						>
							Email
						</label>
						<input
							type='text'
							id='name'
							placeholder='Enter your email address'
							className='box-border py-6 px-5 rounded-[8px] bg-promoto-off-white text-promoto-dark w-full'
						/>
					</div>
					<div className='w-full flex flex-col justify-start items-start content-start gap-2.5 font-hanken'>
						<label
							htmlFor='name'
							className='text-promoto-dark leading-[1.2] text-[16px]'
						>
							Subject
						</label>
						<input
							type='text'
							id='name'
							placeholder='Write your subject'
							className='box-border py-6 px-5 rounded-[8px] bg-promoto-off-white text-promoto-dark w-full'
						/>
					</div>
					<div className='w-full flex flex-col justify-start items-start content-start gap-2.5 font-hanken'>
						<label
							htmlFor='name'
							className='text-promoto-dark leading-[1.2] text-[16px]'
						>
							Your Message
						</label>
						<textarea
							id='name'
							rows={4}
							placeholder='What comes to your mind?'
							className='box-border py-6 px-5 rounded-[8px] bg-promoto-off-white text-promoto-dark w-full'
						/>
					</div>
					<div className='flex w-full items-center content-center gap-2.5'>
						<div className='flex items-start h-full pt-[5px]'>
							<Checkbox />
						</div>

						<p className='font-hanken text-[16px]'>
							By reaching our to us, you agree to our Privacy Policy
						</p>
					</div>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;

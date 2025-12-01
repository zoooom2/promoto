import Image from 'next/image';
import { FaQuoteRight } from 'react-icons/fa';
import reviewerImg from '@/public/assets/ReviewerImg.webp';
import ContactForm from './ContactForm';

const ContactData = () => {
	return (
		<div className='w-full flex flex-col promoto-tablet:flex-row justify-center max-promoto-tablet:items-center promoto-tablet:items-stretch overflow-clip content-center gap-5 '>
			<div className='box-border w-full promoto-tablet:w-[44%] promoto-laptop:h-[736px] flex flex-col justify-center promoto-tablet:justify-between items-center p-5 promoto-tablet:p-8 promoto-laptop:p-13 bg-promoto-dark overflow-hidden content-center max-promoto-tablet:gap-10 rounded-[16px] promoto-laptop:aspect-[0.6739130434782609/1]'>
				<div className='w-full flex flex-col justify-start items-start content-start gap-4 promoto-tablet:gap-6 promoto-laptop:gap-10 font-hanken h-full'>
					<div className='w-full flex flex-col justify-start items-start content-start gap-1'>
						<h6 className='text-[20px] w-full whitespace-pre-wrap wrap-break-word text-wrap text-promoto-yellow leading-[1.2] font-semibold capitalize font-hanken'>
							Phone
						</h6>
						<p className='whitespace-pre text-promoto-off-white leading-[1.2] text-[16px]'>
							+1 (480) 444 - 5555
						</p>
					</div>
					<div className='w-full flex flex-col justify-start items-start content-start gap-1'>
						<h6 className='text-[20px] w-full whitespace-pre-wrap wrap-break-word text-wrap text-promoto-yellow leading-[1.2] font-semibold capitalize'>
							Email
						</h6>
						<p className='whitespace-pre text-promoto-off-white leading-[1.2] text-[16px]'>
							mailto: trialdemomail@mail.com
						</p>
					</div>
					<div className='w-full flex flex-col justify-start items-start content-start gap-1'>
						<h6 className='text-[20px] w-full whitespace-pre-wrap wrap-break-word text-wrap text-promoto-yellow leading-[1.2] font-semibold capitalize'>
							Address
						</h6>
						<p className='whitespace-pre-wrap w-full text-promoto-off-white leading-[1.2] text-[16px] text-wrap wrap-break-word'>
							1254 Market Street, Suite 400 San Francisco, CA 94103 United
							States
						</p>
					</div>
				</div>
				<div className='w-full flex flex-col justify-start items-start content-start gap-7 promoto-tablet:gap-8 promoto-laptop:gap-10'>
					<div className='w-full flex flex-col justify-start items-start content-start gap-3'>
						<div className='text-promoto-off-white'>
							<FaQuoteRight size={29} />
						</div>
						<p className=' text-promoto-off-white leading-[1.2] w-full whitespace-pre-wrap text-wrap wrap-break-word'>
							Promoto’s support team has been incredible. Whenever I had a
							question, they responded quickly with clear solutions. It feels
							like having an extension of my own team reliable, friendly, and
							always ready to help.
						</p>
					</div>
					<div className='w-full flex justify-start items-center content-center gap-3'>
						<figure className='size-12'>
							<Image
								src={reviewerImg}
								className='w-full h-full object-cover'
								alt='reviewer image'
							/>
						</figure>
						<div className='flex flex-col justify-start items-start content-start'>
							<p className='font-hanken text-[16px] leading-[1.2] text-promoto-off-white whitespace-pre'>
								Mark Thompson
							</p>
							<p className='font-libre text-[16px] italic leading-[1.2] text-promoto-yellow'>
								Operations Manager
							</p>
						</div>
					</div>
				</div>
			</div>
			<ContactForm />
		</div>
	);
};

export default ContactData;

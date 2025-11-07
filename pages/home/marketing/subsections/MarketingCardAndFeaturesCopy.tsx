import Image from 'next/image';
import MarketingCard1 from './MarketingCard1';
import MarketingCard2 from './MarketingCard2';
import marketingRightTop from '@/assets/marketingRightTop.webp';
import { hankenGrotesk, hostGrotesk } from '@/app/fonts';
import emailAImg from '@/assets/emailA1st.webp';
import emailBimg from '@/assets/emailStack2nd.webp';
import emailCImg from '@/assets/lastStackMarketing.webp';
import bgImageRightBottom from '@/assets/BG -Right Bottom.png';
import bgImage from '@/assets/BG Image.png';
import { AiFillThunderbolt } from 'react-icons/ai';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
import { PiCubeTransparentLight, PiTelegramLogo } from 'react-icons/pi';
import { GoBell, GoPencil, GoWorkflow } from 'react-icons/go';
import { BsToggles } from 'react-icons/bs';
// import { motion } from 'framer-motion';
const MarketingCardAndFeatures = () => {
	const personalized = [
		'building workflow',
		'Designing Email',
		'Sending Campaign',
	].map((x, i) => (
		<div
			className='w-[256px] flex justify-center items-center content-center flex-nowrap gap-2.5'
			key={i}
		>
			<div className='flex items-center flex-1 bg-white flex-nowrap gap-2 rounded-xl'>
				<div className='py-2 pl-2 pr-4 flex items-center bg-white content-center flex-nowrap gap-2 rounded-xl'>
					<Checkbox />
					<p
						className={`${hankenGrotesk.className} traking-[-0.04em] text-[16px] capitalize`}
					>
						{x}
					</p>
				</div>
			</div>
		</div>
	));
	const bottomFeatures = [
		{
			icon: <PiTelegramLogo />,
			title: 'Unified Messaging',
			subtitle: `Send customer messages via email, push, in-app, push, and SMS, all within one platform.`,
		},
		{
			icon: <GoWorkflow />,
			title: 'Visual Workflow Builder',
			subtitle: `Map your customers’ journey across messages and channels.`,
		},
		{
			icon: <GoPencil />,
			title: 'Code or no-code ',
			subtitle: `Send customer messages via email, push, in-app, push, and SMS, all within one platform. Empower anyone to create emails—code freely or use our drag-and-drop editor.`,
		},
		{
			icon: <BsToggles />,
			title: 'Personalize in real time',
			subtitle: `Trigger campaigns from any profile attribute, event, or action.`,
		},
		{
			icon: <PiCubeTransparentLight />,
			title: 'Data activation',
			subtitle: `Sync campaign data with Customer.io via integrations or APIs.`,
		},
		{
			icon: <GoBell />,
			title: 'Transaction Alerts',
			subtitle: `Send receipts, resets, updates, and reminders—all with your branding.`,
		},
	].map((x, i) => (
		<div
			className='w-[197px flex justify-center items-center overflow-clip content-center flex-nowrap gap-2.5'
			key={i}
		>
			<div className='flex-1 flex flex-col flex-nowrap gap-4 w-full'>
				<div className='flex text-2xl'>{x.icon}</div>
				<div className='w-full flex flex-col flex-nowrap gap-2'>
					<h6
						className={`w-full whitespace-pre-wrap wrap-break-word text-wrap text-[#001b10] leading-[1.2] ${hankenGrotesk.className} font-semibold text-[20px] tracking-[-0.04em]`}
					>
						{x.title}
					</h6>
					<p
						className={`${hankenGrotesk.className} tracking-[-0.04em] leading-[1.6] whitespace-pre-wrap text-[#01b10] `}
					>
						{x.subtitle}
					</p>
				</div>
			</div>
		</div>
	));
	return (
		<div className='w-full flex flex-col justify-center items-center overflow-clip content-center flex-nowrap gap-6'>
			<div className='w-full flex flex-col justify-center items-center overflow-hidden content-center flex-nowrap gap-6'>
				<div className='w-full flex flex-col justify-center items-center overflow-hiddem content-center  flex-nowrap gap-5 relative'>
					<MarketingCard1 />
					<MarketingCard2 />
				</div>
				<div className='w-full flex flex-col items-center justify-center overflow-clip content-center flex-nowrap gap-6'>
					<div className='w-[360px] flex flex-col justify-center items-center overflow-clip  content-center flex-nowrap gap-2.5 relative rounded-2xl'>
						<figure className='absolute w-full h-full top-0 left-0'>
							<Image
								src={marketingRightTop}
								alt='card background'
								className='h-full w-full object-cover'
							/>
						</figure>
						<div className='z-1 w-full flex flex-col justify-end items-center py-5 content-between flex-nowrap gap-7.5'>
							<div className='w-full flex flex-col max-w-[280px] flex-nowrap gap-1'>
								<h5
									className={`${hankenGrotesk.className} text-[#f2ff00] font-semibold text-[32px] leading-[1.4] w-full text-center text-wrap wrap-break-word tracking-[-0.04em]`}
								>
									A/B + cohort testing
								</h5>
								<p
									className={`${hankenGrotesk.className} text-[16px] leading-[1.6] w-full whitespace-pre-wrap wrap-break-word text-white text-center tracking-[-0.04em]`}
								>
									Optimize messaging with content and timing tests.
								</p>

								<div className='w-full flex flex-col justify-center items-center content-center flex-nowrap z-4'>
									<div className='w-full h-32 max-w-[344px] relative flex flex-col justify-center items-center'>
										<div className='w-[80%] flex justify-center items-center content-center flex-wrap gap-[2.5] rounded-2xl z-2 '>
											<Image
												src={emailAImg}
												alt='emailA'
												className='w-full h-full rounded-md'
											/>
										</div>
										<div className='w-[65%] flex justify-center items-center content-center flex-wrap gap-[2.5] rounded-2xl z-1 -mt-1 opacity-90'>
											<Image
												src={emailBimg}
												alt=''
												className='w-full h-full rounded-md'
											/>
										</div>
										<div className='w-[50%] opacity-70 flex justify-center items-center content-center flex-wrap gap-[2.5] rounded-2xl -mt-2'>
											<Image
												src={emailCImg}
												alt=''
												className='w-full h-full rounded-md'
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='w-[360px] flex flex-col justify-center items-center overflow-clip content-center flex-nowrap gap-2.5 relative'>
						<figure className='absolute top-0 left-0 w-full h-full'>
							<Image
								src={bgImageRightBottom}
								alt=''
								className='w-full h-full'
							/>
						</figure>
						<div className='relative z-1 w-full flex flex-col justify-end items-center py-5.5 content-center flex-nowrap gap-[36px]'>
							<figure className='absolute top-0 left-0 w-full h-full'>
								<Image
									src={bgImage}
									alt=''
									className='w-full h-full'
								/>
							</figure>
							<div className='w-full flex flex-col items-center px-5 content-center flex-nowrap gap-4.5 z-2'>
								<div className='w-full flex flex-col max-w-[322px] flex-nowrap gap-1'>
									<h5
										className={`${hankenGrotesk.className} font-semibold text-[32px] tracking-[-0.04em] w-full whitespace-pre-wrap wrap-break-word text-wrap text-[#001b10] text-center leading-[1.4]`}
									>
										Hyper personalization
									</h5>
									<p
										className={`${hankenGrotesk.className} text-[16px] whitespace-pre-wrap text-wrap wrap-break-word text-[#001b10] text-center leading-[1.6] tracking-[-0.04em]`}
									>
										Automatically segment and tailor emails based on personas
										with the power of AI.
									</p>
								</div>
								<div className='w-[256px] flex flex-col items-center content-center flex-nowrap z-2 gap-2.5'>
									<div className='w-[256px] flex justify-center items-center p-2 bg-[#066f41] content-center  flex-nowrap gap-2.5 rounded-xl '>
										<div className='w-[17px] text-[14px] text-[#f2ff00]'>
											<AiFillThunderbolt />
										</div>
										<div className='h-2 flex-1'>
											<Progress
												value={Math.floor((6 / 7) * 100)}
												className=' [&>div]:bg-[#f2ff00] bg-[rgba(242,255,0,0.3)]'
											/>
										</div>
										<div
											className={`flex justify-center items-center content-center flex-nowrap gap-2.5 ${hostGrotesk.className} text-[14px] whitespace-pre  text-[#f2ff00] tracking-[-0.04em] leading-[1.2]`}
										>
											6/7
										</div>
									</div>
									{personalized}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='w-full grid bg-white overflow-clip grid-cols-1 min-w-[50px] justify-center p-6 gap-y-8 '>
				{bottomFeatures}
			</div>
		</div>
	);
};

export default MarketingCardAndFeatures;

// width: 100%;
// height: auto;
// white-space: pre-wrap;
// word-wrap: break-word;
// word-break: break-word;
// color: var(--Dark, #001b10);
// line-height: 1.2;
// position: absolute;

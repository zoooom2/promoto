import { PiCubeTransparentLight, PiTelegramLogo } from 'react-icons/pi';
import { GoBell, GoPencil, GoWorkflow } from 'react-icons/go';
import { BsToggles } from 'react-icons/bs';

const BottomFeatures = () => {
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
			className='w-full flex justify-center items-center overflow-clip content-center flex-nowrap gap-2.5'
			key={i}
		>
			<div className='flex-1 flex flex-col flex-nowrap gap-4 w-full h-full'>
				<div className='flex text-2xl'>{x.icon}</div>
				<div className='w-full flex flex-col flex-nowrap gap-2'>
					<h6
						className={`w-full whitespace-pre-wrap wrap-break-word text-wrap text-promoto-dark leading-[1.2] font-hanken font-semibold text-[20px] tracking-[-0.04em]`}
					>
						{x.title}
					</h6>
					<p
						className={`font-hanken tracking-[-0.04em] leading-[1.6] whitespace-pre-wrap text-[#01b10] `}
					>
						{x.subtitle}
					</p>
				</div>
			</div>
		</div>
	));

	return (
		<div className='w-full max-md:max-w-140 grid md:grid-cols-2 xl:grid-cols-3 bg-white overflow-clip grid-cols-1 min-w-[50px] justify-center p-6 md:p-12 gap-y-8 md:gap-y-12 md:gap-x-20 xl:gap-x-30 rounded-[20px]'>
			{bottomFeatures}
		</div>
	);
};

export default BottomFeatures;

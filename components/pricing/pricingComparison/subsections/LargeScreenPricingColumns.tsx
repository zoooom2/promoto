const LargeScreenPricingColumns = ({
	data,
	orientation,
	customBg,
}: {
	data: { title: string; keys: string[] };
	orientation: 'left' | 'center';
	customBg?: boolean;
}) => {
	return (
		<div
			className={`box-border flex flex-col justify-start items-start py-8 content-start gap-7 ${
				customBg ? 'bg-promoto-calendron-green' : ''
			} rounded-[20px] font-hanken text-promoto-dark flex-1`}
		>
			<h6
				className={`text-[20px] font-semibold w-full whitespace-pre-wrap text-wrap wrap-break-word leading-[1.2] capitalize text-${orientation}`}
			>
				{data.title}
			</h6>
			<div className='w-full flex flex-col justify-start items-start gap-5'>
				{data.keys.map((key, idx) => (
					<div
						className='flex justify-center items-center content-center gap-2.5 w-full'
						key={idx}
					>
						<p
							className={`w-full font-hanken text-[16px] whitespace-pre-wrap wrap-break-word text-wrap text-promoto-dark leading-[1.2] capitalize ${
								orientation === 'center' ? 'justify-center' : ''
							} h-[30px] flex items-center`}
						>
							{key}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default LargeScreenPricingColumns;

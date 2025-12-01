const LegalHeader = ({
	hankenText,
	libreText,
	date,
}: {
	hankenText: string;
	libreText: string;
	date: string;
}) => {
	return (
		<div className='w-full flex flex-col justify-start items-center content-center gap-3 promoto-tablet:gap-4'>
			<div className='w-full flex justify-center items-center content-center gap-2 leading-[1.2] text-[32px] promoto-tablet:text-[48px] promoto-laptop:text-[60px] '>
				<h1 className='font-hanken text-promoto-dark whitespace-pre font-medium'>
					{hankenText}
				</h1>
				<h1 className='font-libre text-promoto-green italic whitespace-pre'>
					{libreText}
				</h1>
			</div>
			<div className='w-full flex justify-center overflow-clip content-center font-hanken text-promoto-dark leading-[1.2] text-[16px] whitespace-pre gap-2'>
				<p>Effective Date:</p>
				<p>{date}</p>
			</div>
		</div>
	);
};

export default LegalHeader;

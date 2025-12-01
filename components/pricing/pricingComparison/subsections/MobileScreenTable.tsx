import React from 'react';

const MobileScreenTable = ({
	data,
}: {
	data: {
		feature: string;
		free: string;
		professional: string;
		enterprise: string;
	}[];
}) => {
	const tableData = data.map((data, index) => (
		<div
			className='box-border w-full flex justify-between items-center p-1 overflow-clip content-center border border-[rgba(0,27,16,0.1)]'
			key={index}
		>
			<p className='flex-1 whitespace-pre-wrap wrap-break-word text-wrap max-w-25 text-promoto-dark leading-[1.2] font-hanken text-[16px] h-full'>
				{data.feature}
			</p>
			<div className='box-border flex-1 flex justify-start items-center overflow-clip content-center flex-wrap gap-y-3 gap-x-1.5 border-l pl-1'>
				<div className='flex flex-col justify-center items-start overflow-clip content-start gap-1.5'>
					<div className='box-border flex justify-start items-center p-1 overflow-clip content-center gap-2.5'>
						<h6 className='font-hanken whitespace-pre text-promoto-dark leading-[1.2] font-semibold text-[20px] capitalize'>
							free
						</h6>
					</div>
					<div className='box-border flex justify-center items-center p-1 bg-promoto-calendron-green overflow-clip content-center gap-2.5 rounded-[6px]'>
						<h6 className='font-hanken whitespace-pre text-promoto-dark leading-[1.2] font-semibold text-[20px] capitalize'>
							professional
						</h6>
					</div>
					<div className='box-border flex justify-start items-center p-1 overflow-clip content-center gap-2.5'>
						<h6 className='font-hanken whitespace-pre text-promoto-dark leading-[1.2] font-semibold text-[20px] capitalize'>
							enterprise
						</h6>
					</div>
				</div>
				<div className='flex flex-col items-start justify-center overflow-clip content-start gap-2'>
					<div className='box-border flex justify-start items-center p-1 overflow-clip content-center gap-2.5'>
						<h6 className='font-hanken whitespace-pre text-promoto-dark leading-[1.2] font-semibold text-[20px] capitalize'>
							{data.free}
						</h6>
					</div>
					<div className='box-border flex justify-center items-center p-1 bg-promoto-calendron-green overflow-clip content-center gap-2.5 rounded-[6px]'>
						<h6 className='font-hanken whitespace-pre text-promoto-dark leading-[1.2] font-semibold text-[20px] capitalize'>
							{data.professional}
						</h6>
					</div>
					<div className='box-border flex justify-start items-center p-1 overflow-clip content-center gap-2.5'>
						<h6 className='font-hanken whitespace-pre text-promoto-dark leading-[1.2] font-semibold text-[20px] capitalize'>
							{data.enterprise}
						</h6>
					</div>
				</div>
			</div>
		</div>
	));
	return tableData;
};

export default MobileScreenTable;

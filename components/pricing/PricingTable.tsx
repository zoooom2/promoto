import React from 'react';

const PricingTable = ({
	data,
}: {
	data: {
		feature: string;
		free: string;
		professional: string;
		enterprise: string;
	}[];
}) => {
	return (
		<div className='w-full'>
			<table className='hidden md:table w-full border-collapse text-sm'>
				<thead>
					<tr className='border-b border-gray-200 bg-gray-50 text-left'>
						<th className='p-4 font-semibold text-gray-700'>Features</th>
						<th className='p-4 font-semibold text-gray-700'>Free</th>
						<th className='p-4 font-semibold text-gray-700'>Professional</th>
						<th className='p-4 font-semibold text-gray-700'>Enterprise</th>
					</tr>
				</thead>
				<tbody>
					{data.map((row) => (
						<tr
							key={row.feature}
							className='border-b border-gray-100'
						>
							<td className='p-4 font-medium text-gray-800'>{row.feature}</td>
							<td className='p-4 text-gray-600'>{row.free}</td>
							<td className='p-4 text-gray-600'>{row.professional}</td>
							<td className='p-4 text-gray-600'>{row.enterprise}</td>
						</tr>
					))}
				</tbody>
			</table>

			{/* 📱 Mobile Layout */}
			<div className='block md:hidden space-y-6'>
				{data.map((row) => (
					<div
						key={row.feature}
						className='border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm'
					>
						{/* Feature Name */}
						<div className='px-4 py-3 bg-gray-50 border-b border-gray-100'>
							<p className='font-semibold text-gray-800'>{row.feature}</p>
						</div>

						{/* Plans and Values */}
						<div className='grid grid-cols-3 text-sm'>
							<div className='col-span-1 px-4 py-3 font-medium text-gray-700'>
								Plans
							</div>
							<div className='col-span-2 px-4 py-3 font-medium text-gray-700'>
								Values
							</div>

							{/* Plans column */}
							<div className='col-span-1 flex flex-col gap-1 px-4 pb-3 text-gray-600'>
								<span>Free</span>
								<span>Professional</span>
								<span>Enterprise</span>
							</div>

							{/* Values column */}
							<div className='col-span-2 flex flex-col gap-1 px-4 pb-3 text-gray-600'>
								<span>{row.free}</span>
								<span>{row.professional}</span>
								<span>{row.enterprise}</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PricingTable;

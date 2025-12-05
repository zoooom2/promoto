'use client';

import Link from 'next/link';

const Pagination = ({ total, page }: Record<'total' | 'page', number>) => {
	return (
		<div className='flex justify-center gap-1 '>
			{Array.from({ length: total }, (_, i) => i + 1).map((pageNumber) => (
				<Link
					href={`/blog?page=${pageNumber}`}
					key={pageNumber}
					className={`px-3 py-1 rounded ${pageNumber === page ? 'bg-promoto-green text-white' : 'bg-promoto-light-gray text-promoto-dark'}`}
					// onClick={() => {
					// 	const params = new URLSearchParams(window.location.search);
					// 	params.set('page', pageNumber.toString());
					// 	window.location.search = params.toString();
					// }}
				>
					{pageNumber}
				</Link>
			))}
		</div>
	);
};

export default Pagination;

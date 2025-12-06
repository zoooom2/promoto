'use client';

import { GrNext, GrPrevious } from 'react-icons/gr';
import Link from 'next/link';

const Pagination = ({ total, page }: Record<'total' | 'page', number>) => {
	const pages: (string | number)[] = [];
	if (total <= 5)
		return (
			<div className='flex justify-center gap-2 items-center'>
				<Link
					href={`/blog?page=${page - 1}`}
					className='bg-promoto-green'
				>
					<GrPrevious />
				</Link>
				<div className='flex gap-1 items-center'>
					{Array.from({ length: total }, (_, i) => i + 1).map((pageNumber) => (
						<Link
							href={`/blog?page=${pageNumber}`}
							key={pageNumber}
							className={`px-3 py-1 rounded ${pageNumber === page ? 'bg-promoto-green text-white' : 'bg-promoto-light-gray text-promoto-dark'}`}
						>
							{pageNumber}
						</Link>
					))}
				</div>

				<Link
					href={`/blog?page=${page + 1}`}
					className='bg-promoto-green'
				>
					<GrNext />
				</Link>
			</div>
		);

	const first = 1;
	const last = total;
	if (page <= 3) {
		pages.push(1, 2, 3, 4, '...', last);
	} else if (page >= total - 2) {
		pages.push(first, '...', total - 3, total - 2, total - 1, total);
	} else {
		pages.push(first, '...', page - 1, page, page + 1, '...', last);
	}
	return (
		<div className='flex justify-center gap-1 items-center'>
			<Link href={`/blog?page=${page - 1}`}>previous</Link>
			{pages.map((pageNumber, index) => {
				return (
					<Link
						href={`/blog?page=${pageNumber}`}
						key={index}
						className={`px-3 py-1 rounded ${pageNumber === page ? 'bg-promoto-green text-white' : 'bg-promoto-light-gray text-promoto-dark'}`}
					>
						{pageNumber}
					</Link>
				);
			})}
			<Link href={`/blog?page=${page + 1}`}>next</Link>
		</div>
	);
};

export default Pagination;

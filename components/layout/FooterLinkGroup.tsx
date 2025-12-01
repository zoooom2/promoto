import Link from 'next/link';

const FooterLinkGroup = ({
	title,
	linkArr,
}: {
	title: string;
	linkArr: { name: string; link: string }[];
}) => {
	const groupLinks = linkArr.map((link, index) => (
		<li
			key={index}
			className='font-hanken whitespace-pre text-white leading-[1.2]'
		>
			<Link href={link.link}>{link.name}</Link>
		</li>
	));
	return (
		<div className='flex flex-col flex-nowrap gap-6 items-ceter w-full'>
			<h6 className='text-promoto-yellow leading-[1.2] whitespace-pre font-hanken font-semibold text-[20px]'>
				{title}
			</h6>
			<ul className='flex flex-col flex-nowrap gap-2'>{groupLinks}</ul>
		</div>
	);
};

export default FooterLinkGroup;

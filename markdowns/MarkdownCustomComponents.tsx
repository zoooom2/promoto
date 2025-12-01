import {
	AnchorHTMLAttributes,
	DetailedHTMLProps,
	ReactElement,
	ReactNode,
} from 'react';

type AnchorProps = DetailedHTMLProps<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	HTMLAnchorElement
>;

export const customH6 = ({ children }: { children: ReactNode }) => {
	return <h6 className='text-[20px]'>{children}</h6>;
};
export const customUL = ({ children }: { children: ReactNode }) => {
	return (
		<ul className='list-inside list-disc indent-[-1em] pl-[1em] marker:text-promoto-dark'>
			{children}
		</ul>
	);
};
export const customDIV = ({ children }: { children: ReactElement }) => {
	return <div className='gap-5 flex flex-col text-justify'>{children}</div>;
};

export const customAnchor = ({ children, href, ...props }: AnchorProps) => {
	return (
		<a
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			{...props}
			className='text-promoto-green'
		>
			{children}
		</a>
	);
};

'use client';

import MarkdownContent from './T&CMarkdown.mdx';
import {
	customAnchor,
	customDIV,
	customH6,
	customUL,
} from '@/markdowns/MarkdownCustomComponents';
const TermsContent = () => {
	const customStyle = {
		h6: customH6,
		ul: customUL,
		CustomDiv: customDIV,
		a: customAnchor,
	};
	return (
		<div className='w-full flex flex-col justify-center items-start max-w-125 promoto-laptop:max-w-186 overflow-clip content-center gap-10 promoto-tablet:gap-12  font-hanken '>
			<MarkdownContent components={customStyle} />
		</div>
	);
};

export default TermsContent;

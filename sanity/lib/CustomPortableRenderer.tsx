/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { urlFor } from './image';

const ImageComponents = ({ value }: { value: any }) => {
	if (!value?.asset) return null;
	const alt = value.alt || '';

	return (
		<figure>
			<Image
				src={urlFor(value).url()}
				alt={alt}
				width={800}
				height={500}
				sizes='(max-width:810px) 100vw, (max-width:1024px) 50vw, 800px'
				className='w-full h-full object-cover max-h-[364px] rounded-[8px]'
			/>
		</figure>
	);
};

const CustomPortableRenderer = ({ value }: { value: any }) => {
	return (
		<PortableText
			value={value}
			components={{ types: { image: ImageComponents } }}
		/>
	);
};

export default CustomPortableRenderer;

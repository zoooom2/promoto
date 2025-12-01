import { defineField, defineType } from 'sanity';

export const postType = defineType({
	name: 'post',
	title: 'Post',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			title: 'Title',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			title: 'Slug',
			options: { source: 'title' },
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'publishedAt',
			type: 'datetime',
			title: 'PublishedAt',
			initialValue: () => new Date().toISOString(),
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'blogThumbnail',
			type: 'image',
			title: 'BlogThumbnail',
		}),
		defineField({
			name: 'author',
			type: 'string',
			title: 'Author',
			initialValue: 'Anonymous',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'tag',
			type: 'string',
			title: 'Category Tag',
			// validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'subtitle',
			type: 'text',
			title: 'Subtitle',
			// validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'body',
			type: 'array',
			of: [{ type: 'block' }, { type: 'image' }],
		}),
	],
});

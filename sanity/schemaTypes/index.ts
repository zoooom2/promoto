import { type SchemaTypeDefinition } from 'sanity';
import { postType } from './PostType';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [postType],
};

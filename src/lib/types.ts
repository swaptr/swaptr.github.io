export type categories = 'sveltekit' | 'svelte';

export type Post = {
	title: string;
	slug: string;
	description: string;
	image: string;
	date: string;
	categories: string[];
	published: boolean;
	sponsor: string;
};

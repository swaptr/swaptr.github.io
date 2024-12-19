import type { Post } from "./types"

type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
    const dateToFormat = new Date(date.replaceAll('-', '/'))
    const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle })
    return dateFormatter.format(dateToFormat)
}

export function getPosts(tag?: string | null): Post[] {
    const paths = import.meta.glob('/src/posts/*.svx', { eager: true });

    const posts: Post[] = Object.entries(paths)
        .map(([filePath, file]) => {
            const slug = filePath.split('/').at(-1)?.replace('.svx', '');
            if (file && typeof file === 'object' && 'metadata' in file && slug) {
                const metadata = file.metadata as Omit<Post, 'slug'>;
                return { ...metadata, slug } satisfies Post;
            }
            return null;
        })
        .filter((post): post is Post => post !== null && post.published)
        .filter(post =>
            !tag || post.tags?.includes(tag)
        )
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
}

export function getTagCounts(posts: Post[]): Record<string, number> {
    return posts.reduce((tagCounts, post) => {
        for (const tag of post.tags) {
            tagCounts[tag] = (tagCounts[tag] ?? 0) + 1;
        }
        return tagCounts;
    }, {} as Record<string, number>);
}
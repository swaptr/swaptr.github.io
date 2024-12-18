import type { Post } from "./types"

type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
    const dateToFormat = new Date(date.replaceAll('-', '/'))
    const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle })
    return dateFormatter.format(dateToFormat)
}

export function getPosts() {
    let posts: Post[] = []

    const paths = import.meta.glob('/src/posts/*.svx', { eager: true })

    for (const path in paths) {
        const file = paths[path]
        const slug = path.split('/').at(-1)?.replace('.svx', '')

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<Post, 'slug'>
            const post = { ...metadata, slug } satisfies Post
            post.published && posts.push(post)
        }
    }

    posts = posts.sort(
        (first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
    )

    return posts
}

export function getTagCounts(posts: Post[]): Record<string, number> {
    return posts.reduce((tagCounts, post) => {
        for (const tag of post.tags) {
            tagCounts[tag] = (tagCounts[tag] ?? 0) + 1;
        }
        return tagCounts;
    }, {} as Record<string, number>);
}
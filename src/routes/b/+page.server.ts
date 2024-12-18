import type { Post } from '$lib/types'
import { getPosts, getTagCounts } from '$lib/utils.js'

export async function load({ fetch }) {
    let posts: Post[] = getPosts()
    let tags = getTagCounts(posts)

    return { posts, tags }
}

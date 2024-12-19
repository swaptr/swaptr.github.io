import type { Post } from '$lib/types'
import { getPosts } from '$lib/utils.js'

export async function load({ params }) {
    let posts: Post[] = getPosts(params.slug)

    return { posts }
}

import type { Post } from '$lib/types'
import { getPosts } from '$lib/utils.js'
import { error } from '@sveltejs/kit'

export async function load({ params, url }) {
    let posts: Post[] = getPosts()

    if (posts.length === 0) {
        error(500, "No posts found")
    }

    return { posts }
}

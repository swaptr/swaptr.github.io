import { getPosts, getTagCounts } from '$lib/utils.js'

export async function load({ fetch }) {
    let tags = getTagCounts(getPosts())

    return { tags }
}

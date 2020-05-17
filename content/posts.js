import MONTHS from '../utils/months'
import GhostClient from '../config/ghost'

export async function getPosts(
  page = 1,
  include = ['authors'],
  fields = [
    'title',
    'slug',
    'feature_image',
    'published_at',
    'custom_excerpt',
    'reading_time',
    'html'
  ],
  limit = 12
) {
  try {
    const posts = await GhostClient.posts.browse({
      include: include.join(','),
      page,
      limit,
      fields: fields.join(',')
    })

    return parsePosts(posts)
  } catch (err) {
    // TODO: Show some sort of error screen
    // eslint-disable-next-line no-console
    console.log(err)
    return []
  }
}

export function parsePosts(posts = []) {
  let number = 0
  const parsed = posts.map((post) => {
    const parsedPost = post
    parsedPost.number = number
    const date = new Date(post.published_at)
    parsedPost.day = date.getDay()
    parsedPost.month = MONTHS[date.getMonth()]
    parsedPost.year = date.getFullYear()

    parsedPost.excerpt = post.custom_excerpt

    if (parsedPost.excerpt?.length > 140) {
      let sliced = parsedPost.excerpt.slice(0, 137)
      const re = new RegExp(/[^\w]/, 'g')

      if (!re.test(parsedPost.excerpt[137])) {
        let index = re.lastIndex

        do {
          index = re.lastIndex
        } while (re.test(sliced))

        if (index > 0) {
          sliced = sliced.slice(0, index - 1)
        }
      }

      parsedPost.excerpt = `${sliced}...`
    }

    number += 1

    return parsedPost
  })

  return parsed
}

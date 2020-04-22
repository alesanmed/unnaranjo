<template>
  <div class="flex flex-wrap justify-evenly">
    <PostCard
      v-for="post in posts"
      :key="post.id"
      :img="post.feat_img.medium_large"
      :link="post.slug"
      :title="post.title.rendered"
      :excerpt="post.excerpt"
      :day="post.day"
      :month="post.month"
      :year="post.year"
    />
    <client-only>
      <infinite-loading spinner="spiral" @infinite="infiniteScroll" />
    </client-only>
  </div>
</template>

<script>
import MONTHS from '../utils/months'
const PostCard = () => import('./PostLean.vue')

export default {
  layout: 'index',
  components: {
    PostCard
  },
  data: () => ({
    posts: [],
    perPage: 6,
    page: 1
  }),
  async mounted() {
    const res = await this.getOnePostsPage()

    this.addPosts(res)
  },
  methods: {
    async infiniteScroll($state) {
      await new Promise((resolve) => setTimeout(resolve, 500))

      const posts = await this.getOnePostsPage()

      if (posts.length > 0) {
        this.addPosts(posts)
        $state.loaded()
      } else {
        $state.complete()
      }
    },

    addPosts(rawPosts) {
      rawPosts.forEach((post) => {
        const date = new Date(post.date)
        post.day = date.getDay()
        post.month = MONTHS[date.getMonth()]
        post.year = date.getFullYear()

        post.excerpt = post.excerpt.rendered.replace(/<([^>]+)>/gi, '')

        if (post.excerpt.length > 140) {
          let sliced = post.excerpt.slice(0, 137)
          const re = new RegExp(/[^\w]/, 'g')

          if (!re.test(post.excerpt[137])) {
            let index = re.lastIndex

            do {
              index = re.lastIndex
            } while (re.test(sliced))

            if (index > 0) {
              sliced = sliced.slice(0, index - 1)
            }
          }

          post.excerpt = `${sliced}...`
        }

        this.$data.posts.push(post)
      })
    },

    async getOnePostsPage() {
      try {
        const res = await this.$axios.$get('/wp/v2/posts', {
          params: {
            _fields: 'id,title,slug,excerpt,featured_media,feat_img,date',
            per_page: this.perPage,
            page: this.page
          }
        })

        this.$data.page += 1

        return res
      } catch (err) {
        // FIXME: Show some sort of error screen
        // eslint-disable-next-line no-console
        console.log(err)
        return []
      }
    }
  }
}
</script>

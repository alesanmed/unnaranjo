<template>
  <div class="max-w-6xl m-auto flex flex-wrap justify-evenly">
    <PostCard
      v-for="(post, index) in posts"
      :key="post.id"
      :number="index"
      :img="post.feature_image"
      :link="post.slug"
      :title="post.title"
      :excerpt="post.excerpt"
      :author="post.authors[0]"
      :day="post.day"
      :month="post.month"
      :year="post.year"
      :reading-time="post.reading_time"
    />
    <client-only>
      <infinite-loading spinner="spiral" @infinite="infiniteScroll" />
    </client-only>
  </div>
</template>

<script>
import { getPosts } from '../content/posts'
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
    const firstPage = await this.getOnePostsPage()

    this.addPosts(firstPage)
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

    addPosts(newPosts) {
      this.$data.posts = this.$data.posts.concat(newPosts)
    },

    async getOnePostsPage() {
      const res = await getPosts(this.page)

      this.$data.page += 1

      return res
    }
  }
}
</script>

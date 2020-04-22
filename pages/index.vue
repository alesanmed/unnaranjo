<template>
  <div class="flex flex-wrap justify-evenly">
    <PostCard
      v-for="post in posts"
      :key="post.id"
      :img="post.feat_img.medium_large"
      :link="post.slug"
      :title="post.title.rendered"
      :day="post.day"
      :month="post.month"
      :year="post.year"
      :author="'Ale Sánchez'"
    />
  </div>
</template>

<script>
import MONTHS from '../utils/months'
const PostCard = () => import('../components/PostLean.vue')

export default {
  layout: 'index',
  components: {
    PostCard
  },
  data: () => ({
    posts: []
  }),
  async mounted() {
    try {
      const res = await this.$axios.$get('/wp/v2/posts', {
        params: {
          _fields: 'id,title,slug,excerpt,featured_media,feat_img,date',
          per_page: '6'
        }
      })
      this.posts = res.map((post) => {
        const date = new Date(post.date)
        post.day = date.getDay()
        post.month = MONTHS[date.getMonth()]
        post.year = date.getFullYear()

        return post
      })
    } catch (err) {
      // FIXME: Show some sort of error screen
      // eslint-disable-next-line no-console
      console.log(err)
    }
  }
}
</script>

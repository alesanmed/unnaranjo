<template>
  <div class="flex flex-wrap justify-evenly">
    <PostCard
      v-for="post in posts"
      :key="post.id"
      :img="post.feat_img.td_324_160"
      :link="post.slug"
      :title="post.title.rendered"
      :date="post.date"
    />
  </div>
</template>

<script>
const PostCard = () => import('../components/PostCard.vue')

export default {
  layout: 'index',
  components: {
    PostCard
  },
  data: () => ({
    posts: []
  }),
  mounted() {
    this.$axios
      .$get('/wp/v2/posts', {
        params: {
          _fields: 'id,title,slug,excerpt,featured_media,feat_img,date',
          per_page: '6'
        }
      })
      .then((res) => {
        this.posts = res
      })
      .catch((err) => {
        // FIXME: Show some sort of error screen
        // eslint-disable-next-line no-console
        console.log(err)
      })
  }
}
</script>

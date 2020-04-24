<template>
  <div>
    <PostHeader :img="post.img" />
    <div
      class="w-3/5 mx-auto bg-white -mt-4 px-8 py-6 relative"
      v-html="post.content"
    ></div>
  </div>
</template>

<script>
const PostHeader = () => import('../../components/PostHeader.vue')

export default {
  layout: 'post',
  components: {
    PostHeader
  },
  data: () => ({
    post: {
      img: '',
      content: undefined
    }
  }),
  async mounted() {
    try {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
      })

      const slug = this.$route.params.slug

      const res = await this.$axios.$get(`/wp/v2/posts?_embed&slug=${slug}`)

      const post = res[0]

      this.$data.post.img = post.feat_img?.full
      this.$data.post.content = post.content.rendered

      this.$nextTick(() => {
        this.$nuxt.$loading.finish()
      })
    } catch (err) {
      // FIXME: Show some sort of error screen
      // eslint-disable-next-line no-console
      console.log(err)
      return []
    }
  }
}
</script>

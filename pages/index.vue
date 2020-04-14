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

<script lang="ts">
import Vue from 'vue'
import PostCard from '../components/PostCard.vue'

export default Vue.extend({
  components: {
    PostCard
  },
  data: () => ({
    posts: []
  }),
  mounted() {
    this.$axios
      .$get('posts', {
        params: {
          _fields: 'id,title,slug,excerpt,featured_media,feat_img,date',
          per_page: '9'
        }
      })
      .then((res) => {
        this.posts = res
      })
      .catch((err) => {})
  }
})
</script>

<template>
  <Posts />
</template>

<script>
const Posts = () => import('../components/Posts.vue')

export default {
  layout: 'index',
  components: {
    Posts
  }
}
</script>

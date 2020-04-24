<template>
  <div>
    <Navbar :is-absolute="false" />
    <nuxt />
  </div>
</template>

<script>
const Navbar = () => import('../components/Navbar.vue')

export default {
  components: {
    Navbar
  }
}
</script>

<style>
body {
  @apply bg-white;
}
</style>

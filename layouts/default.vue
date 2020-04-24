<template>
  <div>
    <Navbar :is-abolute="false" />
    <Header />
    <nuxt />
  </div>
</template>

<script lang="js">
const Header = () => import('~/components/Header.vue')
const Navbar = () => import('~/components/Navbar.vue')

export default {
  components: {
    Header,
    Navbar
  }
}
</script>

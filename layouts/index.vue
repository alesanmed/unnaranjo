<template>
  <div>
    <Navbar />
    <SubscribeForm />
    <nuxt />
  </div>
</template>

<script lang="js">
const SubscribeForm = () => import('~/components/SubscribeForm.vue')
const Navbar = () => import('~/components/Navbar.vue')

export default {
  components: {
    SubscribeForm,
    Navbar
  }
}
</script>

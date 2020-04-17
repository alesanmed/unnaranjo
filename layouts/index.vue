<template>
  <div>
    <Navbar />
    <SubscribeForm />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
const SubscribeForm = () => import('~/components/SubscribeForm.vue')
const Navbar = () => import('~/components/Navbar.vue')

export default Vue.extend({
  components: {
    SubscribeForm,
    Navbar
  }
})
</script>

<template>
  <div class="flex flex-row uppercase text-lg font-medium bg-gray-300">
    <nuxt-link to="/"><div class="p-4">Inicio</div></nuxt-link>
    <div class="p-4">Mini-Consejos</div>
    <div class="p-4">Cursos</div>
    <div class="p-4">Sobre Nosotros</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Navbar'
})
</script>

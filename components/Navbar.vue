<template>
  <div
    class="flex flex-row uppercase flex-wrap sm:flex-no-wrap text-lg font-medium h-16 bg-gray-400"
  >
    <div class="p-4">
      <img class="h-8" src="~/assets/img/header/logo_512.png" />
    </div>
    <nuxt-link to="/">
      <div class="p-4">Inicio</div>
    </nuxt-link>
    <div class="p-4">Mini-Consejos</div>
    <nuxt-link to="posts">
      <div class="p-4">Cursos</div>
    </nuxt-link>
    <nuxt-link to="about">
      <div class="p-4">Sobre Nosotros</div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

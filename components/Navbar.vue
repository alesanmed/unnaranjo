<template>
  <div class="flex static md:absolute top-0 w-full">
    <div class="px-4 py-3">
      <img class="h-8" src="~/assets/img/header/logo_512.png" />
    </div>
    <div
      class="flex uppercase flex-wrap flex-grow justify-end sm:flex-no-wrap text-lg text-gray-300 h-16 bg-transparent"
    >
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
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

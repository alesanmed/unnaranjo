<template>
  <div
    class="flex static w-full bg-brand-gray"
    :class="{ isAbsolute: 'md:absolute top-0' }"
  >
    <div class="px-4 py-3">
      <picture>
        <source
          data-srcset="~/assets/img/header/logo_512.png?webp"
          type="image/webp"
        />
        <source
          data-srcset="~/assets/img/header/logo_512.png"
          type="image/png"
        />
        <img class="h-8 lazyload" data-src="~/assets/img/header/logo_512.png" />
      </picture>
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
  name: 'Navbar',
  props: {
    isAbsolute: {
      type: Boolean,
      default: true
    }
  }
}
</script>

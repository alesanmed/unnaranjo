<template>
  <div class="w-full bg-gray-300" :class="{ havePadding: 'py-8' }">
    <picture v-if="img === ''">
      <source
        data-srcset="~/assets/img/header/logo_512.png?webp"
        type="image/webp"
      />
      <source data-srcset="~/assets/img/header/logo_512.png" type="image/png" />
      <img
        class="lazyload m-auto p-5 h-48"
        data-src="~/assets/img/header/logo_512.png"
      />
    </picture>
    <picture v-else>
      <img class="lazyload object-cover w-full h-56" :data-src="img" />
    </picture>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: ''
    }
  },
  computed: {
    havePadding: () => this.img === ''
  }
}
</script>

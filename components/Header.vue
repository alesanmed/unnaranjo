<template>
  <div class="bg-brand-gray shadow-lg py-2">
    <picture>
      <source
        data-srcset="~/assets/img/header/logo_subtitle.png?webp"
        type="image/webp"
      />
      <source
        data-srcset="~/assets/img/header/logo_subtitle.png"
        type="image/png"
      />
      <img
        class="w-2/3 sm:w-1/3 mx-auto lazyload"
        data-src="~/assets/img/header/logo_subtitle.png"
      />
    </picture>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

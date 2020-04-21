<template functional>
  <nuxt-link
    :to="props.link"
    class="flex flex-col px-6 my-8 sm:w-1/3 sm:flex-same-width"
  >
    <picture>
      <source :data-srcset="`${props.img}?webp`" type="image/webp" />
      <source :data-srcset="props.img" type="image/jpg" />
      <img :data-src="props.img" class="mx-auto lazyload" />
    </picture>
    <div class="text-3xl font-oswald md:truncate font-bold">
      {{ props.title }}
    </div>
    <div class="">
      {{ props.date }}
    </div>
  </nuxt-link>
</template>

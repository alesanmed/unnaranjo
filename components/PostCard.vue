<template functional>
  <nuxt-link :to="props.link" class="relative flex flex-col px-6 my-8 w-1/3">
    <picture class="w-full">
      <source :data-srcset="`${props.img}?webp`" type="image/webp" />
      <source :data-srcset="props.img" type="image/jpg" />
      <img :data-src="props.img" class="mx-auto lazyload w-full" />
    </picture>
    <div>
      <div class="text-3xl font-oswald md:truncate font-bold absolute top-0">
        {{ props.title }}
      </div>
      <div class="w-full">
        {{ props.date }}
      </div>
    </div>
  </nuxt-link>
</template>

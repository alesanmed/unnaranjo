<template functional>
  <nuxt-link
    :to="props.link"
    class="flex flex-col px-6 my-8 sm:w-1/3 sm:flex-same-width"
  >
    <img :src="props.img" class="mx-auto" />
    <div class="text-3xl font-oswald md:truncate font-bold">
      {{ props.title }}
    </div>
    <div class="">
      {{ props.date }}
    </div>
  </nuxt-link>
</template>

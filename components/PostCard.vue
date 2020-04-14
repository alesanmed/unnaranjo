<template functional>
  <div class="flex flex-col px-5 my-8 md:w-max-3/10 postcard-container">
    <img :src="props.img" class="mx-auto max-w-f-324" />
    <div class="text-3xl font-oswald truncate font-bold">
      <nuxt-link :to="props.link">{{ props.title }}</nuxt-link>
    </div>
    <div class="">
      {{ props.date }}
    </div>
  </div>
</template>

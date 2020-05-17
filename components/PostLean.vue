<template functional>
  <div
    class="post px-6 my-8 w-full card"
    :class="$options.postNumber(props.number)"
  >
    <div
      class="wrapper flex flex-col relative overflow-hidden shadow-hard min-h-25 shadow-hard"
      :style="{
        background: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${props.img}) center/cover no-repeat`
      }"
    >
      <div class="flex text-white p-4">
        <div class="text-xs">
          <span class="day">{{ props.day }}</span>
          <span class="month">{{ props.month }}</span>
          <span class="year">{{ props.year }}</span>
        </div>
        <div class="ml-auto">
          <font-awesome-layers class="fa-md">
            <font-awesome-icon :icon="['far', 'bookmark']" />
          </font-awesome-layers>
          <font-awesome-layers class="fa-md">
            <font-awesome-layers-text
              value="27"
              class="text-xs menu-animated-item opacity-0 transition duration-300"
            />
            <font-awesome-icon :icon="['far', 'heart']" />
          </font-awesome-layers>
          <font-awesome-layers class="fa-md">
            <font-awesome-layers-text
              value="8"
              class="text-xs menu-animated-item opacity-0 transition duration-300"
            />
            <font-awesome-icon :icon="['far', 'comment']" />
          </font-awesome-layers>
        </div>
      </div>
      <div class="data mt-auto text-white transition-transform duration-300">
        <div class="p-4">
          <div>
            <img
              class="rounded-full w-8 h-8 lazyload inline mr-1"
              :src="props.author.profile_image"
            />
            <span class="text-xs"
              >{{ props.author.name }} &ndash; Lectura de
              {{ props.readingTime }} min</span
            >
          </div>

          <nuxt-link :to="`/posts/${props.link}`">
            <h1 class="mt-1 font-oswald text-3xl">
              {{ props.title }}
            </h1>
          </nuxt-link>
          <p class="pt-1 h-20">
            {{ props.excerpt }}
          </p>
          <nuxt-link
            :to="`/posts/${props.link}`"
            class="read-more h-4 flex w-full justify-center text-xs text-white"
          >
            <div>
              Saber más
            </div>
            <div
              class="read-more-arrow transition duration-300 opacity-0"
            ></div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  functional: true,

  props: {
    number: {
      type: Number,
      default: 3 // This will make the post appear as a small one (standard)
    },
    img: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    excerpt: {
      type: String,
      default: ''
    },
    author: {
      type: Object,
      default: () => ({
        name: ''
      })
    },
    day: {
      type: Number,
      default: 1
    },
    month: {
      type: String,
      default: 'Enero'
    },
    year: {
      type: Number,
      default: 2000
    },
    readingTime: {
      type: Number,
      default: 0
    }
  },

  postNumber: (number) => {
    number = number >= 18 ? 3 : number // Fix to small from the 18th post
    return {
      'post-0': number % 6 === 0,
      'post-1': number % 6 === 1,
      'post-2': number % 6 === 2,
      'post-3': number % 6 === 3,
      'post-4': number % 6 === 4,
      'post-5': number % 6 === 5
    }
  }
}
</script>

<style scoped>
.post.card .wrapper:hover .data {
  -webkit-transform: translateY(0);
  transform: translateY(0);
}

/* lg */
@media (min-width: 1024px) {
  .post.card.post-1,
  .post.card.post-2 {
    @apply w-1/2;
  }

  .post.card.post-3,
  .post.card.post-4,
  .post.card.post-5 {
    @apply w-1/3;
  }
}

.post.card .data {
  -webkit-transform: translateY(7rem);
  transform: translateY(7rem);
}

.post .wrapper .menu-animated-item {
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
}

.post .wrapper:hover .menu-animated-item {
  -webkit-transform: translate(-50%, calc(-50% - 1.2em));
  transform: translate(-50%, calc(-50% - 1.2em));
  opacity: 1;
}
.post .read-more-arrow::after {
  content: '\2192';
}
.post .read-more-arrow {
  -webkit-transform: translate(0);
  transform: translate(0);
}
.post .read-more:hover .read-more-arrow {
  -webkit-transform: translateX(1rem);
  transform: translateX(1rem);
  opacity: 1;
}
</style>

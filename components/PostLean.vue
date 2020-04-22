<template functional>
  <div class="post px-6 my-8 w-full lg:w-1/3 card">
    <div
      class="wrapper flex flex-col relative overflow-hidden shadow-hard min-h-35 shadow-hard"
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
          <!-- <span class="text-xs">{{ props.author }}</span> -->
          <h1 class="mt-1 text-lg">
            <nuxt-link :to="props.link" class="truncate">
              {{ props.title }}
            </nuxt-link>
          </h1>
          <p class="pt-1 h-20">
            {{ props.excerpt }}
          </p>
          <a
            href="#"
            class="read-more h-4 flex w-full justify-center text-xs text-white"
          >
            <div>
              Saber más
            </div>
            <div
              class="read-more-arrow transition duration-300 opacity-0"
            ></div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.post.card .wrapper:hover .data {
  -webkit-transform: translateY(0);
  transform: translateY(0);
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

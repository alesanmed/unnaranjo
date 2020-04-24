<template>
  <div class="flex mt-3">
    <div class="example-1 px-6 w-full lg:w-1/3 card">
      <div class="wrapper relative overflow-hidden shadow-hard min-h-25">
        <div class="date absolute p-3 top-0 letf-0 bg-teal-300 text-white">
          <span class="block text-center font-bold text-2xl shadow-text">
            12
          </span>
          <span class="block text-center uppercase text-xs">Aug</span>
          <span class="block text-center text-xs">2016</span>
        </div>
        <div
          class="data absolute bottom-0 w-full transition-transform duration-300"
        >
          <div class="content p-4 relative z-10 bg-white">
            <div
              class="flex absolute right-0 h-2 p-3 w-12 justify-around"
              @click="showMenu"
            >
              <div class="rounded-full h-1 w-1 bg-gray-600"></div>
              <div class="rounded-full h-1 w-1 bg-gray-600"></div>
              <div class="rounded-full h-1 w-1 bg-gray-600"></div>
            </div>
            <span class="text-xs">Jane Doe</span>
            <h1 class="mt-2 text-gray-700">
              <a href="#">Boxing icon has the will for a couple more fights</a>
            </h1>
            <p class="h-20">
              The highly anticipated world championship fight will take place at
              10am and is the second major boxing blockbuster in the nation
              after 43 years. The highly anticipated world championship fight
              will take place at 10am and is the second major boxing blockbuster
              in the nation after 43 years. The highly anticipated world
              championship fight will take place at 10am and is the second major
              boxing blockbuster in the nation after 43 years. The highly
              anticipated world championship fight will take place at 10am and
              is the second major boxing blockbuster in the nation after 43
              years. The highly anticipated world championship fight will take
              place at 10am and is the second major boxing blockbuster in the
              nation after 43 years. The highly anticipated world championship
              fight will take place at 10am and is the second major boxing
              blockbuster in the nation after 43 years.
            </p>
          </div>
          <div
            class="flex absolute top-0 left-0 w-full transition-transform duration-300 items-stretch h-full justify-around pt-2 bg-teal-300"
            :class="{
              'menu-visible': menuIsVisible
            }"
          >
            <font-awesome-layers class="fa-lg">
              <font-awesome-icon :icon="['far', 'bookmark']" />
            </font-awesome-layers>
            <font-awesome-layers class="fa-lg">
              <font-awesome-icon :icon="['far', 'heart']" />
              <font-awesome-layers-text
                value="27"
                transform="down-13 shrink-4"
              />
            </font-awesome-layers>
            <font-awesome-layers class="fa-lg">
              <font-awesome-icon :icon="['far', 'comment']" />
              <font-awesome-layers-text
                value="8"
                transform="down-13 shrink-4"
              />
            </font-awesome-layers>
          </div>
        </div>
      </div>
    </div>
    <div class="example-2 px-6 w-full lg:w-1/3 card">
      <div
        class="wrapper flex flex-col relative overflow-hidden shadow-hard min-h-35 shadow-hard"
      >
        <div class="flex text-white p-4">
          <div class="text-xs">
            <span class="day">12</span>
            <span class="month">Aug</span>
            <span class="year">2016</span>
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
            <span class="text-xs">Jane Doe</span>
            <h1 class="mt-1 text-lg">
              <a href="#">Stranger Things: The sound of the Upside Down</a>
            </h1>
            <p class="pt-1 h-20">
              The antsy bingers of Netflix will eagerly anticipate the digital
              release of the Survive soundtrack, out today. The antsy bingers
              of...
            </p>
            <a
              href="#"
              class="read-more h-4 flex w-full justify-center text-xs text-white"
            >
              <div>
                Read more
              </div>
              <div
                class="read-more-arrow transition duration-300 opacity-0"
              ></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    menuIsVisible: false
  }),
  methods: {
    showMenu() {
      this.menuIsVisible = !this.menuIsVisible
    }
  }
}
</script>

<style scoped>
.example-1.card .wrapper:hover .data {
  -webkit-transform: translateY(0);
  transform: translateY(0);
}
.example-1.card .data {
  -webkit-transform: translateY(6rem);
  transform: translateY(6em);
}
.example-1 div.menu-visible {
  -webkit-transform: translateY(-60px);
  transform: translateY(-60px);
}

.example-1 .wrapper {
  background: url(https://images.unsplash.com/photo-1496979551903-46e46589a88b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cda12b505afa1beb06e49d89014cbd65&auto=format&fit=crop&w=634&q=80)
    20% 1% / cover no-repeat;
}

.example-1 .menu-content {
  -webkit-transform: translateY(0);
  transform: translateY(0);
}

.example-2.card .wrapper:hover .data {
  -webkit-transform: translateY(0);
  transform: translateY(0);
}

.example-2.card .data {
  -webkit-transform: translateY(7rem);
  transform: translateY(7rem);
}

.example-2 .wrapper {
  background: url(https://tvseriescritic.files.wordpress.com/2016/10/stranger-things-bicycle-lights-children.jpg)
    center/cover no-repeat;
}
.example-2 .wrapper .menu-animated-item {
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
}

.example-2 .wrapper:hover .menu-animated-item {
  -webkit-transform: translate(-50%, calc(-50% - 1.2em));
  transform: translate(-50%, calc(-50% - 1.2em));
  opacity: 1;
}
.example-2 .read-more-arrow::after {
  content: '\2192';
}
.example-2 .read-more-arrow {
  -webkit-transform: translate(0);
  transform: translate(0);
}
.example-2 .read-more:hover .read-more-arrow {
  -webkit-transform: translateX(1rem);
  transform: translateX(1rem);
  opacity: 1;
}
</style>

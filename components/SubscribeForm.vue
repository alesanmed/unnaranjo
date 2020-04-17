<template>
  <div class="bg-gray-200 pb-2">
    <div>
      <img src="https://via.placeholder.com/720x300?text=SUBSCRIBE IMAGE" />
    </div>
    <div class="flex flex-row bg-blue-300 py-5 px-8 mx-auto">
      <div class="font-oswald max-w-xs text-2xl text-white mx-6">
        No te pierdas NADA y mejora tus fotos desde
        <span class="text-orange-500">hoy</span>
      </div>
      <form
        id="subscribe"
        action="/wp-json/gmt-mailchimp/v1/subscribi"
        method="get"
        class="flex-grow flex flex-row"
        @submit="validateForm"
      >
        <div class="input-group px-8 flex-grow">
          <input
            v-model="email"
            class="h-10 px-2"
            type="text"
            placeholder="Tu EMAIL * - No te mandaremos SPAM"
          />
          <div
            v-if="errors.email"
            class="text-red-600 font-semibold text-sm m-0 ml-2"
          >
            <ul>
              <li v-for="(error, index) in errors.email" :key="index">
                {{ error }}
              </li>
            </ul>
          </div>
        </div>
        <div class="input-group px-8 flex-grow">
          <input
            v-model="name"
            class="h-10 px-2"
            type="text"
            placeholder="Tu nombre *"
          />
          <div
            v-if="errors.name"
            class="text-red-600 font-semibold text-sm m-0 ml-2"
          >
            <ul>
              <li v-for="(error, index) in errors.name" :key="index">
                {{ error }}
              </li>
            </ul>
          </div>
        </div>
        <div>
          <button
            class="bg-orange-500 text-lg text-white font-semibold my-2 px-6 py-2 rounded"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    email: '',
    name: '',
    errors: {
      email: ['Inválido', 'Requerido'],
      name: ['Requerido']
    }
  }),
  methods: {
    validateForm: () => true
  }
})
</script>

<style scoped>
.input-group {
  @apply flex;
  @apply flex-col;
  @apply my-2;
}
</style>

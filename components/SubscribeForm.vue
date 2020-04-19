<template>
  <div class="bg-gray-200 lg:pb-2">
    <div class="hidden lg:block">
      <img src="~/assets/img/subscription/landscape.jpg" />
    </div>
    <div
      class="flex flex-col lg:flex-row bg-blue-300 py-2 lg:py-5 px-8 mx-auto"
    >
      <div class="font-oswald lg:max-w-xs text-2xl text-white mx-6">
        No te pierdas NADA y mejora tus fotos desde
        <span class="text-orange-500">hoy</span>
      </div>
      <ValidationObserver v-slot="{ invalid }" ref="form" class="w-full">
        <form
          id="subscribe"
          action="/wp-json/gmt-mailchimp/v1/subscribi"
          method="get"
          class="flex-grow flex flex-col lg:flex-row"
          @submit.prevent="submitForm"
        >
          <div class="input-group lg:px-8 lg:flex-grow">
            <ValidationProvider
              v-slot="{ errors }"
              rules="email|required"
              name="email"
            >
              <input
                v-model="email"
                class="h-10 px-2 w-full rounded"
                :class="{
                  border: !!errors.length,
                  'border-red-500': !!errors.length,
                  shadow: !!errors.length
                }"
                type="text"
                placeholder="Tu EMAIL * - No te mandaremos SPAM"
              />
              <div
                v-if="errors"
                class="text-red-600 font-semibold text-sm m-0 ml-2"
              >
                {{ errors[0] }}
              </div>
            </ValidationProvider>
          </div>
          <div class="input-group lg:px-8 lg:flex-grow">
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
              name="nombre"
            >
              <input
                v-model="merge.FNAME"
                class="h-10 px-2 w-full rounded"
                :class="{
                  border: !!errors.length,
                  'border-red-500': !!errors.length,
                  shadow: !!errors.length
                }"
                type="text"
                placeholder="Tu nombre *"
              />
              <div
                v-if="errors"
                class="text-red-600 font-semibold text-sm m-0 ml-2"
              >
                {{ errors[0] }}
              </div>
            </ValidationProvider>
          </div>
          <div class="lg:px-8 flex-grow-0 lg:flex-basis-12">
            <ValidationProvider
              v-slot="{ errors }"
              :rules="{ required: { allowFalse: false } }"
            >
              <label class="block font-bold">
                <input
                  v-model="marketing['5f7ac9c171']"
                  class="mr-2 leading-tight"
                  type="checkbox"
                />
                <span class="text-sm">
                  Recibir emails comerciales *
                </span>
              </label>
              <div
                v-if="errors"
                class="text-red-600 font-semibold text-sm m-0 ml-2"
              >
                {{ errors[0] }}
              </div>
            </ValidationProvider>
          </div>
          <div class="text-center">
            <button
              class="bg-orange-500 text-lg text-white font-semibold my-2 px-6 py-2 rounded"
              :class="{ disabled: invalid }"
              type="submit"
              :disabled="invalid"
            >
              Enviar
            </button>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import '../validators/required'
import '../validators/email'

export default {
  name: 'SubscribeForm',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    email: '',
    merge: {
      FNAME: ''
    },
    marketing: {
      '5f7ac9c171': false
    }
  }),
  methods: {
    submitForm() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return
        }

        // Resetting Values
        this.merge.FNAME = this.email = ''
        this.marketing['5f7ac9c171'] = false

        // Wait until the models are updated in the UI
        this.$nextTick(() => {
          this.$refs.form.reset()
        })
      })
    }
  }
}
</script>

<style scoped>
.input-group {
  @apply flex;
  @apply flex-col;
  @apply my-2;
}

button.disabled {
  @apply opacity-50;
  @apply cursor-not-allowed;
}
</style>

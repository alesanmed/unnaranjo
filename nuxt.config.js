module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#ef7a25',
    continous: true
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/lazysizes.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://github.com/aceforth/nuxt-optimized-images
    '@aceforth/nuxt-optimized-images'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    host: 'unnaranjo.com',
    https: true,
    port: 443,
    prefix: '/wp-json'
  },

  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true,
    inlineImageLimit: -1,
    handleImages: ['jpeg', 'jpg', 'png', 'svg', 'webp', 'gif'],
    mozjpeg: {
      quality: 85
    },
    pngquant: {
      speed: 7,
      quality: [0.65, 0.8]
    },
    webp: {
      quality: 85
    }
  },

  render: {
    static: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, loaders: { vue } }) {
      vue.transformAssetUrls.img = ['data-src', 'src']
      vue.transformAssetUrls.source = ['data-srcset', 'srcset']
    }
  }
}

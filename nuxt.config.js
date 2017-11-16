module.exports = {
  /*
  ** Modules
  */
  modules: [
    '~/modules/bulma'
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'Cashback',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A cashback website for Vietnamese users.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    },
    vendor: ['vee-validate']
  },

  modules: [
    '@nuxtjs/bulma',
    '@nuxtjs/font-awesome'
  ],

  plugins: ['~/plugins/vee-validate']
}

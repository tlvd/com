const pkg = require('./package')

module.exports = {
  mode: 'spa',

  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Tel Aviv Digital',
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Web app brought to you by Tel Aviv Digital.' },
      { name: 'apple-mobile-web-app-title', content: 'tlvd.com' },
      { name: 'application-name', content: 'tlvd.com' },
      { property: 'og:title', content: 'tlvd.com'},
      { property: 'og:url', content: 'https://tlvd.com'},
      { property: 'og:image', content: 'https://tlvd.com/images/tlvd-poster-fbk.jpg'},
      { property: 'og:description', content: 'Tel Aviv Digital aka TLVD #tlvd #telavivdigital'},
      { name: 'twitter:card', content: 'summary_large_image'},
      { name: 'twitter:site', content: '@tlvd'},
      { name: 'twitter:title', content: 'tlvd.com'},
      { name: 'twitter:description', content: 'Tel Aviv Digital https://tlvd.com @tlvd #tlvd'},
      { name: 'twitter:image', content: 'https://tlvd.com/images/tlvd-poster-twt.jpg'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#222640' },
      { name: 'theme-color', content: '#222640' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#ff2626' },
      // { rel: 'preload', href: '/audio/fart-1.mp3', as: 'audio' }
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700|Roboto:100,300,400,500,700' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/pwa'
  ],
  styleResources: {
     // your settings here
    scss: [
      './assets/scss/main.scss'
    ],
  },

  /*
  ** Generate configuration
  */
  generate: {
    dir: 'docs'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

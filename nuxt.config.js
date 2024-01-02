import path from 'path'
import pkg from './package'
import blogs from './contents/blogs.js'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Monday's here",
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon/favicon-32x32.png',
        sizes: '32x32',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon/favicon-194x194.png',
        sizes: '194x194',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon/favicon-96x96.png',
        sizes: '96x96',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon/android-chrome-192x192.png',
        sizes: '192x192',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon/favicon-16x16.png',
        sizes: '16x16',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons',
      },
      {
        rel: 'stylesheet',
        href: 'https://github.githubassets.com/assets/gist-embed-c77408be8058.css'
      }
    ],
  },

  router: {
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-material', '~/plugins/prism.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  generate: {
    routes: [
      '/blog/cn',
      '/blog/en',
      ...blogs.cn.map((blog) => `/blog/cn/${blog.url}`),
      ...blogs.en.map((blog) => `/blog/en/${blog.url}`),
    ],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    // '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // extract CSS, mainly for plugins but also good for layouts and pages
    extractCSS: true,

    splitChunks: {
      layouts: false,
      pages: false, // by default true, will cause bad experience
      commons: true,
    },

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // add markdown loader
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
      })

      config.resolve.alias['~'] = path.resolve(__dirname)
    },
  },
}

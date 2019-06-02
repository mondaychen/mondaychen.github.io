import path from 'path'
import pkg from './package'
import enData from './contents/en/data.json'
import cnData from './contents/cn/data.json'
const blogs = {
  en: enData.posts,
  cn: cnData.posts
}

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: "Monday's here",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon/favicon-32x32.png',
        sizes: '32x32'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon/favicon-194x194.png',
        sizes: '194x194'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon/favicon-96x96.png',
        sizes: '96x96'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon/android-chrome-192x192.png',
        sizes: '192x192'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon/favicon-16x16.png',
        sizes: '16x16'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons'
      }
    ]
  },

  router: {
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link'
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
  plugins: ['~/plugins/vue-material', '~/plugins/prism.js'],

  /*
   ** Nuxt.js modules
   */
  modules: [],

  generate: {
    routes: [
      '/blog/cn',
      '/blog/en',
      ...blogs.cn.map(blog => `/blog/cn/${blog.title}`),
      ...blogs.en.map(blog => `/blog/en/${blog.title}`)
    ]
  },

  /*
   ** Build configuration
   */
  build: {
    // extract CSS, mainly for plugins but also good for layouts and pages
    extractCSS: true,

    splitChunks: {
      layouts: false,
      pages: false, // by default true, will cause bad experience
      commons: true
    },

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
      // add markdown loader
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader'
      })
      // config.resolve = config.module.resolve || {}
      // config.resolve.alias = config.module.resolve.alias || {}
      config.resolve.alias['~'] = path.resolve(__dirname)
    }
  }
}

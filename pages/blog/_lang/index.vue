<template>
  <section class="container">
    <div>
      <h1>{{ title }}</h1>
      <li v-for="post in posts" :key="post.title">
        <nuxt-link :to="`/blog/${lang}/${post.title}`">
          {{ post.title }}
        </nuxt-link>
      </li>
    </div>
  </section>
</template>

<script>
import enData from '~/contents/en/data.json'
import cnData from '~/contents/cn/data.json'

const blogs = {
  en: enData.posts,
  cn: cnData.posts
}

export default {
  name: 'BlogList',
  validate({ params }) {
    return (
      params.lang.toLowerCase() === 'cn' || params.lang.toLowerCase() === 'en'
    )
  },
  data() {
    const lang = this.$route.params.lang.toLowerCase()
    let title = 'Blog'
    if (lang === 'cn') {
      title = '不动如山'
    }
    return {
      lang,
      title,
      posts: blogs[lang]
    }
  }
}
</script>

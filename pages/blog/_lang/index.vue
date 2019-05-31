<template>
  <section class="container">
    <ul>
      <li v-for="post in posts" :key="post.title">
        <nuxt-link :to="`/blog/${lang}/${post.title}`">
          {{ post.title }}
        </nuxt-link>
      </li>
    </ul>
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
      params.lang &&
      (params.lang.toLowerCase() === 'cn' || params.lang.toLowerCase() === 'en')
    )
  },
  data() {
    const lang = this.$route.params.lang.toLowerCase()
    return {
      lang,
      posts: blogs[lang]
    }
  }
}
</script>

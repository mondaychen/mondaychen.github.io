<template>
  <section class="container">
    <div>
      <h1>{{ title }}</h1>
      <div v-html="md.html"></div>
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
    if (!params.lang || !params.article) {
      return false
    }
    const lang = params.lang.toLowerCase()
    const title = params.article
    return blogs[lang].some(blog => blog.title === title)
  },
  async asyncData({ params }) {
    const lang = params.lang.toLowerCase()
    const title = params.article

    const currentArticle = blogs[lang].find(blog => blog.title === title)

    const md = await import(`~/contents/${lang}/${currentArticle.file}`)

    return {
      md,
      ...currentArticle
    }
  }
}
</script>

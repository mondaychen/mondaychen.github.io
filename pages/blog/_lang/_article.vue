<template>
  <section class="container">
    <div>
      <h1>{{ title }}</h1>
      <div class="subhead">
        <date-time :time="time" />
        <span v-if="location">@ {{ location }}</span>
      </div>
      <div class="article-content" v-html="md.html"></div>
    </div>
  </section>
</template>

<script>
import DateTime from '~/components/DateTime'
import enData from '~/contents/en/data.json'
import cnData from '~/contents/cn/data.json'

const blogs = {
  en: enData.posts,
  cn: cnData.posts
}

export default {
  name: 'BlogList',
  components: { DateTime },
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
      title: currentArticle.title,
      time: currentArticle.time,
      location: currentArticle.location
    }
  },
  mounted() {
    this.$Prism.highlightAll()
  }
}
</script>

<style scoped>
h1 {
  font-size: 22px;
}
.subhead {
  opacity: 0.54;
  margin-top: 0.5em;
}
</style>

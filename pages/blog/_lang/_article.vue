<template>
  <section class="container">
    <div>
      <h1>
        {{ title }}
        <ul class="links">
          <li v-for="link in links" :key="link.url" class="link">
            [ <a :href="link.url" target="_blank">{{ link.name }}</a> ]
          </li>
        </ul>
      </h1>
      <div class="subhead">
        <date-time :time="time" />
        <span v-if="location">@ {{ location }}</span>
      </div>
      <div class="article-content" v-html="html"></div>
    </div>
  </section>
</template>

<script>
import DateTime from '~/components/DateTime'
import blogs from '~/contents/blogs'

export default {
  name: 'BlogList',
  components: { DateTime },
  validate({ params }) {
    if (!params.lang || !params.article) {
      return false
    }
    const lang = params.lang.toLowerCase()
    const url = params.article
    return blogs[lang].some(blog => blog.url === url)
  },
  async asyncData({ params }) {
    const lang = params.lang.toLowerCase()
    const url = params.article

    const currentArticle = blogs[lang].find(blog => blog.url === url)

    const md = await import(`~/contents/${currentArticle.file}`)

    return {
      html: md.html,
      title: md.attributes.subject,
      time: md.attributes.time,
      location: md.attributes.location,
      links: currentArticle.links || []
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
  margin-top: 1.5em;
}
.links {
  display: inline-block;
  list-style-type: none;
  padding-left: 10px;
  margin: 0;
}
.links .link {
  display: inline;
  margin: 0 0.25em;
  font-size: 12px;
  font-weight: 300;
}
.subhead {
  opacity: 0.54;
  margin-top: 0.5em;
}
</style>

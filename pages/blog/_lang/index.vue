<template>
  <section class="container">
    <ul class="blog-list">
      <li v-for="post in posts" :key="post.title">
        <nuxt-link class="title" :to="`/blog/${lang}/${post.title}`">
          {{ post.title }}
        </nuxt-link>
        <div class="subhead">
          <date-time :time="post.time" />
          <span v-if="post.location">@ {{ post.location }}</span>
        </div>
      </li>
    </ul>
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

<style lang="scss" scoped>
@import '~/plugins/theme-variables.scss';

.blog-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  li {
    margin: 2em 0;
  }
  .title {
    font-size: 22px;
    line-height: 1.5em;
    &:hover {
      text-decoration: underline dotted $accent;
    }
  }
  .subhead {
    opacity: 0.54;
    margin-top: 0.5em;
  }
}
</style>

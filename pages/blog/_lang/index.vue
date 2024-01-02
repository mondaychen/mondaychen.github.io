<template>
  <section class="container">
    <ul class="blog-list">
      <li v-for="post in posts" :key="post.title">
        <nuxt-link class="title" :to="post.link">
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
import blogs from '~/contents/blogs'

export default {
  name: 'BlogList',
  components: { DateTime },
  validate({ params }) {
    return (
      params.lang &&
      (params.lang.toLowerCase() === 'cn' || params.lang.toLowerCase() === 'en')
    )
  },
  asyncData({ params }) {
    const lang = params.lang.toLowerCase()
    async function asyncImport(blog) {
      if (!blog.file) {
        return {
          title: blog.url,
          time: blog.time,
          link: `/blog/${lang}/${blog.url}`,
        }
      }
      const md = await import(`~/contents/${blog.file}`)
      return {
        title: md.attributes.subject,
        time: md.attributes.time,
        link: `/blog/${lang}/${blog.url}`,
      }
    }

    return Promise.all(blogs[lang].map((blog) => asyncImport(blog))).then(
      (res) => {
        return {
          posts: res,
        }
      }
    )
  },
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

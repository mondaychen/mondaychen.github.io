<template>
  <div class="page-container md-layout-column">
    <md-app id="app">
      <md-app-toolbar class="md-primary title-bar">
        <md-button
          class="md-icon-button menu-button"
          @click="showNavigation = true"
        >
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">{{ title }}</span>
        <div class="md-toolbar-section-end slogon">Don't you love Monday</div>
      </md-app-toolbar>

      <md-app-drawer
        class="drawer"
        md-permanent="full"
        :md-active.sync="showNavigation"
        md-swipeable
      >
        <md-toolbar class="logo-wrapper md-transparent" md-elevation="0">
          <site-logo />
        </md-toolbar>

        <md-list>
          <md-list-item to="/">
            <span class="md-list-item-text">About me</span>
          </md-list-item>

          <md-list-item class="blog-list" to="/blog/en">
            <span class="md-list-item-text">blog/en</span>
          </md-list-item>

          <md-list-item class="blog-list" to="/blog/cn">
            <span class="md-list-item-text">blog/cn</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content class="app-content">
        <nuxt class="page-container" />
        <footer id="footer">
          <div class="copyright">
            Developed &amp; Designed by Mengdi Chen. All rights reserved.<br />Inspired
            by&nbsp;<a
              href="https://www.google.com/design/spec/material-design/introduction.html"
              target="_blank"
              >Material design</a
            >.<br />All articles are licensed by&nbsp;<a
              href="http://creativecommons.org/licenses/by/3.0/"
              target="_blank"
              title="Creative Commons BY 3.0"
              >CC BY 3.0</a
            >
          </div>
          <div class="credit">
            Icons made by&nbsp;<a
              href="http://www.flaticon.com/authors/dave-gandy"
              target="_blank"
              title="Dave Gandy"
              >Dave Gandy</a
            >,&nbsp;<a
              href="http://www.flaticon.com/authors/freepik"
              target="_blank"
              title="Freepik"
              >Freepik</a
            >&nbsp;from&nbsp;<a
              href="http://www.flaticon.com"
              target="_blank"
              title="Flaticon"
              >www.flaticon.com</a
            >&nbsp;is licensed by&nbsp;<a
              href="http://creativecommons.org/licenses/by/3.0/"
              target="_blank"
              title="Creative Commons BY 3.0"
              >CC BY 3.0</a
            >
          </div>
        </footer>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import SiteLogo from '~/components/SiteLogo'

export default {
  name: 'DefaultLayout',
  components: { SiteLogo },
  data: () => ({
    showNavigation: false,
    title: 'About me',
  }),
  watch: {
    $route(to) {
      this.updateTitle(to)
    },
  },
  created() {
    this.updateTitle(this.$route)
  },
  methods: {
    updateTitle(matchedRoute) {
      if (matchedRoute.name === 'index') {
        this.title = 'About me'
      } else if (matchedRoute.params.lang === 'cn') {
        this.title = '不动如山'
      } else if (matchedRoute.params.lang === 'en') {
        this.title = "Mengdi's Blog"
      }
    },
  },
}
</script>

<style>
#app {
  min-height: 100vh;
}
@font-face {
  font-family: 'Flaticon';
  src: url('/font/flaticon.eot');
  src: url('/font/flaticon.eot#iefix') format('embedded-opentype'),
    url('/font/flaticon.woff') format('woff'),
    url('/font/flaticon.ttf') format('truetype'),
    url('/font/flaticon.svg') format('svg');
  font-weight: normal;
  font-style: normal;
}
.flaticon {
  font-family: Flaticon;
  font-size: 24px;
  font-style: normal;
}
.flaticon-douban:before {
  content: '\e000';
}
.flaticon-facebook:before {
  content: '\e001';
}
.flaticon-github:before {
  content: '\e002';
}
.flaticon-linkedin:before {
  content: '\e003';
}
.flaticon-twitter:before {
  content: '\e004';
}
.flaticon-weibo:before {
  content: '\e005';
}
</style>

<style scoped>
.logo-wrapper {
  padding: 0;
}
.slogon {
  opacity: 0.75;
}
.drawer {
  width: 280px;
}
.drawer .md-list-item-text {
  text-align: center;
  display: inline-block;
}
.drawer .md-list .exact-active-link,
.drawer .md-list .blog-list .active-link {
  background-color: #eee;
}
.app-content {
  padding: 10px;
}
.page-container {
  min-height: 60vh;
}
footer {
  margin-top: 3em;
  font-weight: 300;
  color: #666;
}
footer .credit {
  font-size: 0.8em;
}

@media (min-width: 600px) {
  .title-bar {
    height: 120px;
  }
  .title-bar .md-title {
    font-size: 32px;
    line-height: 1.2em;
  }
  .menu-button {
    display: none;
  }
  .app-content {
    padding: 10px 20px 20px 40px;
  }
}
</style>

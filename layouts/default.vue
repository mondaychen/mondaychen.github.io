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
        <span class="md-title">My Title</span>
        <div class="md-toolbar-section-end slogon">
          Don't you love Monday
        </div>
      </md-app-toolbar>

      <md-app-drawer
        class="drawer"
        md-permanent="full"
        :md-active.sync="showNavigation"
        md-swipeable
      >
        <md-toolbar class="md-transparent" md-elevation="0">
          <logo />
        </md-toolbar>

        <md-list>
          <md-list-item to="/">
            <span class="md-list-item-text">About me</span>
          </md-list-item>

          <md-list-item to="/blog/en">
            <span class="md-list-item-text">blog/en</span>
          </md-list-item>

          <md-list-item to="/blog/cn">
            <span class="md-list-item-text">blog/cn</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content class="content-container">
        <nuxt />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  name: 'DefaultLayout',
  components: { Logo },
  data: () => ({
    showNavigation: false
  })
}
</script>

<style scoped>
#app {
  min-height: 100vh;
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
.drawer .exact-active-link {
  background-color: #eee;
}
.content-container {
  padding: 10px;
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
  .content-container {
    padding: 10px 20px 20px 40px;
  }
}
</style>

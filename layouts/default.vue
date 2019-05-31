<template>
  <div class="page-container md-layout-column">
    <md-app>
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
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <nuxt />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  components: { Logo },
  name: 'DefaultLayout',
  data: () => ({
    showNavigation: false
  })
}
</script>

<style scoped>
.title-bar {
  height: 120px;
}
.title-bar .md-title {
  font-size: 32px;
  line-height: 1.2em;
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
@media (min-width: 600px) {
  .menu-button {
    display: none;
  }
}
</style>

<template>
  <div class="page-container md-layout-column">
    <md-app>
      <md-app-toolbar class="md-primary">
        <md-button
          class="md-icon-button menu-button"
          @click="showNavigation = true"
        >
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">My Title</span>
        <div class="md-toolbar-section-end">
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
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
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

<style>
html {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>

<style scoped>
.drawer {
  width: 280px;
}
@media (min-width: 600px) {
  .menu-button {
    display: none;
  }
}
</style>

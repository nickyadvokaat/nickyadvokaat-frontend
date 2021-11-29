<template>
  <v-app :theme="theme">
    <navigation-bar :theme="theme" @toggle-theme="toggleTheme"/>
    <v-main class="main">
      <v-container style="max-width: 700px">
        <top-header/>
        <about-me/>
        <contact-me/>
        <bottom-footer/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import AboutMe from '@/components/AboutMe'
import BottomFooter from '@/components/BottomFooter'
import ContactMe from '@/components/ContactMe.vue'
import NavigationBar from '@/components/NavigationBar'
import TopHeader from '@/components/TopHeader.vue'

export default {
  name: 'App',

  components: {
    AboutMe,
    BottomFooter,
    ContactMe,
    TopHeader,
    NavigationBar
  },

  data: () => ({
    theme: 'dark'
  }),

  methods: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin-top: 90px;
}
</style>
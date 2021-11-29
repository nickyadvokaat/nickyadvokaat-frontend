<template>
  <div class="nav-bar">
    <div class="nav-logo-container">
      <img
          :src=" this.theme === 'dark' ? require('@/assets/images/banner_dark.png') : require('@/assets/images/banner_light.png')"
          alt="Logo"
          class="ma-5 hidden-xs"
          width="150">
    </div>
    <div class="nav-button-container">
      <h3><a v-smooth-scroll="{offset: -120}" class="text-primary app-bar-link pr-4" href="#home">.home()</a></h3>
      <h3><a v-smooth-scroll="{offset: -120}" class="text-primary app-bar-link pr-4" href="#about">.about()</a></h3>
      <h3><a v-smooth-scroll="{offset: -120}" class="text-primary app-bar-link pr-4" href="#contact">.contact()</a></h3>
      <v-btn class="mr-4" color="primary" icon="mdi-brightness-6" size="x-small"
             @click="this.$emit('toggle-theme')"></v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  props: [
    'theme'
  ]
}
</script>

<style lang="scss" scoped>
.nav-bar {
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  border-bottom: 1px solid rgba(100, 100, 100, 0.2);
  z-index: 1;
  backdrop-filter: blur(2px);

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.app-bar-link {
  text-decoration: none;
}
</style>
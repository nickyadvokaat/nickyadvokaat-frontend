<template>
  <div class="text-center">
    <h2 id="contact" class="mb-5">
      Contact
    </h2>
    I am currently: <span class="text-primary">Open to work</span>. <br> Please feel free to get in touch:
    <div class="mt-5 mb-5">
      <a class="social-icon" href="https://www.linkedin.com/in/nickyadvokaat/" target="_blank">
        <v-icon color="primary" icon="mdi-linkedin" size="x-large"></v-icon>
      </a>
      <a class="social-icon" href="tel:+31683780062" target="_blank">
        <v-icon color="primary" icon="mdi-phone" size="x-large"></v-icon>
      </a>
      <a class="social-icon" href="mailto:recruiters@nickyadvokaat.nl" target="_blank">
        <v-icon color="primary" icon="mdi-email" size="x-large"></v-icon>
      </a>
      <a class="social-icon" href="https://github.com/nickyadvokaat" target="_blank">
        <v-icon color="primary" icon="mdi-github" size="x-large"></v-icon>
      </a>
    </div>
    Let's connect!
  </div>
</template>

<script>
export default {
  name: "ContactMe"
}
</script>

<style scoped>
h2 {
  margin-top: 100px;
}

.social-icon {
  text-decoration: none;
  padding: 8px;
}
</style>
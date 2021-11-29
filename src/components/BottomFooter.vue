<template>
  <div class="footer">
    <img :src="require('@/assets/images/logo.png')" alt="Logo" width="75">
    <span class="mt-5">KVK-nummer 84505184</span>
    <span class="mt-5">© Nicky Advokaat</span>
  </div>
</template>

<script>
export default {
  name: "BottomFooter"
}
</script>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 220px;
  margin-top: 50px;
  border-top: 1px solid rgba(100, 100, 100, 0.2);
  padding-top: 20px;
}
</style>
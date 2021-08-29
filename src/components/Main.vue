<template>
<div class="main">
  <div class="container">
    <div class="cont__text">
      <h3>Артем Швалев</h3>
    </div>
    <div class="container__text-frontend">
      <h3>Frontend Developer</h3>
    </div>
    <router-link to="/Works">
      Мои работы
    </router-link>
  </div>
</div>
</template>

<script>

export default {
  name: 'Main',
  data() {
    return {
    };
  },
};
</script>

<style scoped  lang=scss>
@import '../assets/sass/main';
</style>

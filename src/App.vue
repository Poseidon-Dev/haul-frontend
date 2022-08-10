<template>
  <notifications position="top center" width="500px" />
  <sidebar></sidebar>
  <section id="main">
    <the-header></the-header>
    <router-view></router-view>
  </section>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
export default {
  components: { TheHeader },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.ag-theme-material {
  --ag-material-accent-color: #ca1616;
}

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

#main {
  margin-left: 270px;
  margin-right: 20px;
}

.ag-row-selected,
.ag-row-focus {
  background-color: #fbdada;
}
</style>

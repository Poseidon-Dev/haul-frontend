<template>
  <router-link :to="to" :class="mode"><slot></slot></router-link>
</template>

<script>
export default {
  props: {
    to: { type: String, required: false, default: '/' },
    mode: { type: String, required: false, default: null },
  },
};
</script>

<style scoped>
a,
.filled:hover {
  background-color: white;
  border: 1px solid #ef5b5b;
  color: black;
  width: 100%;
}

a {
  display: inline-block;
  text-align: center;
  text-decoration: none;
  border-radius: 0.25rem;
  cursor: pointer;
  border: 1px solid #ef5b5b;
  padding: 0.35rem 0.75rem;
  width: 100%;
}

a:hover,
.filled,
a.router-link-active {
  background-color: #ef5b5b;
  color: white;
  border: 1px solid white;
}
.green {
  background-color: white;
  color: #4bb542;
  border: 1px solid #4bb542;
}
.green:hover {
  background-color: #4bb542;
  color: white;
  border: 1px solid #4bb542;
}
</style>

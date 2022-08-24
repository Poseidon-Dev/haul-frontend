<template>
  <router-link :to="to" :class="mode"><slot></slot></router-link>
</template>

<script>
export default {
  props: {
    to: { type: String, required: false, default: '#' },
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
  border: 1px solid #ed4545;
  padding: 0.35rem 0.75rem;
  width: 100%;
}

a:hover,
.filled,
a.router-link-active {
  background-color: #24bcbc;
  background-color: #ed4545;
  color: white;
  border: 1px solid white;
}
.green {
  background-color: white;
  color: #3a413a;
  border: 1px solid #3a413a;
}
.green:hover {
  background-color: #3a413a;
  color: white;
  border: 1px solid #3a413a;
}
</style>

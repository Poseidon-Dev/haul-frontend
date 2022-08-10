<template>
  <li>
    <h3>{{ description }}</h3>
    <h4>{{ division }}</h4>
    <h4>{{ id }}</h4>
    <button>Transfer</button>
  </li>
</template>

<script>
export default {
  props: ['id', 'description', 'division', 'division_id'],
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>

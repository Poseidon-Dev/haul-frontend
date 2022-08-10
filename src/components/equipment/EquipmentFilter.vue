<template>
  <div>
    <h2>Filter Equipment</h2>
    <span class="'filter-option'">
      <input type="checkbox" id="tucson" checked @change="setFilter" />
      <label for="tucson">Tucson</label>
    </span>
    <span class="'filter-option'">
      <input type="checkbox" id="phoenix" checked @change="setFilter" />
      <label for="phoenix">Phoenix</label>
    </span>
    <span class="'filter-option'">
      <input type="checkbox" id="hesperia" checked @change="setFilter" />
      <label for="hesperia">Hesperia</label>
    </span>
  </div>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        tucson: true,
        phoenix: true,
        hesperia: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>

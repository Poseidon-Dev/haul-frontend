<template>
  <section class="equip-header">
    <div>
      <h2 class="title">Equipment</h2>
    </div>
    <div class="equip-buttons">
      <ul>
        <!-- <li><base-button>Reset</base-button></li> -->
        <li v-if="currentPath == '/equipment'">
          <base-button @click="fetchAllEquipments" mode="green"
            >Refresh</base-button
          >
        </li>
        <li v-if="currentPath == '/equipment'">
          <base-button mode="filled" @click="sendToTransfers">Add</base-button>
        </li>
        <li v-if="currentPath == '/transfers'">
          <base-button mode="filled" @click="removeFromTransfers"
            >Remove</base-button
          >
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    sendToTransfers() {
      const currentQueue = this.$store.getters['queues/queueIn'];
      for (let queueIndex in currentQueue) {
        var item = currentQueue[queueIndex];
        console.log(item);
        this.$store.dispatch('queues/removeFromQueueIn', item);
        this.$store.dispatch('equipment/removeFromEquipment', item);
        this.$store.dispatch('transfers/addToTransfers', item);
        this.$notify({
          type: 'success',
          title: 'Sent to Transfer Queue',
          text: item.equipment_id + ': ' + item.description,
        });
      }
    },
    removeFromTransfers() {
      const currentQueue = this.$store.getters['queues/queueOut'];
      for (let queueIndex in currentQueue) {
        var item = currentQueue[queueIndex];
        this.$store.dispatch('queues/removeFromQueueOut', item);
        this.$store.dispatch('equipment/addToEquipment', item);
        this.$store.dispatch('transfers/removeFromTransfers', item);
        this.$notify({
          type: 'error',
          title: 'Removed from Transfer Queue',
          text: item.equipment_id + ': ' + item.description,
        });
      }
    },
    fetchAllEquipments() {
      this.$store.dispatch('equipment/fetchAllEquipments');
    },
  },
  computed: {
    currentPath() {
      return this.$route.path;
    },
  },
};
</script>

<style scoped>
h1 {
  margin: 0;
}

h1 a {
  color: #f4fcf0;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

li {
  margin: 0 0.5rem;
}

.equip-header {
  display: flex;
  height: 5rem;
  margin-left: 50px;
  flex-direction: row;
  justify-content: space-between;
}
.equip-buttons ul {
  margin-right: 50px;
  display: flex;
  flex-direction: row;
}
.equip-buttons li {
  margin: 0.3rem 0;
  padding: 0.75rem;
  width: 130px;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: end;
}
</style>

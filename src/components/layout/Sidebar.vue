<template>
  <div class="sidebar">
    <h1 class="title">APC Haul</h1>
    <sidebar-item to="/equipments">
      <div>Dashboard</div>
      <div><font-awesome-icon icon="fa-solid fa-gauge-simple-high" /></div>
    </sidebar-item>
    <br />
    <sidebar-item to="/equipment">
      <div>Equipment</div>
      <div><font-awesome-icon icon="fa-solid fa-toolbox" /></div>
    </sidebar-item>
    <sidebar-item to="/transfers">
      <div>Transfers</div>
      <div><font-awesome-icon icon="fa-solid fa-arrow-right-arrow-left" /></div>
    </sidebar-item>
    <sidebar-item to="/messages">
      <div>Scheduled</div>
      <div><font-awesome-icon icon="fa-solid fa-calendar-check" /></div>
    </sidebar-item>
    <sidebar-item to="/messages">
      <div>History</div>
      <div><font-awesome-icon icon="fa-solid fa-clock-rotate-left" /></div>
    </sidebar-item>
    <!-- <span class="collapse-icon" @click="toggleSidebar">Profile</span>
    <span class="collapse-icon" @click="toggleSidebar">Settings</span>
    <span class="collapse-icon" @click="toggleSidebar">Colla</span> -->
  </div>
</template>

<script>
import SidebarItem from './SidebarItem.vue';
export default {
  components: {
    SidebarItem,
  },
  methods: {
    toggleSidebar() {
      console.log('Collapsing');
    },
  },
};
</script>

<style scoped>
.sidebar {
  color: white;
  background-color: #303630;
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  transition: 0.3s ease;
  width: 250px;
}
.sidebar h1 {
  height: 2.5em;
}
.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75rem;
  color: black;
}
.title {
  width: 100%;
  display: flex;
  justify-content: left;
  margin: 0.5rem 1rem;
}
a.router-link-active {
  background-color: #24bcbc;
  background-color: #ed4545;
  color: white;
  border: none;
}
</style>

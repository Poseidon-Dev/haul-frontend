<template>
  <router-link :to="to" class="link">
    <transition name="fade">
      <div class="item"><slot></slot></div
    ></transition>
  </router-link>
</template>

<script>
export default {
  props: {
    to: { type: String, required: true },
  },
};
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: row;
  align-content: space-between;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem 0.75rem;
}
.fade-enter-active,
.face-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.link {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  font-weight: 400;
  user-select: none;

  margin: 0.4rem 0;
  padding: 0.6rem;
  border-radius: 0.25rem;
  height: 2.5rem;

  color: white;
  text-decoration: none;
}
.link:hover {
  background-color: #ed4545;
}
.link .icon {
  flex-shrink: 0;
  width: 25px;
  margin-right: 10px;
}
</style>

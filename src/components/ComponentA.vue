<template>
  <div>
    <h2>{{ info.title }}</h2>
    <button @click="toggleInfo">Toggle Info</button>
    <p>Master Data: {{ masterData }}</p>
    <slot></slot> <!-- Slot for additional content -->
  </div>
</template>

<script>
export default {
  props: {
    info: Object,
    masterData: String,
  },
  methods: {
    toggleInfo() {
      this.$emit('changeInfo', this.info.id);
    },
  },
};
</script>

<style scoped>
/* Your style adjustments here */
</style>

<template>
  <div class="about-container">
    <p>{{ aboutContent }}</p>
    <button @click="displayMoreInfo">Display More Information</button>
    <div v-if="showMoreInfo">
      <p>{{ additionalInfo }}</p>
      <button @click="hideInfo">Hide Information</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aboutContent: 'This is the About Page content.',
      additionalInfo: 'Here is some more information about our website...',
      showMoreInfo: false,
    };
  },
  methods: {
    displayMoreInfo() {
      this.showMoreInfo = true;
    },
    hideInfo() {
      this.showMoreInfo = false;
    },
  },
};
</script>

<style scoped>
.about-container {
  padding: 20px;
  background-color: #e0f7fa;
  border: 1px solid #00838f;
  border-radius: 10px;
  max-width: 600px;
  margin: auto;
  text-align: center;
}

.about-container button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #00838f;
  color: white;
  cursor: pointer;
  margin-top: 10px;
}

.about-container button:hover {
  background-color: #004d40;
}
</style>

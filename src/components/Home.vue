<template>
  <div class="home-container">
    <p>{{ welcomeMessage }}</p>
    <button @click="updateMessage">Update Welcome Message</button>
    <p>Current Time: {{ formattedTime }}</p>
    <input v-model="newMessage" placeholder="Type a new welcome message" />
    <button @click="changeMessage">Change Welcome Message</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      welcomeMessage: 'Welcome to the Home Page.',
      newMessage: '',
      currentTime: new Date(),
    };
  },
  computed: {
    formattedTime() {
      return this.currentTime.toLocaleTimeString();
    },
  },
  methods: {
    updateMessage() {
      this.welcomeMessage = 'You have just clicked the button!';
    },
    changeMessage() {
      if (this.newMessage) {
        this.welcomeMessage = this.newMessage;
        this.newMessage = '';  // Clear the input field
      }
    },
  },
  mounted() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);  // Update the current time every second
  },
};
</script>

<style scoped>
.home-container {
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  max-width: 400px;
  margin: auto;
  text-align: center;
}

.home-container input {
  width: 80%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ddd;
}

.home-container button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #008CBA;
  color: white;
  cursor: pointer;
}

.home-container button:hover {
  background-color: #005f5f;
}
</style>

<template>
  <div id="main-container">
    <!-- Navigation Items -->
    <nav-item route="/">Home</nav-item>
    <nav-item route="/info">Info</nav-item>

    <!-- Include the ExampleComponent -->
    <ExampleComponent />

    <!-- Add the input field with 'v-model' modifiers -->
    <input type="text" id="user-input" v-model.trim="userInput" />

    <!-- Add content for AlternateOption -->
    <div v-if="chosenOption === 'AlternateOption'">
      <!-- content for AlternateOption goes here -->
      <p>This is content for AlternateOption.</p>
    </div>
    
    <!-- Use router-view to display routed components -->
    <router-view></router-view>
  </div>
</template>

<script>
import ExampleComponent from './components/ExampleComponent.vue';

export default {
  name: 'App',
  components: {
    ExampleComponent,
    navItem: {
      props: ['route'],
      template: '<router-link :to="route"><slot></slot></router-link>'
    }
  },
  data() {
    return {
      userInput: '', // This is where I can store the input value
      chosenOption: 'DefaultOption', // Default option
    };
  },
};
</script>

<style scoped>
#main-container {
  font-family: Roboto, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: left;
  color: #333;
  padding-top: 40px;
}
</style>

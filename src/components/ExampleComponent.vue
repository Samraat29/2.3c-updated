<template>
  <div class="main-box">
    <h1>Template Syntax</h1>
    <section>
      <h2 class="heading">{{ titleText }}</h2>
      <div v-html="unfilteredHtml"></div>
      <div :id="uniqueId"></div>
      <p>{{ 4 + 4 }}</p>
    </section>

    <h1>Methods</h1>
    <section class="button-zone">
      <button class="action-button" @click="greet">Greet</button>
      <button class="action-button" @click="handleClick">Handle Click</button>
    </section>

    <h1>Reactivity Fundamentals</h1>
    <h2 class="heading">Reactivity Basics</h2>
    <p>{{ reactiveCounter }}</p>

    <h1>Computed Properties</h1>
    <h2 class="heading">Computed Items</h2>
    <p>{{ computedTotal }}</p>

    <h1>Class and Style Bindings</h1>
    <h2 class="heading">Class and Style Associations</h2>
    <div :class="classInfo"></div>
    <div :style="styleInfo"></div>

    <h1>List Rendering</h1>
    <h2 class="heading">List Display</h2>
    <ul>
      <li v-for="(entity, idx) in entities" :key="idx">{{ entity.label }}</li>
      <li v-for="num in 6" :key="num">{{ num }}</li>
      <template v-for="(entity, idx) in entities" :key="idx">
        <li>{{ entity.label }}</li>
        <li v-if="entity.showExtra">Show Extra</li>
      </template>
      <ComponentA
        v-for="(entity, idx) in entities"
        :key="idx"
        :info="entity"
        @toggleExtra="toggleExtra"
        :parentData="parentData"
      />
    </ul>

    <!-- 7. Event Handling -->
    <h2 class="heading">Event Management</h2>
    <button class="action-button" @click="inlineHandler">Inline Handler</button>

    <!-- 8. Form Input Bindings -->
    <h2 class="heading">Form Input Associations</h2>
    <section class="form-zone">
      <input type="text" v-model.trim="nameInput" placeholder="Type your name" />
      <input type="checkbox" v-model="checkboxStatus" />
      <input type="radio" v-model="radioSelection" value="choice1" />
      <select v-model="selectedChoice">
        <option value="choice1">Choice 1</option>
        <option value="choice2">Choice 2</option>
      </select>
      <textarea v-model.trim="messageInput" placeholder="Type your message"></textarea>
    </section>

    <h1>Watchers</h1>
    <h2 class="heading">Observers</h2>
    <p>{{ observedItem }}</p>

    <h1>Components</h1>
    <h2 class="heading">Components</h2>
    <ComponentA :info="entities[0]" :parentData="parentData" @toggleExtra="toggleExtra" />

    <h1>Form Input Bindings with v-model modifiers</h1>
    <h2 class="heading">Form Input Bindings with Modifiers</h2>
    <section class="form-zone">
      <input type="text" v-model.trim="trimInput" placeholder="Trimmed Input" />
      <input type="text" v-model.lazy="lazyEntry" placeholder="Lazy Entry" />
      <input type="number" v-model.number="numberEntry" placeholder="Number Entry" />
    </section>

    <h1>Success message </h1>
    <section v-if="showConfirmation" class="confirmation-message">
      <p>Form has been submitted successfully!</p>
    </section>
  </div>
</template>

<script>
import ComponentA from './ComponentA.vue';
import { ref, computed } from 'vue';

export default {
  data() {
    return {
      titleText: "Hi, Vue!",
      unfilteredHtml: "<span>Unfiltered HTML</span>",
      uniqueId: "uniqueDiv",
      reactiveCounter: ref(0),
      entities: [
        { id: 1, label: "Entity 1", showExtra: true },
        { id: 2, label: "Entity 2", showExtra: false },
      ],
      computedTotal: computed(() => this.entities.length),
      classInfo: { isActive: true, "text-highlight": true },
      styleInfo: { color: "blue", fontSize: "18px" },
      nameInput: "",
      checkboxStatus: false,
      radioSelection: "",
      selectedChoice: "choice1",
      messageInput: "",
      observedItem: "",
      parentData: "Parent Data",
      trimInput: '',
      lazyEntry: '',
      numberEntry: null,
      showConfirmation: false,
    };
  },
  methods: {
    greet() {
      alert("Greetings from Vue!");
    },
    inlineHandler() {
      alert("Inline handler triggered");
    },
    handleClick() {
      alert("Handle click triggered");
    },
    toggleExtra(entityId) {
      this.entities = this.entities.map(entity => {
        if (entity.id === entityId) {
          entity.showExtra = !entity.showExtra;
        }
        return entity;
      });
    },
  },
  components: {
    ComponentA,
  },
};
</script>

<style scoped>
/* Adjusted styling here */

.main-box {
  max-width: 900px;
  margin: 0 auto;
  padding: 30px;
  background-color: #ececec;
  border: 2px solid #aaa;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.heading {
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 30px;
}

.button-zone {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.action-button {
  padding: 12px 24px;
  background-color: #008cff;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.action-button:hover {
  background-color: #0061a3;
}

.form-zone {
  margin-top: 30px;
}

.confirmation-message {
  margin-top: 30px;
  padding: 15px;
  background-color: #d1ffd1;
  border: 2px solid #28a745;
  border-radius: 6px;
  color: #28a745;
}
</style>

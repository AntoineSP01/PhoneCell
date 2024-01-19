<template>
  <div id="app">
    <input v-model="phoneNumber" placeholder="Numéro de téléphone">
    <keyboard-component @updatePhoneNumber="updatePhoneNumber" :addCallToHistory="addCallToHistory" />
  </div>
</template>

<script>
import KeyboardComponent from '@/components/KeyboardComponent.vue';

export default {
  components: {
    KeyboardComponent,
  },
  data() {
    return {
      phoneNumber: '',
    };
  },
  methods: {
    updatePhoneNumber(value) {
      this.phoneNumber = value;
    },
    addCallToHistory(phoneNumber) {
      console.log(`Ajouter à l'historique : ${phoneNumber}`);
    },
  },
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 50px;
}

input {
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
}

.keyboard button {
  padding: 10px;
  font-size: 16px;
  margin: 5px;
}
</style>

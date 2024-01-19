<script>
export default {
  name: 'KeyboardComponent',
  data() {
    return {
      phoneNumber: '', // Initialisez phoneNumber comme une chaîne vide
    };
  },
  methods: {
    addToPhoneNumber(number) {
      this.phoneNumber += number;
      this.$emit('updatePhoneNumber', this.phoneNumber);
    },
    submitForm() {
      this.$store.dispatch('addCallToHistory', this.phoneNumber);
      this.phoneNumber = '';
    },
  },
};
</script>


<template>
  <div>
    <form @submit.prevent="submitForm()">
      <div class="keyboard">
        <button @click="addToPhoneNumber(1)">1</button>
        <button @click="addToPhoneNumber(2)">2</button>
        <button @click="addToPhoneNumber(3)">3</button>
        <button @click="addToPhoneNumber(4)">4</button>
        <button @click="addToPhoneNumber(5)">5</button>
        <button @click="addToPhoneNumber(6)">6</button>
        <button @click="addToPhoneNumber(7)">7</button>
        <button @click="addToPhoneNumber(8)">8</button>
        <button @click="addToPhoneNumber(9)">9</button>
        <button @click="addToPhoneNumber(0)">0</button>
      </div>
      <input type="submit" value="Appeler">
    </form>
  </div>
</template>

<style scoped>
</style>

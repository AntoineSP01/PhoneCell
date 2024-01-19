<!-- components/ContactForm.vue -->
<script>
import { ref } from 'vue';
import { useStore } from '@/stores/telephone.js';

export default {
  setup() {
    const store = useStore();
    const newContact = ref({ name: '', phone: '' });

    const addContact = () => {
      store.addContact({ ...newContact.value, id: store.contacts.length + 1 });
      newContact.value = { name: '', phone: '' };
    };

    return { newContact, addContact };
  },
};
</script>

<template>
  <div>
    <h2>Formulaire d'Ajout de Contact</h2>
    <form @submit.prevent="addContact">
      <label for="name">Nom:</label>
      <input type="text" id="name" v-model="newContact.name" required>

      <label for="phone">Numéro de Téléphone:</label>
      <input type="text" id="phone" v-model="newContact.phone" required>

      <button type="submit">Ajouter Contact</button>
    </form>
  </div>
</template>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    
  }
  
  label {
    margin-bottom: 5px;
  }
  
  input {
    margin-bottom: 10px;
    padding: 5px;
  }
</style>

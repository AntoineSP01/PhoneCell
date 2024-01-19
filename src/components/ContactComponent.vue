<!-- components/ContactList.vue -->
<template>
  <div>
    <h2>Liste des Contacts</h2>
    <ul>
      <li v-for="contact in contacts" :key="contact.id">
        {{ contact.name }} - {{ contact.phone }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useStore } from '@/stores/telephone.js';

export default {
  setup() {
    const store = useStore();
    const contacts = ref([]);

    onMounted(() => {
      contacts.value = store.contacts;
    });

    return { contacts };
  },
};
</script>

<style scoped>
/* Styles si nécessaire */
</style>

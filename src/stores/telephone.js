// stores/telephone.js
import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    contacts: [],
  }),
  actions: {
    addContact(contact) {
      this.contacts.push(contact);
    },
  },
})

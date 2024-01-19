<script>
import ContactComponent from '@/components/ContactComponent.vue';
import { useStore } from '@/stores/telephone.js';
import { ref } from 'vue';

export default {
  components: {
    ContactComponent,
  },
  setup() {
    const store = useStore();

    const selectedContact = ref(null);

    const showContactDetails = (contact) => {
      selectedContact.value = contact;
    };

    const callContact = () => {
      if (selectedContact.value) {
        console.log(`Appel de ${selectedContact.value.name} au ${selectedContact.value.phone}`);
      }
    };

    return { selectedContact, showContactDetails, callContact, contacts: store.contacts };
  },
  methods: {
    showContactDetails(contact) {
      this.selectedContact = contact;
    },
    callContact() {
      if (this.selectedContact) {
        console.log(`Appel de ${this.selectedContact.name} au ${this.selectedContact.phone}`);
      }
    },
  },
};
</script>

<template>
  <div id="app">
    <contact-component :contacts="contacts" @show-details="showContactDetails" @call-contact="callContact" />
  </div>
</template>

<style scoped>

#app {
  background-color: #fff;
  color: #000;
}

</style>

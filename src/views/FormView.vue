  <script>
  import ContactForm from '@/components/ContactForm.vue';

  export default {
    components: {
    ContactForm,
  },
    data() {
      return {
        newContact: {
          name: '',
          phone: '',
        },
      };
    },
    methods: {
        addNewContact(newContact) {
        this.contacts.push(newContact);
      },
    },
  };
  </script>

  <template>
        <contact-form @contact-added="addNewContact" />

  </template>
  
  
  <style scoped>
  div {
    color: white;
  }
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
  
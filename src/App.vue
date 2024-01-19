<template>


    <nav>
      <RouterLink to="/appeler">Historique</RouterLink>
      <RouterLink to="/contacter">Contacts</RouterLink>
      <RouterLink to="/+">Ajouter un contact</RouterLink>
      <RouterLink to="/composer">Téléphone</RouterLink>
    </nav>

    <RouterView />
</template>

<style scoped>
a {
  color: white;
  margin-right: 30px;
}

nav {
  background-color: #333;
  padding: 10px;
  margin-bottom: 20px;
  
}

</style>
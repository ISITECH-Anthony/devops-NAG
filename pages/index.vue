<template>
  <div>
    <!-- Header -->
    <div class="flex items-center justify-between bg-blue-700 text-white py-4 text-center relative px-10">
      <div class="flex items-center gap-4">
        <h1 class="text-3xl font-bold">Ma Todolist</h1>
        <p class="text-lg">Organisez votre journée avec simplicité</p>
      </div>
      <UButton color="white" class="bg-blue-700 h-8" to="/login">Se connecter</UButton>
    </div>

    <!-- Features Section -->
    <div class="container mx-auto mt-8 text-black px-10">
      <h2 class="text-2xl font-bold mb-4 text-white">Fonctionnalités</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- Feature Card 1 -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <img src="../assets/feature1.jpg" alt="Feature 1" class="h-24 w-auto mx-auto mb-4">
          <h3 class="text-lg font-semibold mb-2">Gestion Intuitive</h3>
          <p class="text-gray-700">Ajoutez, modifiez et supprimez vos tâches en toute simplicité grâce à une interface
            intuitive.</p>
        </div>
        <!-- Feature Card 2 -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <img src="../assets/feature2.jpeg" alt="Feature 2" class="h-24 w-auto mx-auto mb-4">
          <h3 class="text-lg font-semibold mb-2">Personnalisable</h3>
          <p class="text-gray-700">Adaptez l'interface à vos préférences avec des options de personnalisation flexibles.
          </p>
        </div>
        <!-- Feature Card 3 -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <img src="../assets/feature3.jpg" alt="Feature 3" class="h-24 w-auto mx-auto mb-4">
          <h3 class="text-lg font-semibold mb-2">Syncronisation en Temps Réel</h3>
          <p class="text-gray-700">Accédez à vos tâches depuis n'importe où avec une synchronisation en temps réel sur
            tous vos appareils.</p>
        </div>
      </div>
    </div>

    <!-- About Section -->
    <div class="container mx-auto mt-12 px-10">
      <h2 class="text-2xl font-bold mb-4">À Propos</h2>
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-4 md:mb-0">
          <img src="../assets/about.jpg" alt="About" class="h-full m-auto rounded-lg shadow-md">
        </div>
        <div class="md:w-1/2 md:ml-8">
          <p class="text-lg text-white">Ma Todolist est un outil de gestion de tâches conçu pour simplifier votre
            quotidien. Que vous soyez un professionnel, un étudiant ou tout simplement quelqu'un qui cherche à
            s'organiser, notre application est là pour vous aider à rester productif et organisé.</p>
          <p class="text-lg text-white mt-4">Avec une interface conviviale, des fonctionnalités puissantes et une
            synchronisation en temps réel, Ma Todolist est l'outil idéal pour planifier, suivre et accomplir vos tâches
            avec facilité.</p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-blue-700 text-white py-4 text-center mt-12">
      <p>&copy; 2024 Ma Todolist. Tous droits réservés.</p>
    </footer>
  </div>
</template>

<script>
export default {
  // Script part
}
</script>

<style scoped>
/* Styles specific to this component */
</style>

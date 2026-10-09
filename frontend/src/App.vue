<script setup>
import BuscaFiltro from './components/BuscaFiltro.vue';
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <v-app>
    <Navbar />
    <BuscaFiltro />
    <RouterView/>
    <Footer />
  </v-app>
</template>
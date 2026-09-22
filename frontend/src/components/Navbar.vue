<template>
      <v-app-bar color="white">
        <v-app-bar-nav-icon 
          variant="text" 
          @click.stop="drawer = !drawer">
        </v-app-bar-nav-icon>

        <v-toolbar-title>Aprimore</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn to="/" class="nav-btn">Início</v-btn>
        <v-btn to="palestras" class="nav-btn">Palestras</v-btn>
        <v-btn to="rodas-de-conversa" class="nav-btn">Rodas de conversa</v-btn>
        <v-btn to="sobre" class="nav-btn">Sobre</v-btn>
        <v-btn to="contato" class="nav-btn">Contato</v-btn>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        temporary
      >
        <v-list
          class="menu-list"
          :items="items"
        ></v-list>
      </v-navigation-drawer>

      
</template>
<script setup>
  import { ref } from 'vue'

  const items = [
    {
      title: 'Início',
      value: 'inicio',
    },
    {
      title: 'Palestras',
      value: 'palestras',
    },
    {
      title: 'Rodas de conversa',
      value: 'rodas-de-conversa',
    },
    {
      title: 'Sobre',
      value: 'sobre',
    },
    {
      title: 'Contato',
      value: 'contato',
    },
  ]

  const drawer = ref(false)
</script>
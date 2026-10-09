<template>
  <v-card class="activity-card">
    <v-img
      :src="atividade.imagem"
      :alt="atividade.titulo"
      cover
      class="activity-image"
    />

    <v-card-text class="activity-card-text">
      <div class="activity-title-date">
        <div class="text-caption">
          {{ atividade.data }}
        </div>
        <h3 class="text-subtitle-1 font-weight-bold">
          {{ atividade.titulo }}
        </h3>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({
  atividade: {
    type: Object,
    required: true
  }
})
</script>
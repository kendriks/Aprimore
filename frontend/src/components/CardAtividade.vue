<template>
  <v-card>
    <v-img
      :src="atividade.imagem"
      :alt="atividade.titulo"
      height="200"
      cover
    />

    <v-card-text class="pt-0">
      <h3 class="text-subtitle-1 font-weight-bold">
        {{ atividade.titulo }}
      </h3>

      <div class="text-caption mb-2">
        {{ atividade.data }}
      </div>

      <div class="text-body-2 mt-3">
        <div>
          <v-icon size="small" class="mr-1">
            mdi-clock-outline
          </v-icon>

          {{ atividade.horario }}
        </div>

        <div class="mt-1">
          <v-icon size="small" class="mr-1">
            mdi-map-marker-outline
          </v-icon>

          {{ atividade.local }}
        </div>
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
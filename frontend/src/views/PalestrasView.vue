
<script setup>
import { ref } from 'vue'
import CardAtividade from '../components/CardAtividade.vue'
import meditacao from '../assets/meditacao.png'

//mock até fazer api
const atividades = ref([
  {
    id: 1,
    titulo: 'Meditação ativa: A dança das águas',
    data: '11/12/2025',
    horario: '12:40 às 13:40',
    local: 'Sala 02, Bloco 02',
    imagem: meditacao,
    categoria: 'PALESTRA'
  },
  {
    id: 2,
    titulo: 'Saúde mental no ambiente acadêmico',
    data: '15/12/2025',
    horario: '14:00 às 16:00',
    local: 'Auditório',
    imagem: meditacao,
    categoria: 'PALESTRA'
  },
  {
    id: 3,
    titulo: 'Cuidando da saúde emocional',
    data: '18/12/2025',
    horario: '09:00 às 11:00',
    local: 'Sala 03, Bloco 01',
    imagem: meditacao,
    categoria: 'PALESTRA'
  },
  {
    id: 4,
    titulo: 'Saúde mental e qualidade de vida',
    data: '20/12/2025',
    horario: '15:00 às 17:00',
    local: 'Auditório',
    imagem: meditacao,
    categoria: 'PALESTRA'
  },
  {
    id: 5,
    titulo: 'Mindfulness para a rotina acadêmica',
    data: '22/12/2025',
    horario: '10:00 às 11:30',
    local: 'Sala 01, Bloco 02',
    imagem: meditacao,
    categoria: 'PALESTRA'
  },
  {
    id: 6,
    titulo: 'Autocuidado e equilíbrio emocional',
    data: '23/12/2025',
    horario: '14:00 às 15:30',
    local: 'Auditório',
    imagem: meditacao,
    categoria: 'PALESTRA'
  },
  {
    id: 7,
    titulo: 'Estratégias para lidar com a ansiedade',
    data: '26/12/2025',
    horario: '09:00 às 10:30',
    local: 'Sala 03, Bloco 01',
    imagem: meditacao,
    categoria: 'PALESTRA'
  },
  {
    id: 8,
    titulo: 'Bem-estar e qualidade de vida',
    data: '28/12/2025',
    horario: '15:00 às 16:30',
    local: 'Auditório',
    imagem: meditacao,
    categoria: 'PALESTRA'
  }
])
</script>

<template>
  <main class="palestras-page">
    <div v-if="atividades.length" class="cards-grid">
      <div
        v-for="atividade in atividades"
        :key="atividade.id"
        class="activity-card"
      >
        <CardAtividade :atividade="atividade" />
      </div>
    </div>

    <v-alert
      v-if="atividades.length === 0"
      type="info"
      variant="tonal"
      class="empty-state"
    >
      Nenhuma palestra encontrada.
    </v-alert>
  </main>
</template>

<style scoped>
.palestras-page {
  box-sizing: border-box;
  height: calc(100dvh - 418px);
  min-height: 0;
  overflow: hidden;
  padding: 8px 26px 12px;
}

.cards-grid {
  height: 100%;
  min-height: 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.activity-card {
  min-width: 0;
  min-height: 0;
}

.activity-card :deep(.v-card) {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.12);
}

.cards-grid :deep(.activity-image) {
  height: auto !important;
  min-height: 0;
  flex: 1 1 auto;
}

.cards-grid :deep(.activity-card-text) {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 8px 10px 2px !important;
}

.cards-grid :deep(.activity-details) {
  font-size: 12px;
  line-height: 1.25;
}

.cards-grid :deep(.activity-title-date) {
  margin-top: auto;
}

.cards-grid :deep(.activity-title-date h3) {
  font-size: 14px !important;
  line-height: 1.25;
  overflow-wrap: anywhere;
  margin: 0;
}

.cards-grid :deep(.activity-title-date .text-caption) {
  font-size: 12px;
  margin-bottom: 2px;
}

.empty-state {
  flex: 1 1 auto;
}

@media (max-width: 700px) {
  .cards-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(4, minmax(0, 1fr));
    gap: 16px;
  }

  .cards-grid :deep(.activity-card-text) {
    padding: 6px 6px 2px !important;
  }
}
</style>

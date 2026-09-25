<template>
  <div class="toolbar">
    <!--busca-->
    <v-text-field
      placeholder="Pesquisa"
      variant="outlined"
      rounded="pill"
      density="compact"
      hide-details
      append-inner-icon="mdi-magnify"
      class="search-field"
    />

    <!--filtro-->
    <v-btn-toggle
      v-model="sort"
      mandatory
      density="comfortable"
      class="sort-toggle"
    >
      <v-btn
        value="recentes"
        class="sort-btn"
        :class="{ active: sort === 'recentes' }"
      >
        <v-icon start size="18">mdi-check</v-icon>
        Mais recentes
      </v-btn>

      <v-btn
        value="antigas"
        class="sort-btn"
        :class="{ active: sort === 'antigas' }"
      >
        Mais antigas
      </v-btn>
    </v-btn-toggle>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const search = ref('')
const sort = ref('recentes')
</script>

<style scoped>
.toolbar {
  width: 100%;
  min-height: 112px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 60px;
  padding: 0 26px;
  border-top: 1px solid #eee;
}


/*busca*/
.search-field {
    flex: 0 0 260px;
}


/*filtro*/
.sort-toggle {
  gap: 8px;
  background: transparent;
}

.sort-toggle :deep(.v-btn) {
  min-width: auto;
  height: 34px;
  padding: 0 12px;

  border-radius: 8px !important;
  text-transform: none;
  font-size: 16px;
  font-weight: 400;

  box-shadow: none !important;
  border: none;
}

.sort-btn {
  background: #f3f3f3;
  color: #777;
}

.sort-btn.active {
  background: #2196f3;
  color: white;
}
</style>

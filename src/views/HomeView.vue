<template>
  <div class="flex w-full flex-row flex-nowrap">
    <pizza-filters-sidebar />
    <pizzas-list />
  </div>
</template>

<script lang="ts" setup>
import PizzasList from '@/components/PizzaListing/PizzasList.vue'
import PizzaFiltersSidebar from '@/components/PizzaFiltersSidebar/PizzaFiltersSidebar.vue'
</script>

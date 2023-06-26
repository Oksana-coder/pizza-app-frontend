<template>
  <tr class="border-b dark:border-neutral-500">
    <td class="whitespace-nowrap px-6 py-4 font-medium">{{ orderItem.id }}</td>
    <td class="whitespace-nowrap px-6 py-4">{{ orderItem.createdDate }}</td>
    <td class="whitespace-nowrap px-6 py-4">
      <p v-for="pizza in orderItem.pizzas" :key="pizza.id" :pizza="pizza">{{ pizza.name }}</p>
    </td>
    <td class="whitespace-nowrap px-6 py-4">{{ orderItem.totalPrice }} EUR</td>
  </tr>
</template>

<script setup>
  defineProps({
    orderItem: {
      type: Object,
      required: true
    }
  })
</script>


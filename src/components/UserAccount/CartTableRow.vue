<template>
  <tr class="border-b dark:border-neutral-500">
    <td class="whitespace-nowrap px-6 py-4 font-medium flex flex-col">
      <div class="w-20 h-20 mb-2">
        <img :src="pizzaItem.img" class="h-full object-cover">
      </div>

      {{ pizzaItem.name }}
    </td>
    <td class="whitespace-nowrap px-6 py-4">{{ pizzaItem.price }} EUR</td>
    <td class="whitespace-nowrap px-6 py-4">{{ pizzaItem.count }}</td>
    <td class="whitespace-nowrap px-6 py-4">{{ pizzaItem.price * pizzaItem.count }} EUR</td>
  </tr>
</template>

<script setup>
defineProps({
  pizzaItem: {
    type: Object,
    required: true
  }
})
</script>


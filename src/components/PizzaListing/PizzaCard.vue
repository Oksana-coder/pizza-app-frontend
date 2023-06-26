<template>
  <li class="bg-white rounded max-w-xs overflow-hidden shadow-gray">
    <img :src="pizza.img" class="w-full h-3/5 object-cover" />
    <div class="p-5">
      <h2 class="mb-2.5 text-xl font-bold">{{ pizza.name }}</h2>
      <div class="mb-2.5">{{ pizza.price }} EUR</div>
      <action-button text="Add to Cart" @click="addToCart(pizza)"/>
    </div>
  </li>
</template>

<script lang="ts" setup>
import ActionButton from "@/components/Shared/ActionButton.vue";

defineProps({
  pizza: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(["addToCart"])
const addToCart = (pizza: Object) => {
  console.log("sending")
  emit("addToCart", pizza)
}

</script>

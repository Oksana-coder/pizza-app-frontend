<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ul class="flex flex-wrap gap-5">
      <pizza-card v-for="pizza in pizzaItems" :key="pizza.id" :pizza="pizza" @addToCart="addPizzaToCart" />
    </ul>
  </main>
</template>

<script lang="ts" setup>
import PizzaCard from '@/components/PizzaListing/PizzaCard.vue'
import {onMounted, ref} from "vue";
import axios from "axios";
import type {IPizza} from "@/stores/cart-store";
import {useCartStore} from "@/stores/cart-store";

const pizzaItems = ref([])

const cartStore = useCartStore()
const { addPizza } = cartStore

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:8080/pizzas')
    console.log("response: ", res)
    pizzaItems.value = res.data
  } catch (err) {
    console.log(err)
  }
})

const addPizzaToCart = (pizza: IPizza) => {
  console.log("adding")
  console.log("pizza: ", pizza)
  const addedPizza = {
    id: pizza.id,
    name: pizza.name,
    price: pizza.price
  }
  addPizza(pizza)
  console.log("added")
}

</script>

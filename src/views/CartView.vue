<template>
  <div>
    <div class="w-full p-10 flex justify-center items-center">
      <div class="w-full">
        <div class="bg-white p-8 shadow rounded mb-6">
          <h1 class="mb-6 text-lg font-thin">My Cart</h1>

          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full text-left text-sm font-light">
                    <thead class="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" class="px-6 py-4">Pizza</th>
                      <th scope="col" class="px-6 py-4">Price</th>
                      <th scope="col" class="px-6 py-4">Quantity</th>
                      <th scope="col" class="px-6 py-4">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <cart-table-row v-for="pizzaItem in pizzas" :key="pizzaItem.id" :pizza-item="pizzaItem"/>
                    </tbody>
                    <tr>
                      <th scope="col" class="px-6 py-4 text-base">Order Total</th>
                      <th scope="col" class="px-6 py-4"></th>
                      <th scope="col" class="px-6 py-4"></th>
                      <th scope="col" class="px-6 py-4 text-base">{{ totalCost }} EUR</th>
                    </tr>
                  </table>
                  <div class="text-center">
                    <action-button text="Send order" class="mt-4 w-1/3" :disabled="!isLoggedIn || totalCost === 0" :class="isLoggedIn ? '' : 'bg-brand-gray-3 hover:shadow-none'" @click="sendOrder" />
                    <p v-if="!isLoggedIn" class="text-red-500 text-sm  mt-2">You need to log in to be able to order.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CartTableRow from '@/components/UserAccount/CartTableRow.vue'
import {useCartStore} from "@/stores/cart-store";
import {storeToRefs} from "pinia";
import ActionButton from "@/components/Shared/ActionButton.vue";
import axios from "axios";
import {useUserStore} from "@/stores/user-store";

const cartStore = useCartStore()
const { pizzas, totalCost } = storeToRefs(cartStore)
const { clearCart } = cartStore

const userStore = useUserStore()
const { id, isLoggedIn, token, name } = storeToRefs(userStore)

const sendOrder = async () => {
  try {
    const currDate = new Date();
    const dd = String(currDate.getDate()).padStart(2, '0');
    const mm = String(currDate.getMonth() + 1).padStart(2, '0');
    const yyyy = currDate.getFullYear();

    const orderDate = `${yyyy}-${mm}-${dd}`;

    console.log("orderDate: ", orderDate)

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token.value}`
    }
    const data = {
      "createdDate": orderDate,
      "totalPrice": totalCost.value,
      "description": `This is ${name.value}'s order`,
      "pizzas": pizzas.value,
    }
    console.log("data: ", data)
    let res = await axios.post(`http://localhost:8080/orders/users/${id.value}`, data, {headers})
    console.log("response: ", res)
    clearCart()
    console.log("Cart is empty!")
  } catch (err) {
    console.log(err)
  }
}

</script>


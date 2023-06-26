<template>
  <div>
    <div class="w-full p-10 flex justify-center items-center">
      <div class="w-full">
        <div class="bg-white p-8 shadow rounded mb-6">
          <h1 class="mb-6 text-lg font-thin">My Orders</h1>

          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full text-left text-sm font-light">
                    <thead class="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" class="px-6 py-4">#</th>
                      <th scope="col" class="px-6 py-4">Date</th>
                      <th scope="col" class="px-6 py-4">Pizzas Ordered</th>
                      <th scope="col" class="px-6 py-4">Order Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    <table-row v-for="orderItem in orders" :key="orderItem.id" :order-item="orderItem"/>
                    </tbody>
                  </table>
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
import TableRow from '@/components/UserAccount/TableRow.vue'
import {onMounted, ref} from "vue";
import axios from "axios";
import {useUserStore} from "@/stores/user-store";
import {storeToRefs} from "pinia";

const userStore = useUserStore()
const { id, token } = storeToRefs(userStore)

const orders = ref([])

onMounted(async () => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token.value}`
    }

    const res = await axios.get(`http://localhost:8080/orders/users/${id.value}`, {headers})
    console.log("response: ", res.data)
    orders.value = res.data
  } catch (err) {
    console.log(err)
  }
})

// const orders = [
//   {
//     id: 1,
//     orderDate: '12.12.2022',
//     pizzas: 'Quattro Formaggi',
//     totalPrice: '14 EUR',
//   },
//   {
//     id: 2,
//     orderDate: '12.06.2023',
//     pizzas: 'Diavolo',
//     totalPrice: '13 EUR',
//   }
// ]
</script>


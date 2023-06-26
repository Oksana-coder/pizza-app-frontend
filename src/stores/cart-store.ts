import { defineStore } from "pinia";
import {ref} from "vue";

export interface IPizza {
        id: number
        name: string
        price: number
        img: string
        count?: number
    }

export const useCartStore = defineStore('cart', () => {
    const pizzas = ref([] as IPizza[])
    const totalItems = ref(0)
    const totalCost = ref(0)

    function addPizza(pizza: IPizza) {
        const targetPizza: IPizza = pizzas.value.filter(currPizza => currPizza.id === pizza.id)[0];

        if(targetPizza && typeof targetPizza.count !== 'undefined') targetPizza.count += 1
        else pizzas.value = [...pizzas.value, {...pizza, count: 1}];

        totalItems.value += 1;
        totalCost.value += pizza.price;
    };

    const removePizza = (pizza: IPizza) => {
        const targetPizza: IPizza = pizzas.value.filter(currPizza => currPizza.id === pizza.id)[0];

        if(targetPizza.count === 1) pizzas.value = pizzas.value.filter(currPizza => currPizza.id !== pizza.id);
        else if(typeof targetPizza.count !== 'undefined') targetPizza.count -= 1;

        totalItems.value -= 1;
        totalCost.value -= pizza.price;
    };

    function clearCart() {
        pizzas.value = []
        totalItems.value = 0
        totalCost.value = 0
    }

    return { pizzas, totalItems, totalCost, addPizza, removePizza, clearCart }
})


// {
//     "createdDate": "2023-03-01",
//     "totalPrice": 25,
//     "description": "This is the first Oksana's order",
//     "pizzas": [
//     {
//         "id": 1,
//         "name": "Diabolo",
//         "price": 13
//     },
//     {
//         "id": 3,
//         "name": "Margherita",
//         "price": 12.0
//     }
// ]
// }

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";

interface IUser {
   data: {
       id: number
       name: string
       email: string
       token: string
   }
}

export const useUserStore = defineStore('user', () => {
    const id = ref(0)
    const name = ref('')
    const email = ref('')
    const token = ref('')
    const isLoggedIn = ref(false)

    function toggleLogin() {
        isLoggedIn.value = !isLoggedIn.value
    }

    async function setUserDetails(res: IUser) {
        console.log('setUserDetails', res.data)
        id.value = res.data.id
        name.value = res.data.name
        email.value = res.data.email
        token.value = res.data.token
    }

    async function fetchUser() {
        const res = await axios.get('http://localhost:8080/users/' + id.value)

        id.value = res.data.id
        name.value = res.data.name
        email.value = res.data.email
    }

    function clearUser() {
        id.value = 0
        name.value = ''
        email.value = ''
        token.value = ''
    }

    return { id, name, email, token, isLoggedIn, toggleLogin, setUserDetails, fetchUser, clearUser }
},
{
        persist: true,
},
)


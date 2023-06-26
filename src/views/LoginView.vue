<template>
  <div id="login">
    <div class="w-full p-10 flex justify-center items-center">
      <div class="w-full max-w-xs">
        <div class="bg-white p-8 shadow rounded mb-6">
          <h1 class="mb-6 text-lg font-thin">Let's get some pizza!</h1>
          <div class="mb-4">
            <text-input
                label="Email"
                placeholder="john.doe@mail.com"
                v-model:input="email"
                input-type="text"
            />
          </div>
          <div class="mb-4">
            <text-input
                label="Password"
                placeholder="password123?"
                v-model:input="password"
                input-type="password"
            />
          </div>
          <action-button text="Login" class="w-full" @click="login" />
          <p v-if="error" class="text-red-500 text-sm  mt-2">{{ error }}</p>
        </div>
        <p class="text-center text-md text-gray-900">
          Don't have an account yet?
          <router-link to="/register" class="text-blue-500 no-underline hover:underline">Register</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import axios from 'axios'
  import { useUserStore } from "@/stores/user-store"
  import ActionButton from '@/components/Shared/ActionButton.vue'
  import TextInput from '@/components/Shared/TextInput.vue'
  import {useRouter} from "vue-router";
  import {storeToRefs} from "pinia";

  const userStore = useUserStore()
  const { setUserDetails, toggleLogin } = userStore
  const router = useRouter()

  let error = ref(null)
  let email = ref(null)
  let password = ref(null)

  const login = async () => {
    try {
      let res = await axios.post('http://localhost:8080/users/authenticate', {
        email: email.value,
        password: password.value,
      })
      console.log(res)
      setUserDetails(res)
      toggleLogin()
      await router.push({name: 'home'})
    } catch (err) {
      error.value = err.response.data
    }
  }
</script>


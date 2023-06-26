<template>
  <div id="register">
    <div class="w-full p-6 flex justify-center items-center">
      <div class="w-full max-w-xs">
        <div class="bg-white p-8 shadow rounded mb-6">
          <h1 class="mb-6 text-lg font-thin">Let's get some pizza!</h1>
          <div class="mb-4">
            <text-input
                label="User Name"
                placeholder="Jonny D"
                v-model:input="userName"
                input-type="text"
            />
          </div>
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
          <div class="mb-4">
            <text-input
                label="Confirm Password"
                placeholder="password123?"
                v-model:input="confirmPassword"
                input-type="password"
                error="This is a test error"
            />
          </div>
          <action-button text="Register" class="w-full" @click="register" />
          <p v-if="error" class="text-red-500 text-sm  mt-2">{{ error }}</p>
        </div>
          <p class="text-center text-md text-gray-900">
            Already have an account?
            <router-link to="/login" class="text-blue-500 no-underline hover:underline">Login</router-link>
          </p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import ActionButton from "@/components/Shared/ActionButton.vue";
  import TextInput from "@/components/Shared/TextInput.vue";
  import axios from "axios";
  import {useUserStore} from "@/stores/user-store";
  import {useRouter} from "vue-router";

  const userStore = useUserStore
  const { setUserDetails } = userStore
  const router = useRouter()

  let error = ref(null)
  let userName = ref(null)
  let email = ref(null)
  let password = ref(null)
  let confirmPassword = ref(null)

  const register = async () => {
    try {
      let res = await axios.post('http://localhost:8080/users/register', {
        name: userName.value,
        email: email.value,
        password: password.value,
        role: "USER"
      })
      console.log(res)
      await router.push({name: 'login'})
    } catch (err) {
      error.value = err.response.data
    }
  }
</script>


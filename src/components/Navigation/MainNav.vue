<template>
  <header class="w-full text-sm h-16">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
        <router-link to="/" class="flex h-full items-center text-xl">Pizza App</router-link>
        <div class="ml-auto flex h-full items-center">
          <router-link to="/user/cart" class="mr-8">Cart ({{ totalItems }})</router-link>
          <div v-if="isLoggedIn" class="cursor-pointer mr-8" @click="logout">Sign out</div>
          <router-link v-else to="/login" class="mr-8">Sign in</router-link>
          <profile-image v-if="isLoggedIn" class="cursor-pointer" @click="navigateToProfile" />
          <action-button v-else text="Register" @click="navigateToRegistration" />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import ActionButton from '@/components/Shared/ActionButton.vue'
import ProfileImage from '@/components/Navigation/ProfileImage.vue'

import {useRouter} from "vue-router";
import {useUserStore} from "@/stores/user-store";
import {storeToRefs} from "pinia";
import {useCartStore} from "@/stores/cart-store";

const userStore = useUserStore()
const { isLoggedIn } = storeToRefs(userStore)
const { clearUser, toggleLogin } = userStore

const cartStore = useCartStore()
const { totalItems } = storeToRefs(cartStore)

const router = useRouter();

const navigateToRegistration = () => (router.push("/register"))
const navigateToProfile = () => (router.push("/user/profile"))

const logout = () => {
  clearUser()
  toggleLogin()
}

</script>

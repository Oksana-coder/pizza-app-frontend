<template>
  <button
    class="rounded border-0 bg-brand-blue-1 px-5 py-3 font-medium text-white hover:shadow-blue"
  >
    {{ text }}
  </button>
</template>

<script lang="ts" setup>

const props = defineProps({
  text: {
    type: String,
    required: true,
  }
})
</script>

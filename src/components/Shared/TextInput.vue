<template>
  <div>
    <label class="block uppercase tracking-wide text-xs font-bold mb-2">{{ label }}</label>
    <input
        :placeholder="placeholder"
        :type="inputType"
        class="appearance-none block w-full bg-white text-gray-700 border border-solid border-brand-gray-3 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-brand-blue-2"
        v-model="inputComputed"
    >
  </div>
<!--  <p v-if="error" class="text-red-500">{{ error }}</p>-->
</template>

<script setup>
  import { defineProps, defineEmits, toRefs, computed } from "vue";

  const emit = defineEmits(['update:input'])

  const props = defineProps({
    label: String,
    input: String,
    placeholder: { type: String, default: '' },
    inputType: String,
    // error: String
  })

  // const { label, input, placeholder, error } = toRefs(props)
  const { label, input, placeholder } = toRefs(props)

  const inputComputed = computed({
    get: () => input.value,
    set: (val) => emit('update:input', val)
  })
</script>


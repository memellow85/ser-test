<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <NuxtLayout>
    <div class="w-full text-center">
      <p class="p-4 text-7xl text-center">{{ props.error?.statusCode }}</p>
      <p class="p-4 text-4xl text-center">{{ props.error?.message }}</p>
      <NuxtLink class="bg-transparent underline text-serioplast-blue-dark cursor-pointer hover:bg-transparent" to="/">{{ $t('router.goto_error') }}</NuxtLink>
    </div>
  </NuxtLayout>
</template>
<script setup>
import { Star } from '@lucide/vue'

defineProps({
  rating: { type: Number, default: 4.6 },
})
</script>

<template>
  <span class="inline-flex items-center gap-0.5" aria-hidden="true">
    <Star
      v-for="index in 5"
      :key="index"
      class="h-4 w-4 fill-sand text-sand"
    />
  </span>
</template>

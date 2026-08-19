<script setup>
import { useSkin } from '../../composables/useSkin'

defineProps({
  large: { type: Boolean, default: false },
  block: { type: Boolean, default: false },
})

const { isStudio } = useSkin()
</script>

<template>
  <RouterLink
    to="/visit"
    class="inline-flex items-center justify-center rounded-lg bg-brand font-semibold text-white transition hover:bg-brand-dark"
    :class="[
      large ? 'h-14 px-8 text-base' : 'h-12 px-6 text-sm',
      block ? 'w-full' : '',
      isStudio ? 'tracking-normal' : 'uppercase tracking-wide',
    ]"
  >
    Schedule with us
  </RouterLink>
</template>

<script setup>
import { useSkin } from '../../composables/useSkin'

defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  copy: { type: String, default: '' },
})

const { isStudio } = useSkin()
</script>

<template>
  <section class="px-4 py-12 sm:px-6 sm:py-16" :class="isStudio ? 'bg-cream' : 'bg-sand'">
    <div class="mx-auto max-w-6xl">
      <p v-if="eyebrow" class="text-xs font-bold uppercase tracking-[0.2em] text-brand-deep">
        {{ eyebrow }}
      </p>
      <h1 class="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
        {{ title }}
      </h1>
      <p v-if="copy" class="mt-4 max-w-2xl text-base leading-relaxed text-ink sm:text-lg">
        {{ copy }}
      </p>
      <slot />
    </div>
  </section>
</template>

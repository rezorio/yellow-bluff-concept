<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  copy: { type: String, default: '' },
})
</script>

<template>
  <section class="bg-sand-light">
    <div class="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p v-if="eyebrow" class="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
        {{ eyebrow }}
      </p>
      <h1 class="mt-2 max-w-3xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
        {{ title }}
      </h1>
      <p v-if="copy" class="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
        {{ copy }}
      </p>
      <slot />
    </div>
  </section>
</template>

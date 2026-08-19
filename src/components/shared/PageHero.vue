<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  copy: { type: String, default: '' },
})
</script>

<template>
  <section class="bg-mist px-4 pt-10 sm:px-6 sm:pt-14">
    <div class="card mx-auto max-w-6xl rounded-2xl px-5 py-10 sm:px-8 sm:py-14">
      <p v-if="eyebrow" class="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
        {{ eyebrow }}
      </p>
      <h1 class="mt-3 max-w-3xl font-serif text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
        {{ title }}
      </h1>
      <p v-if="copy" class="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-muted sm:text-base">
        {{ copy }}
      </p>
      <slot />
    </div>
  </section>
</template>

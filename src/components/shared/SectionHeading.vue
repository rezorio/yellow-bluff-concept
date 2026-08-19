<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  copy: { type: String, default: '' },
  light: { type: Boolean, default: false },
})
</script>

<template>
  <div class="max-w-2xl">
    <p
      v-if="eyebrow"
      class="text-xs font-bold uppercase tracking-[0.2em]"
      :class="light ? 'text-sand' : 'text-brand'"
    >
      {{ eyebrow }}
    </p>
    <h2
      class="mt-3 font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
      :class="light ? 'text-white' : 'text-ink'"
    >
      {{ title }}
    </h2>
    <p
      v-if="copy"
      class="mt-3 text-base leading-relaxed"
      :class="light ? 'text-white/90' : 'text-ink'"
    >
      {{ copy }}
    </p>
  </div>
</template>

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
      class="text-[11px] font-semibold uppercase tracking-[0.2em]"
      :class="light ? 'text-sand' : 'text-brand'"
    >
      {{ eyebrow }}
    </p>
    <h2
      class="mt-3 font-serif text-3xl font-medium leading-tight tracking-tight sm:text-4xl"
      :class="light ? 'text-white' : 'text-ink'"
    >
      {{ title }}
    </h2>
    <p
      v-if="copy"
      class="mt-3 text-[15px] leading-relaxed"
      :class="light ? 'text-white/75' : 'text-ink-muted'"
    >
      {{ copy }}
    </p>
  </div>
</template>

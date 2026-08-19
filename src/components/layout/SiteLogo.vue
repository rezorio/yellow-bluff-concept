<script setup>
defineProps({
  light: { type: Boolean, default: false },
})
</script>

<template>
  <RouterLink
    to="/"
    class="flex min-w-0 items-center gap-3"
    aria-label="Dental Care on Yellow Bluff home"
  >
    <span
      class="grid h-9 w-9 shrink-0 place-items-center rounded-lg border"
      :class="
        light
          ? 'border-white/20 bg-white/10 text-sand'
          : 'border-brand/20 bg-brand/10 text-brand'
      "
    >
      <svg viewBox="0 0 32 32" class="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M16 4.5c-3.4 0-6.2 2.5-6.8 5.8-.5 2.7.3 5.4 1 8 .9 2.8 1.6 5.6 1 8.2-.4 1.8-1.5 3.1-3.1 3.5 2.2 1.4 5 1.4 7.9 0 2.9 1.4 5.7 1.4 7.9 0-1.6-.4-2.7-1.7-3.1-3.5-.6-2.6-1.1-5.4 1-8.2.7-2.6 1.5-5.3 1-8C22.2 7 19.4 4.5 16 4.5Z"
          fill="currentColor"
        />
      </svg>
    </span>
    <span class="min-w-0 leading-tight">
      <span
        class="block text-[13px] font-semibold tracking-[0.04em] sm:text-sm"
        :class="light ? 'text-white' : 'text-ink'"
      >
        Dental Care
      </span>
      <span
        class="block text-[9px] font-medium uppercase tracking-[0.22em] sm:text-[10px]"
        :class="light ? 'text-white/60' : 'text-brand'"
      >
        on Yellow Bluff
      </span>
    </span>
  </RouterLink>
</template>

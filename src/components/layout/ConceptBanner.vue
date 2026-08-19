<script setup>
import { Info } from '@lucide/vue'
</script>

<template>
  <div class="bg-sand text-ink">
    <p
      class="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2 text-center text-[12px] font-medium leading-snug sm:text-[13px]"
    >
      <Info class="hidden h-3.5 w-3.5 shrink-0 sm:block" :stroke-width="2.25" />
      <span>
        Concept redesign — this is not the live website.
        <a
          href="https://dentalcareonyellowbluff.com"
          class="underline decoration-ink/40 underline-offset-2 hover:decoration-ink"
          target="_blank"
          rel="noreferrer"
        >
          View the current site
        </a>
      </span>
    </p>
  </div>
</template>

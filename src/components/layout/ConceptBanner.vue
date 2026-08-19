<script setup>
import { Info } from '@lucide/vue'
import { useSkin } from '../../composables/useSkin'

const { isStudio } = useSkin()
</script>

<template>
  <div
    class="border-b text-ink"
    :class="isStudio ? 'border-ink/10 bg-white' : 'border-ink/10 bg-sand'"
  >
    <p
      class="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2 text-center text-[11px] font-medium tracking-wide sm:text-xs"
    >
      <Info class="hidden h-3.5 w-3.5 shrink-0 sm:block" :stroke-width="1.75" />
      <span>
        Concept pitch — two looks, same office. Switch <strong>Brand refresh</strong> or
        <strong>Studio</strong> in the header. Demo request form only; not live booking.
        <a
          href="https://dentalcareonyellowbluff.com"
          class="underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
          target="_blank"
          rel="noreferrer"
        >
          Current site
        </a>
      </span>
    </p>
  </div>
</template>

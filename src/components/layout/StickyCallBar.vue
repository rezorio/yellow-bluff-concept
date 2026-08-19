<script setup>
import { Calendar, Phone } from '@lucide/vue'
import { practice } from '../../data/practice'
</script>

<template>
  <div
    class="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-cream p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden"
  >
    <div class="mx-auto grid max-w-lg grid-cols-2 gap-2">
      <a
        :href="practice.phoneHref"
        class="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-ink/15 bg-sand-light text-sm font-semibold text-ink"
      >
        <Phone class="h-4 w-4" :stroke-width="1.75" />
        Call
      </a>
      <RouterLink
        to="/visit"
        class="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-brand text-sm font-semibold text-white"
      >
        <Calendar class="h-4 w-4" :stroke-width="1.75" />
        Request visit
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { Calendar, Phone } from '@lucide/vue'
import { practice } from '../../data/practice'
</script>

<template>
  <div class="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur lg:hidden">
    <div class="mx-auto grid max-w-lg grid-cols-2 gap-2">
      <a
        :href="practice.phoneHref"
        class="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink text-sm font-semibold text-white"
      >
        <Phone class="h-4 w-4" />
        Call Us
      </a>
      <RouterLink
        to="/visit"
        class="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand text-sm font-semibold text-white"
      >
        <Calendar class="h-4 w-4" />
        Request a Visit
      </RouterLink>
    </div>
  </div>
</template>

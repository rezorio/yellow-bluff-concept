<script setup>
import { Phone } from '@lucide/vue'
import { useSkin } from '../../composables/useSkin'
import { practice } from '../../data/practice'
import ScheduleCta from '../shared/ScheduleCta.vue'

const { isStudio } = useSkin()
</script>

<template>
  <div
    class="fixed inset-x-0 bottom-0 z-40 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden"
    :class="isStudio ? 'border-t border-ink/10 bg-white' : 'border-t border-ink/20 bg-ink'"
  >
    <div class="mx-auto grid max-w-lg grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] gap-2">
      <a
        :href="practice.phoneHref"
        class="inline-flex h-12 items-center justify-center gap-2 rounded-lg border-2 text-sm font-semibold"
        :class="isStudio ? 'border-brand text-brand' : 'border-white/40 text-white'"
      >
        <Phone class="h-4 w-4" :stroke-width="1.75" />
        Call
      </a>
      <ScheduleCta block />
    </div>
  </div>
</template>

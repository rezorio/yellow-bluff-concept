<script setup>
import { useSkin } from '../../composables/useSkin'

const { isStudio, setSkin } = useSkin()
</script>

<template>
  <div
    class="inline-flex rounded-lg border p-0.5 text-[11px] font-semibold"
    :class="isStudio ? 'border-ink/15 bg-cream' : 'border-white/20 bg-white/10'"
    role="group"
    aria-label="Pitch look"
  >
    <button
      type="button"
      class="rounded-md px-2 py-1.5 leading-none transition"
      :class="
        isStudio
          ? 'text-ink/55 hover:text-ink'
          : 'bg-white text-ink'
      "
      @click="setSkin('brand')"
    >
      Brand refresh
    </button>
    <button
      type="button"
      class="rounded-md px-2 py-1.5 leading-none transition"
      :class="isStudio ? 'bg-brand text-white' : 'text-white/70 hover:text-white'"
      @click="setSkin('studio')"
    >
      Studio
    </button>
  </div>
</template>

<script setup>
import { Bone, CircleAlert, Heart, Shield, Sparkles } from '@lucide/vue'

const props = defineProps({
  service: { type: Object, required: true },
})

const iconMap = {
  sedation: Heart,
  invisalign: Sparkles,
  cosmetic: Sparkles,
  preventative: Shield,
  implants: Bone,
  emergency: CircleAlert,
}

const icon = iconMap[props.service.id] || Sparkles
</script>

<template>
  <article class="flex h-full flex-col rounded-3xl border border-ink/8 bg-white p-6 shadow-sm">
    <span class="grid h-11 w-11 place-items-center rounded-full bg-cream text-brand">
      <component :is="icon" class="h-5 w-5" />
    </span>
    <p class="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
      {{ service.category }}
    </p>
    <h3 class="mt-1 font-serif text-xl text-ink">{{ service.name }}</h3>
    <p class="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{{ service.blurb }}</p>
    <ul v-if="service.details?.length" class="mt-4 space-y-1.5 text-sm text-ink">
      <li v-for="item in service.details" :key="item" class="flex gap-2">
        <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
        <span>{{ item }}</span>
      </li>
    </ul>
  </article>
</template>

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
const emphasis = props.service.emphasis || 'default'
</script>

<template>
  <article
    class="card flex h-full flex-col rounded-2xl p-5"
    :class="{
      'border-brand ring-1 ring-brand/25': emphasis === 'urgent',
      'border-sand/80': emphasis === 'highlight',
    }"
  >
    <div class="flex items-start justify-between gap-3">
      <span
        class="grid h-10 w-10 place-items-center rounded-lg text-white"
        :class="emphasis === 'urgent' ? 'bg-brand' : 'bg-brand/90'"
      >
        <component :is="icon" class="h-4 w-4" :stroke-width="1.75" />
      </span>
      <span
        v-if="emphasis === 'urgent'"
        class="rounded-md bg-brand px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white"
      >
        Same-day
      </span>
      <span
        v-else-if="emphasis === 'highlight'"
        class="rounded-md bg-sand/40 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink"
      >
        Popular
      </span>
    </div>
    <p class="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
      {{ service.category }}
    </p>
    <h3 class="mt-1 text-lg font-semibold tracking-tight text-ink">{{ service.name }}</h3>
    <p class="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{{ service.blurb }}</p>
    <ul v-if="service.details?.length" class="mt-4 space-y-1.5 text-sm text-ink">
      <li v-for="item in service.details" :key="item" class="flex gap-2">
        <span class="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-brand" />
        <span>{{ item }}</span>
      </li>
    </ul>
  </article>
</template>

<script setup>
import { Clock, MapPin, Navigation } from '@lucide/vue'
import { computed } from 'vue'
import { getOpenStatus, practice } from '../../data/practice'

const status = computed(() => getOpenStatus())
</script>

<template>
  <section class="bg-brand text-white">
    <div class="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-sand">Visit us</p>
        <h2 class="mt-2 font-serif text-3xl sm:text-4xl">{{ practice.addressLine1 }}</h2>
        <p class="mt-2 text-white/80">{{ practice.addressLine2 }}</p>

        <p class="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm">
          <Clock class="h-4 w-4" />
          {{ status.label }}
        </p>

        <ul class="mt-6 max-w-sm space-y-2 text-sm">
          <li
            v-for="entry in practice.hours"
            :key="entry.day"
            class="flex justify-between gap-6 border-b border-white/10 py-1.5"
            :class="status.today?.day === entry.day ? 'font-semibold text-sand' : 'text-white/80'"
          >
            <span>{{ entry.short }}</span>
            <span>{{ entry.closed ? 'Closed' : `${entry.open} – ${entry.close}` }}</span>
          </li>
        </ul>

        <div class="mt-6 flex flex-wrap gap-3">
          <a
            :href="practice.mapsDirectionsUrl"
            class="inline-flex h-11 items-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-white"
            target="_blank"
            rel="noreferrer"
          >
            <Navigation class="h-4 w-4" />
            Get directions
          </a>
          <a
            :href="practice.phoneHref"
            class="inline-flex h-11 items-center gap-2 rounded-full border border-white/30 px-5 text-sm font-semibold"
          >
            <MapPin class="h-4 w-4" />
            Call the office
          </a>
        </div>
      </div>

      <div class="overflow-hidden rounded-3xl border border-white/15 bg-white">
        <iframe
          title="Map of Dental Care on Yellow Bluff"
          :src="practice.mapsEmbedUrl"
          class="h-[320px] w-full lg:h-full min-h-[320px]"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </section>
</template>

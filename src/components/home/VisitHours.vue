<script setup>
import { Clock, Navigation, Phone } from '@lucide/vue'
import { computed } from 'vue'
import { getOpenStatus, practice } from '../../data/practice'

const status = computed(() => getOpenStatus())
</script>

<template>
  <section class="px-4 py-16 sm:px-6 lg:py-20">
    <div class="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-brand text-white">
      <div class="grid lg:grid-cols-[1.15fr_0.85fr]">
        <div class="flex flex-col justify-between border-white/15 p-8 sm:p-10 lg:border-r lg:p-12">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.24em] text-sand">
              Visit us
            </p>
            <h2 class="mt-4 font-serif text-4xl font-medium leading-[1.15] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              {{ practice.addressLine1 }}
            </h2>
            <p class="mt-4 text-xl font-medium tracking-tight text-white sm:text-2xl">
              {{ practice.addressLine2 }}
            </p>

            <p
              class="mt-8 inline-flex items-center gap-3 rounded-lg border border-white/25 bg-white/15 px-4 py-2.5 text-base font-medium sm:text-lg"
            >
              <Clock class="h-5 w-5 shrink-0" :stroke-width="1.75" />
              {{ status.label }}
            </p>

            <a
              :href="practice.phoneHref"
              class="mt-6 block font-serif text-3xl tracking-tight text-white sm:text-4xl"
            >
              {{ practice.phoneDisplay }}
            </a>
          </div>

          <div class="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              :href="practice.mapsDirectionsUrl"
              class="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-ink px-6 text-base font-semibold text-white"
              target="_blank"
              rel="noreferrer"
            >
              <Navigation class="h-5 w-5" :stroke-width="1.75" />
              Get directions
            </a>
            <a
              :href="practice.phoneHref"
              class="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/15 px-6 text-base font-semibold"
            >
              <Phone class="h-5 w-5" :stroke-width="1.75" />
              Call the office
            </a>
          </div>
        </div>

        <div class="border-t border-white/15 p-8 sm:p-10 lg:border-t-0 lg:p-12">
          <p class="text-xs font-semibold uppercase tracking-[0.24em] text-sand">
            Hours
          </p>
          <ul class="mt-6">
            <li
              v-for="entry in practice.hours"
              :key="entry.day"
              class="flex items-baseline justify-between gap-6 border-b border-white/15 py-3.5 text-lg sm:text-xl"
              :class="status.today?.day === entry.day ? 'font-semibold text-sand' : 'text-white'"
            >
              <span>{{ entry.day }}</span>
              <span class="tabular-nums">
                {{ entry.closed ? 'Closed' : `${entry.open} – ${entry.close}` }}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-white/15 p-3 sm:p-4">
        <div class="overflow-hidden rounded-xl border border-white/20 bg-white">
          <iframe
            title="Map of Dental Care on Yellow Bluff"
            :src="practice.mapsEmbedUrl"
            class="h-[280px] w-full sm:h-[360px] lg:h-[400px]"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
</template>

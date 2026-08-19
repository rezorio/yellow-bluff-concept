<script setup>
import { MapPin, Navigation, Phone } from '@lucide/vue'
import { useSkin } from '../../composables/useSkin'
import { navLinks } from '../../data/nav'
import { practice } from '../../data/practice'
import ScheduleCta from '../shared/ScheduleCta.vue'
import SiteLogo from './SiteLogo.vue'

const { isStudio } = useSkin()

const hoursSummary = [
  { label: 'Mon, Wed–Fri', value: '8:00 AM – 5:00 PM' },
  { label: 'Tuesday', value: '9:00 AM – 5:00 PM' },
  { label: 'Sat–Sun', value: 'Closed' },
]
</script>

<template>
  <footer :class="isStudio ? 'border-t border-ink/10 bg-white text-ink' : 'bg-ink text-white'">
    <div class="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
      <div
        class="flex flex-col gap-6 pb-6 lg:flex-row lg:items-center lg:justify-between"
        :class="isStudio ? 'border-b border-ink/10' : 'border-b border-white/10'"
      >
        <SiteLogo :light="!isStudio" />
        <nav
          class="flex flex-wrap gap-x-5 gap-y-2 text-sm"
          :class="isStudio ? 'text-ink/60' : 'text-white/70'"
          aria-label="Footer"
        >
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            :class="isStudio ? 'hover:text-ink' : 'hover:text-white'"
          >
            {{ link.label }}
          </RouterLink>
        </nav>
      </div>

      <div class="grid gap-8 py-8 md:grid-cols-3">
        <div>
          <p
            class="text-[11px] font-semibold uppercase tracking-[0.18em]"
            :class="isStudio ? 'text-brand' : 'text-sand'"
          >
            Call
          </p>
          <a
            :href="practice.phoneHref"
            class="mt-2 inline-flex items-center gap-2 font-serif text-2xl tracking-tight sm:text-3xl"
          >
            <Phone class="h-5 w-5" :class="isStudio ? 'text-brand' : 'text-sand'" :stroke-width="1.75" />
            {{ practice.phoneDisplay }}
          </a>
          <p class="mt-4 flex items-start gap-2 text-sm" :class="isStudio ? 'text-ink-muted' : 'text-white/70'">
            <MapPin class="mt-0.5 h-4 w-4 shrink-0" :class="isStudio ? 'text-brand' : 'text-sand'" :stroke-width="1.75" />
            <span>{{ practice.addressLine1 }}<br />{{ practice.addressLine2 }}</span>
          </p>
          <a
            :href="practice.mapsDirectionsUrl"
            class="mt-3 inline-flex items-center gap-1.5 text-sm font-medium"
            :class="isStudio ? 'text-brand' : 'text-sand hover:text-white'"
            target="_blank"
            rel="noreferrer"
          >
            <Navigation class="h-4 w-4" :stroke-width="1.75" />
            Get directions
          </a>
        </div>

        <div>
          <p
            class="text-[11px] font-semibold uppercase tracking-[0.18em]"
            :class="isStudio ? 'text-brand' : 'text-sand'"
          >
            Hours
          </p>
          <ul class="mt-3 space-y-2 text-sm">
            <li
              v-for="row in hoursSummary"
              :key="row.label"
              class="flex justify-between gap-6 border-b py-2"
              :class="isStudio ? 'border-ink/10' : 'border-white/10'"
            >
              <span :class="isStudio ? 'text-ink-muted' : 'text-white/70'">{{ row.label }}</span>
              <span class="tabular-nums">{{ row.value }}</span>
            </li>
          </ul>
        </div>

        <div class="flex flex-col justify-between gap-4">
          <div>
            <p
              class="text-[11px] font-semibold uppercase tracking-[0.18em]"
              :class="isStudio ? 'text-brand' : 'text-sand'"
            >
              New patients
            </p>
            <p class="mt-2 text-sm leading-relaxed" :class="isStudio ? 'text-ink-muted' : 'text-white/70'">
              Request a visit online, or call — the front desk will help you find a time.
            </p>
          </div>
          <ScheduleCta />
        </div>
      </div>
    </div>

    <div :class="isStudio ? 'border-t border-ink/10' : 'border-t border-white/10'">
      <div
        class="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 text-[11px] sm:flex-row sm:items-center sm:justify-between sm:px-6"
        :class="isStudio ? 'text-ink/40' : 'text-white/40'"
      >
        <p>{{ practice.affiliation }}</p>
        <p>Concept redesign — not the live website.</p>
      </div>
    </div>
  </footer>
</template>

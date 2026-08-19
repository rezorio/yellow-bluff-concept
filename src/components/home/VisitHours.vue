<script setup>
import { Clock, Navigation, Phone } from '@lucide/vue'
import { computed } from 'vue'
import { useSkin } from '../../composables/useSkin'
import { getOpenStatus, practice } from '../../data/practice'

const status = computed(() => getOpenStatus())
const { isStudio } = useSkin()
</script>

<template>
  <section class="px-4 py-16 sm:px-6 lg:py-20" :class="isStudio ? 'bg-cream' : ''">
    <div
      class="mx-auto max-w-6xl overflow-hidden rounded-2xl"
      :class="isStudio ? 'card text-ink' : 'bg-brand text-white'"
    >
      <div class="grid lg:grid-cols-[1.15fr_0.85fr]">
        <div
          class="flex flex-col justify-between p-8 sm:p-10 lg:p-12"
          :class="isStudio ? 'lg:border-r lg:border-ink/10' : 'border-white/15 lg:border-r'"
        >
          <div>
            <p
              class="text-xs font-semibold uppercase tracking-[0.24em]"
              :class="isStudio ? 'text-brand' : 'text-sand'"
            >
              Visit us
            </p>
            <h2 class="mt-4 font-serif text-4xl font-medium leading-[1.15] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              {{ practice.addressLine1 }}
            </h2>
            <p
              class="mt-4 text-xl font-medium tracking-tight sm:text-2xl"
              :class="isStudio ? 'text-ink-muted' : 'text-white'"
            >
              {{ practice.addressLine2 }}
            </p>

            <p
              class="mt-8 inline-flex items-center gap-3 rounded-lg px-4 py-2.5 text-base font-medium sm:text-lg"
              :class="isStudio ? 'bg-mist text-ink' : 'border border-white/25 bg-white/15'"
            >
              <Clock class="h-5 w-5 shrink-0" :stroke-width="1.75" />
              {{ status.label }}
            </p>

            <a
              :href="practice.phoneHref"
              class="mt-6 block font-serif text-3xl tracking-tight sm:text-4xl"
            >
              {{ practice.phoneDisplay }}
            </a>
          </div>

          <div class="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              :href="practice.mapsDirectionsUrl"
              class="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 text-base font-semibold text-white"
              :class="isStudio ? 'bg-brand' : 'bg-ink'"
              target="_blank"
              rel="noreferrer"
            >
              <Navigation class="h-5 w-5" :stroke-width="1.75" />
              Get directions
            </a>
            <a
              :href="practice.phoneHref"
              class="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border px-6 text-base font-semibold"
              :class="isStudio ? 'border-ink/15 text-ink' : 'border-white/30 bg-white/15'"
            >
              <Phone class="h-5 w-5" :stroke-width="1.75" />
              Call the office
            </a>
          </div>
        </div>

        <div
          class="p-8 sm:p-10 lg:p-12"
          :class="isStudio ? 'border-t border-ink/10 lg:border-t-0' : 'border-t border-white/15 lg:border-t-0'"
        >
          <p
            class="text-xs font-semibold uppercase tracking-[0.24em]"
            :class="isStudio ? 'text-brand' : 'text-sand'"
          >
            Hours
          </p>
          <ul class="mt-6">
            <li
              v-for="entry in practice.hours"
              :key="entry.day"
              class="flex items-baseline justify-between gap-6 border-b py-3.5 text-lg sm:text-xl"
              :class="[
                isStudio ? 'border-ink/10' : 'border-white/15',
                status.today?.day === entry.day
                  ? isStudio
                    ? 'font-semibold text-brand'
                    : 'font-semibold text-sand'
                  : '',
              ]"
            >
              <span>{{ entry.day }}</span>
              <span class="tabular-nums">
                {{ entry.closed ? 'Closed' : `${entry.open} – ${entry.close}` }}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div class="p-3 sm:p-4" :class="isStudio ? 'border-t border-ink/10' : 'border-t border-white/15'">
        <div
          class="overflow-hidden rounded-xl bg-white"
          :class="isStudio ? 'border border-ink/10' : 'border border-white/20'"
        >
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

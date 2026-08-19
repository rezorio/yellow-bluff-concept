<script setup>
import { Clock, MapPin, Phone } from '@lucide/vue'
import { computed } from 'vue'
import RequestVisitForm from '../components/shared/RequestVisitForm.vue'
import PageHero from '../components/shared/PageHero.vue'
import { getOpenStatus, practice } from '../data/practice'

const status = computed(() => getOpenStatus())
</script>

<template>
  <PageHero
    eyebrow="Visit"
    title="Come see us on Yellow Bluff."
    copy="Call, get directions, or request a callback. New patients are welcome."
  >
    <p
      class="mt-5 inline-flex items-center gap-2 rounded-lg bg-ink px-3 py-2 text-sm font-semibold text-white"
    >
      <Clock class="h-4 w-4 text-sand" :stroke-width="1.75" />
      {{ status.label }}
    </p>
  </PageHero>

  <section class="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-2">
    <div>
      <div class="card rounded-2xl p-6">
        <h2 class="text-lg font-semibold tracking-tight text-ink">Office</h2>
        <p class="mt-3 flex items-start gap-2 text-sm text-ink-muted">
          <MapPin class="mt-0.5 h-4 w-4 text-brand" :stroke-width="1.75" />
          <span>{{ practice.addressLine1 }}<br />{{ practice.addressLine2 }}</span>
        </p>
        <a
          :href="practice.phoneHref"
          class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand"
        >
          <Phone class="h-4 w-4" :stroke-width="1.75" />
          {{ practice.phoneDisplay }}
        </a>

        <ul class="mt-6 space-y-0 text-sm">
          <li
            v-for="entry in practice.hours"
            :key="entry.day"
            class="flex justify-between border-b border-ink/10 py-2"
          >
            <span>{{ entry.day }}</span>
            <span class="text-ink-muted">{{ entry.closed ? 'Closed' : `${entry.open} – ${entry.close}` }}</span>
          </li>
        </ul>

        <a
          :href="practice.mapsDirectionsUrl"
          class="mt-6 inline-flex h-11 items-center rounded-lg bg-ink px-5 text-sm font-semibold text-white"
          target="_blank"
          rel="noreferrer"
        >
          Get directions
        </a>
      </div>

      <div class="card mt-6 overflow-hidden rounded-2xl">
        <iframe
          title="Map of Dental Care on Yellow Bluff"
          :src="practice.mapsEmbedUrl"
          class="h-72 w-full"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>

    <RequestVisitForm />
  </section>
</template>

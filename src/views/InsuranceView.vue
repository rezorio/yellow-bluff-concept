<script setup>
import { Phone } from '@lucide/vue'
import PageHero from '../components/shared/PageHero.vue'
import ScheduleCta from '../components/shared/ScheduleCta.vue'
import { insurance } from '../data/insurance'
import { practice } from '../data/practice'
</script>

<template>
  <PageHero eyebrow="Insurance" :title="insurance.headline" :copy="insurance.copy" />
  <section class="bg-cream px-4 py-12 sm:px-6">
    <div class="card mx-auto max-w-3xl rounded-2xl p-6 sm:p-8">
      <ul class="space-y-3 text-base text-ink">
        <li v-for="note in insurance.notes" :key="note" class="flex gap-3">
          <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          <span>{{ note }}</span>
        </li>
      </ul>
      <div class="mt-8 flex flex-wrap gap-3">
        <a
          :href="practice.phoneHref"
          class="inline-flex h-12 items-center gap-2 rounded-lg bg-ink px-5 text-sm font-semibold text-white"
        >
          <Phone class="h-4 w-4" :stroke-width="1.75" />
          Call to verify
        </a>
        <ScheduleCta />
      </div>
    </div>
  </section>
</template>

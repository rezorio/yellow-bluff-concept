<script setup>
import { useSkin } from '../composables/useSkin'
import { services } from '../data/services'
import PageHero from '../components/shared/PageHero.vue'
import ScheduleCta from '../components/shared/ScheduleCta.vue'
import ServiceCard from '../components/shared/ServiceCard.vue'

const { isStudio } = useSkin()
</script>

<template>
  <PageHero
    eyebrow="Care"
    title="Smile with confidence."
    copy="You deserve a smile that looks good and works well — the team at Dental Care on Yellow Bluff is ready to help you get there."
  />
  <section :class="isStudio ? 'bg-mist' : 'bg-sand'">
    <div class="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ServiceCard v-for="service in services" :key="service.id" :service="service" />
      </div>
      <div class="mt-10 flex flex-col items-center gap-4">
        <p class="text-center text-sm text-ink">
          Have a question about a treatment you don’t see here?
          <RouterLink to="/visit" class="font-bold text-brand">Request a visit</RouterLink>
          and we’ll help you sort it out.
        </p>
        <ScheduleCta large />
      </div>
    </div>
  </section>
</template>

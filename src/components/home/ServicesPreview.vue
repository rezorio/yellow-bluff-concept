<script setup>
import { featuredServices } from '../../data/services'
import SectionHeading from '../shared/SectionHeading.vue'
import ServiceCard from '../shared/ServiceCard.vue'
</script>

<template>
  <section class="bg-mist">
    <div class="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Care"
          title="Precise treatment. Quiet rooms."
          copy="Emergency and Invisalign® sit first — then the everyday care people ask for most."
        />
        <RouterLink
          to="/services"
          class="text-sm font-medium text-brand underline-offset-4 hover:underline"
        >
          See all services
        </RouterLink>
      </div>
      <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ServiceCard
          v-for="service in featuredServices"
          :key="service.id"
          :service="service"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { featuredServices } from '../../data/services'
import SectionHeading from '../shared/SectionHeading.vue'
import ServiceCard from '../shared/ServiceCard.vue'
</script>

<template>
  <section class="bg-white">
    <div class="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Services"
          title="Comfortable care for the smile you want."
          copy="From calm first visits to Invisalign® and implants, start with the care people ask for most."
        />
        <RouterLink to="/services" class="text-sm font-semibold text-brand hover:underline">
          See all services
        </RouterLink>
      </div>
      <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <ServiceCard
          v-for="service in featuredServices"
          :key="service.id"
          :service="service"
        />
      </div>
    </div>
  </section>
</template>

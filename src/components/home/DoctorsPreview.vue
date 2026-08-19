<script setup>
import { doctors } from '../../data/doctors'
import DoctorCard from '../shared/DoctorCard.vue'
import SectionHeading from '../shared/SectionHeading.vue'
</script>

<template>
  <section class="bg-cream">
    <div class="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Clinicians"
          title="Care from a team you can talk to."
          copy="Two dentists, one neighborhood practice — with time to listen and a plan that fits your smile."
        />
        <RouterLink
          to="/team"
          class="text-sm font-medium text-brand underline-offset-4 hover:underline"
        >
          Meet the full team
        </RouterLink>
      </div>
      <div class="mt-10 grid gap-5 md:grid-cols-2">
        <DoctorCard v-for="doctor in doctors" :key="doctor.id" :doctor="doctor" />
      </div>
    </div>
  </section>
</template>

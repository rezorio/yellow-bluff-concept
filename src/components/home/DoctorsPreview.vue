<script setup>
import { doctors } from '../../data/doctors'
import DoctorCard from '../shared/DoctorCard.vue'
import SectionHeading from '../shared/SectionHeading.vue'
</script>

<template>
  <section class="bg-cream">
    <div class="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Meet the doctors"
          title="Care from a team you can talk to."
          copy="Two dentists, one neighborhood practice — with time to listen and a plan that fits your smile."
        />
        <RouterLink
          to="/team"
          class="text-sm font-semibold text-brand hover:underline"
        >
          Meet the full team
        </RouterLink>
      </div>
      <div class="mt-10 grid gap-6 md:grid-cols-2">
        <DoctorCard v-for="doctor in doctors" :key="doctor.id" :doctor="doctor" />
      </div>
    </div>
  </section>
</template>

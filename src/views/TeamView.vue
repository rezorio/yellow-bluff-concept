<script setup>
import { doctors } from '../data/doctors'
import DoctorCard from '../components/shared/DoctorCard.vue'
import PageHero from '../components/shared/PageHero.vue'
</script>

<template>
  <PageHero
    eyebrow="Meet our team"
    title="Built around one goal: your dream smile."
    copy="Get to know the dentists who will sit down with you, explain the plan, and take the rush out of the chair."
  />
  <section class="mx-auto max-w-6xl px-4 py-14 sm:px-6">
    <div class="grid gap-8 md:grid-cols-2">
      <DoctorCard
        v-for="doctor in doctors"
        :key="doctor.id"
        :doctor="doctor"
        detailed
      />
    </div>
  </section>
</template>

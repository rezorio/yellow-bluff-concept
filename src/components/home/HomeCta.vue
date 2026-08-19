<script setup>
import { useSkin } from '../../composables/useSkin'
import RequestVisitForm from '../shared/RequestVisitForm.vue'
import ScheduleCta from '../shared/ScheduleCta.vue'

const { isStudio } = useSkin()
</script>

<template>
  <section class="px-4 py-14 sm:px-6 sm:py-16" :class="isStudio ? 'bg-cream' : 'bg-sand'">
    <div class="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-2">
      <div>
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-brand-deep">
          New patients
        </p>
        <h2 class="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
          Ready for a calmer visit?
        </h2>
        <p class="mt-4 max-w-md text-base leading-relaxed text-ink sm:text-lg">
          Tell us a little about what you need. This demo form shows how scheduling could feel — a
          live site would send this straight to the front desk.
        </p>
        <div class="mt-6">
          <ScheduleCta large />
        </div>
      </div>
      <RequestVisitForm />
    </div>
  </section>
</template>

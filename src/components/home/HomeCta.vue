<script setup>
import RequestVisitForm from '../shared/RequestVisitForm.vue'
</script>

<template>
  <section class="bg-cream px-4 py-14 sm:px-6 sm:py-16">
    <div class="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-2">
      <div>
        <p class="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
          New patients
        </p>
        <h2 class="mt-3 font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          Ready for a calmer visit?
        </h2>
        <p class="mt-4 max-w-md text-[15px] leading-relaxed text-ink-muted">
          Tell us a little about what you need. This demo form shows how scheduling could feel — a
          live site would send this straight to the front desk.
        </p>
      </div>
      <RequestVisitForm />
    </div>
  </section>
</template>

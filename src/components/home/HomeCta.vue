<script setup>
import RequestVisitForm from '../shared/RequestVisitForm.vue'
</script>

<template>
  <section class="bg-sand-light">
    <div class="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand">New patients welcome</p>
        <h2 class="mt-2 font-serif text-3xl text-ink sm:text-4xl">
          Ready for a calmer visit?
        </h2>
        <p class="mt-4 max-w-md text-base leading-relaxed text-ink-muted">
          Tell us a little about what you need. This demo form shows how easy scheduling could feel —
          a live site would send this straight to the front desk.
        </p>
        <img
          src="/images/office.jpg"
          alt="Bright, modern dental treatment room"
          class="mt-8 hidden h-64 w-full rounded-3xl object-cover lg:block"
        />
      </div>
      <RequestVisitForm />
    </div>
  </section>
</template>
